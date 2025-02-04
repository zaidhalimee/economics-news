import trackingScript from '.';

const dispatchClick = (targetElement: HTMLElement) => {
  document.body.appendChild(targetElement);
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  targetElement.dispatchEvent(event);
};

describe('Click tracking script', () => {
  const randomUUIDMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date(1731515402000));

    trackingScript();

    document.cookie =
      'atuserid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.location = {
      assign: jest.fn(),
    };

    window.sendBeaconLite = jest.fn();

    Object.defineProperty(global, 'crypto', {
      value: {
        randomUUID: randomUUIDMock,
      },
    });

    window.dispatchEvent(new Event('load'));
  });

  it('Sets a new cookie if there is no atuserid cookie on the user browser', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      'data-ati-tracking',
      'https://logws1363.ati-host.net/?',
    );

    randomUUIDMock.mockReturnValueOnce('randomUniqueId');
    dispatchClick(anchorElement);

    expect(document.cookie).toBe('atuserid={"val":"randomUniqueId"}');
  });

  it('Reuses the atuserid cookie if there is a atuserid cookie on the user browser', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      'data-ati-tracking',
      'https://logws1363.ati-host.net/?',
    );

    document.cookie = 'atuserid={"val":"oldCookieId"}';
    randomUUIDMock.mockReturnValueOnce('newCookieId');
    dispatchClick(anchorElement);

    const callParam = (window.sendBeaconLite as jest.Mock).mock.calls[0][0];

    expect(callParam).toContain('idclient=oldCookieId');
  });

  it('Calls sendBeaconLite() with the correct url', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      'data-ati-tracking',
      'https://logws1363.ati-host.net/?',
    );

    window.screen = {
      width: 100,
      height: 400,
      colorDepth: 24,
      pixelDepth: 24,
      availWidth: 400,
      availHeight: 100,
      orientation: 'landscape' as unknown as ScreenOrientation,
    };
    window.innerWidth = 4060;
    window.innerHeight = 1080;
    Object.defineProperty(navigator, 'language', {
      get() {
        return 'en-GB';
      },
    });

    dispatchClick(anchorElement);

    const callParam = (window.sendBeaconLite as jest.Mock).mock.calls[0][0];

    const parsedATIParams = Object.fromEntries(new URLSearchParams(callParam));

    expect(parsedATIParams).toMatchObject({
      hl: '16x30x2',
      lng: 'en-GB',
      r: '0x0x24x24',
      re: '4060x1080',
    });
  });

  it('Does not call sendBeacon if the event has no data-ati-tracking parameter', () => {
    const anchorElement = document.createElement('a');

    dispatchClick(anchorElement);

    expect(window.sendBeaconLite).toHaveBeenCalledTimes(0);
  });
});
