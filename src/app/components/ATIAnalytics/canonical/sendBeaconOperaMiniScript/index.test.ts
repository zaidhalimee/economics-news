/* eslint-disable no-eval */
import * as analyticsUtils from '#app/lib/analyticsUtils';
import sendBeaconOperaMiniScript from '.';

interface WindowOperaMini extends Window {
  hasOperaMiniScriptRan?: boolean;
  operamini?: object;
}

let windowSpy: jest.SpyInstance<Window | undefined, []>;
let XMLHttpRequestSpy: jest.SpyInstance<XMLHttpRequest | undefined, []>;

const getReferrerSpy = jest
  .spyOn(analyticsUtils, 'getReferrer')
  .mockImplementation(() => null);

describe('sendBeaconOperaMiniScript', () => {
  class OperaMiniMock {
    // eslint-disable-next-line class-methods-use-this
    get [Symbol.toStringTag]() {
      return 'OperaMini';
    }
  }

  const XMLHttpRequestMock: Partial<XMLHttpRequest> = {
    open: jest.fn(),
    withCredentials: false,
    send: jest.fn(),
  };

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
    XMLHttpRequestSpy = (
      jest.spyOn(window, 'XMLHttpRequest') as jest.Mock
    ).mockImplementation(() => XMLHttpRequestMock as XMLHttpRequest);
  });

  afterEach(() => {
    windowSpy.mockRestore();
    XMLHttpRequestSpy.mockRestore();
    jest.clearAllMocks();
  });

  describe('when browser is Opera Mini', () => {
    beforeEach(() => {
      windowSpy.mockImplementation(
        () =>
          ({
            operamini: new OperaMiniMock(),
          }) as WindowOperaMini,
      );
    });

    it('should send beacon with XHR', () => {
      eval(sendBeaconOperaMiniScript('https://foobar.com'));

      expect(XMLHttpRequestMock.open).toHaveBeenCalledWith(
        'GET',
        'https://foobar.com',
        true,
      );
    });

    it('should send beacon including the referrer with XHR', () => {
      getReferrerSpy.mockImplementationOnce(
        () => 'https://client.referrer.com',
      );

      eval(sendBeaconOperaMiniScript('https://foobar.com'));

      expect(XMLHttpRequestMock.open).toHaveBeenCalledWith(
        'GET',
        'https://foobar.com&ref=https://client.referrer.com',
        true,
      );
    });

    it('should NOT send more than 1 beacon with XHR', () => {
      const check = {
        hasOperaMiniScriptRan: false,
        operamini: new OperaMiniMock(),
      } as WindowOperaMini;

      windowSpy.mockImplementation(() => check);

      const multipleCalls =
        sendBeaconOperaMiniScript('https://foobar.com') +
        sendBeaconOperaMiniScript('https://foobar.com') +
        sendBeaconOperaMiniScript('https://foobar.com');

      eval(multipleCalls);

      expect(XMLHttpRequestMock.open).toHaveBeenCalledTimes(1);
    });
  });

  it('should not send beacon with XHR, when browser is not Opera Mini', () => {
    eval(sendBeaconOperaMiniScript('https://foobar.com'));

    expect(XMLHttpRequestMock.open).not.toHaveBeenCalled();
  });
});
