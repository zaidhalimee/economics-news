import isLive from '#app/lib/utilities/isLive';
import onClient from '#app/lib/utilities/onClient';
import isTestRequested from '.';

jest.mock('#app/lib/utilities/isLive', () =>
  jest.fn().mockImplementation(() => false),
);

jest.mock('#app/lib/utilities/onClient', () =>
  jest.fn().mockImplementation(() => true),
);

describe('isTestRequested', () => {
  it('should return false when on live environment', () => {
    (isLive as jest.Mock).mockImplementationOnce(() => true);

    expect(isTestRequested()).toBe(false);
  });

  it('should return false when not on live and not on client', () => {
    (onClient as jest.Mock).mockImplementationOnce(() => false);

    expect(isTestRequested()).toBe(false);
  });

  describe('should return', () => {
    it.each`
      hostname                           | rendererEnv  | expectedResult | reason
      ${'http://localhost.bbc.com:7080'} | ${'test'}    | ${true}        | ${'host is local and renderer_env is test'}
      ${'https://www.test.bbc.com'}      | ${'test'}    | ${true}        | ${'host is test and renderer_env is test'}
      ${'https://test.bbc.com'}          | ${'test'}    | ${true}        | ${'host is test and renderer_env is test'}
      ${'http://localhost.bbc.com:7080'} | ${undefined} | ${false}       | ${'host is local but renderer_env is undefined'}
      ${'https://www.test.bbc.com'}      | ${undefined} | ${false}       | ${'host is test but renderer_env is undefined'}
      ${'https://test.bbc.com'}          | ${undefined} | ${false}       | ${'host is test but renderer_env is undefined'}
      ${'http://localhost.bbc.com:7080'} | ${'live'}    | ${false}       | ${'host is local and renderer_env is live'}
      ${'https://www.test.bbc.com'}      | ${'live'}    | ${false}       | ${'host is test and renderer_env is live'}
      ${'https://test.bbc.com'}          | ${'live'}    | ${false}       | ${'host is test and renderer_env is live'}
      ${'https://stage.bbc.com'}         | ${undefined} | ${false}       | ${'host does not match test or localhost'}
    `(
      '$expectedResult when hostname is $hostname and renderer_env is $rendererEnv because $reason',
      ({ hostname, rendererEnv, expectedResult }) => {
        const mockWindowObj = {
          location: {
            hostname,
            ...(rendererEnv && {
              search: {
                renderer_env: rendererEnv,
              },
            }),
          },
        } as Window & typeof globalThis;

        jest
          .spyOn(global, 'window', 'get')
          .mockImplementation(() => mockWindowObj);

        expect(isTestRequested()).toBe(expectedResult);
      },
    );
  });
});
