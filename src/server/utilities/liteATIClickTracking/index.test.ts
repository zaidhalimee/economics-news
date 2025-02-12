import { LITE_ATI_TRACKING } from '#app/hooks/useClickTrackerHandler';
import liteATIClickTracking from '.';

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
  const originalWindowLocation = window.location;

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-11-13T16:30:02.000Z'));
    let mockCookie = '';
    Object.defineProperty(document, 'cookie', {
      get() {
        return mockCookie;
      },
      set(cookieValue) {
        mockCookie = cookieValue;
      },
    });
    Object.defineProperty(window, 'location', {
      value: {
        assign: jest.fn(),
      },
    });
    liteATIClickTracking();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    window.sendBeaconLite = jest.fn();
    window.dispatchEvent(new Event('load'));
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        ...originalWindowLocation,
      },
    });
  });

  it('Does not call sendBeacon if the event has no data-ati-tracking parameter, but still redirects', () => {
    const anchorElement = document.createElement('a');
    anchorElement.href = '/gahuza';

    dispatchClick(anchorElement);

    expect(window.sendBeaconLite).toHaveBeenCalledTimes(0);
    const nextPageUrl = (window.location.assign as jest.Mock).mock.calls[0][0];
    expect(nextPageUrl).toContain('/gahuza');
  });

  it('Sets a new cookie if there is no atuserid cookie on the user browser', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      LITE_ATI_TRACKING,
      'https://logws1363.ati-host.net/?',
    );

    (crypto.randomUUID as jest.Mock).mockReturnValueOnce('randomUniqueId');
    dispatchClick(anchorElement);
    expect(document.cookie).toBe(
      'atuserid=%7B%22val%22%3A%22randomUniqueId%22%7D; path=/; max-age=397; Secure;',
    );
  });

  it('Does not overwrite content in atuserid cookie if it already exists', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      LITE_ATI_TRACKING,
      'https://logws1363.ati-host.net/?',
    );

    const oldCookieId = '22ea8f97e5-4c34-4d23-af1d-4d1789206639';

    document.cookie = `atuserid=%7B%22name%22%3A%22atuserid%22%2C%22val%22%3A%${oldCookieId}%22%2C%22options%22%3A%7B%22end%22%3A%222026-03-11T10%3A23%3A55.442Z%22%2C%22path%22%3A%22%2F%22%7D%7D; path=/; max-age=397; Secure;`;
    (crypto.randomUUID as jest.Mock).mockReturnValueOnce('newCookieId');
    dispatchClick(anchorElement);

    expect(document.cookie).toBe(
      `atuserid=%7B%22name%22%3A%22atuserid%22%2C%22val%22%3A%${oldCookieId}%22%2C%22options%22%3A%7B%22end%22%3A%222026-03-11T10%3A23%3A55.442Z%22%2C%22path%22%3A%22%2F%22%7D%7D; path=/; max-age=397; Secure;`,
    );
  });

  it('Reuses the atuserid cookie if there is a atuserid cookie on the user browser', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      LITE_ATI_TRACKING,
      'https://logws1363.ati-host.net/?',
    );

    document.cookie =
      'atuserid={"val":"oldCookieId"}; path=/; max-age=397; Secure;';
    (crypto.randomUUID as jest.Mock).mockReturnValueOnce('newCookieId');
    dispatchClick(anchorElement);

    const callParam = (window.sendBeaconLite as jest.Mock).mock.calls[0][0];

    expect(callParam).toContain('idclient=oldCookieId');
  });

  it('Calls sendBeaconLite() with the correct url', () => {
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute(
      LITE_ATI_TRACKING,
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
});
