/* eslint-disable global-require */
import loggerMock from '#testHelpers/loggerMock';
import { ATI_LOGGING_ERROR } from '#app/lib/logger.const';

let fetchResponse;
let isOnClient;

const reverbMock = {
  isReady: jest.fn(),
  initialise: jest.fn(() => Promise.resolve()),
  viewEvent: jest.fn(),
  userActionEvent: jest.fn(),
};

// eslint-disable-next-line no-underscore-dangle
window.__reverb = {
  __reverbLoadedPromise: Promise.resolve(reverbMock),
};

describe('sendBeacon', () => {
  beforeEach(() => {
    isOnClient = true;
    fetch.mockImplementation(() => fetchResponse);
    jest.mock('../../utilities/onClient', () => jest.fn());
    const onClient = require('../../utilities/onClient');
    onClient.mockImplementation(() => isOnClient);
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it(`should fetch`, () => {
    const sendBeacon = require('./index').default;

    sendBeacon('https://foobar.com');

    expect(fetch).toHaveBeenCalledWith('https://foobar.com', {
      credentials: 'include',
    });
  });

  it(`should not fetch when not on client`, () => {
    isOnClient = false;

    const sendBeacon = require('./index').default;

    sendBeacon('https://foobar.com');

    expect(fetch).not.toHaveBeenCalled();
  });

  describe('Reverb', () => {
    const reverbConfig = {
      params: {
        page: 'page',
        user: '1234-5678',
      },
      eventName: 'pageView',
    };

    it('should call Reverb viewEvent if Reverb config is passed', async () => {
      const sendBeacon = require('./index').default;

      await sendBeacon('https://foobar.com', reverbConfig);

      expect(reverbMock.viewEvent).toHaveBeenCalledTimes(1);
    });

    it('should not call "fetch" if Reverb config is passed', async () => {
      const sendBeacon = require('./index').default;

      await sendBeacon('https://foobar.com', reverbConfig);

      expect(fetch).not.toHaveBeenCalled();
    });
  });

  describe('when the fetch fails', () => {
    let error;

    beforeEach(() => {
      error = new Error('An error');
      fetchResponse = Promise.reject(error);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it(`should send error to logger`, async () => {
      const sendBeacon = require('./index').default;

      await sendBeacon('https://foobar.com');

      expect(loggerMock.error).toHaveBeenCalledWith(ATI_LOGGING_ERROR, {
        error,
      });
    });
  });
});
