import addPlatformToRequestChain from '.';

describe('addPlatformToRequestChain', () => {
  it('appends SIMORGH to the req-svc-chain header if it exists', () => {
    const headers = { 'req-svc-chain': 'SERVICE_1,SERVICE_2' };
    const result = addPlatformToRequestChain({
      headers,
      application: 'EXPRESS',
    });

    expect(result).toStrictEqual('SERVICE_1,SERVICE_2,SIMORGH,EXPRESS');
  });

  it('appends NEXTJS to the req-svc-chain header if it exists', () => {
    const headers = { 'req-svc-chain': 'SERVICE_1,SERVICE_2' };
    const result = addPlatformToRequestChain({
      headers,
      application: 'NEXTJS',
    });

    expect(result).toStrictEqual('SERVICE_1,SERVICE_2,SIMORGH,NEXTJS');
  });

  it('returns SIMORGH if the req-svc-chain header does not exist', () => {
    const headers = { 'header-name': 'header-value' };
    const result = addPlatformToRequestChain({
      headers,
      application: 'EXPRESS',
    });

    expect(result).toStrictEqual('SIMORGH,EXPRESS');
  });
});
