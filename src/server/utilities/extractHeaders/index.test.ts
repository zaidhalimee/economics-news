import extractHeaders from '.';

describe('extractHeader', () => {
  it(`sets isUK to true when 'x-bbc-edge-isuk' is set to yes`, () => {
    const actual = extractHeaders({
      'x-bbc-edge-isuk': 'yes',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: true,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets isUK to true when 'x-country' is set to 'gb'`, () => {
    const actual = extractHeaders({
      'x-country': 'gb',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: true,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets showCookieBannerBasedOnCountry to false when 'x-country' is set to 'za' and 'x-bbc-edge-isuk' is set to 'no'`, () => {
    const actual = extractHeaders({
      'x-country': 'za',
      'x-bbc-edge-isuk': 'no',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: false,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: false,
    });
  });

  it(`sets showCookieBannerBasedOnCountry to true when 'x-country' is set to 'za' and 'x-bbc-edge-isuk' is set to 'yes'`, () => {
    const actual = extractHeaders({
      'x-country': 'za',
      'x-bbc-edge-isuk': 'yes',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: true,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets showCookieBannerBasedOnCountry to false when 'x-bbc-edge-country' is set to 'za'`, () => {
    const actual = extractHeaders({
      'x-bbc-edge-country': 'za',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: null,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: false,
    });
  });

  it(`sets showAdsBasedOnLocation to true when 'bbc-adverts' header is set to 'true'`, () => {
    const actual = extractHeaders({
      'bbc-adverts': 'true',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: null,
      isUK: null,
      showAdsBasedOnLocation: true,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets bbcOrigin when 'bbc-origin' header is set`, () => {
    const actual = extractHeaders({
      'bbc-origin': 'https://www.bbc.co.uk/news',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '4g',
      bbcOrigin: 'https://www.bbc.co.uk/news',
      isUK: null,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets DeviceMemory when 'device-memory' header is set`, () => {
    const actual = extractHeaders({
      'device-memory': '4',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: '4',
      ECT: '4g',
      bbcOrigin: null,
      isUK: null,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });

  it(`sets ECT when 'ECT' header is set`, () => {
    const actual = extractHeaders({
      ect: '2g',
    });
    expect(actual).toStrictEqual({
      DeviceMemory: 8,
      ECT: '2g',
      bbcOrigin: null,
      isUK: null,
      showAdsBasedOnLocation: false,
      showCookieBannerBasedOnCountry: true,
    });
  });
});
