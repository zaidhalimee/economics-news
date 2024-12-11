import addSimorghToRequestChain from '.';

describe('addSimorghToRequestChain', () => {
  it('appends SIMORGH to the req-svc-chain header if it exists', () => {
    const headers = { 'req-svc-chain': 'SERVICE_1,SERVICE_2' };
    addSimorghToRequestChain(headers);

    expect(headers['req-svc-chain']).toStrictEqual(
      'SERVICE_1,SERVICE_2,SIMORGH',
    );
  });

  it('does not append SIMORGH to the req-svc-chain header if it does not exist', () => {
    const headers = { 'header-name': 'header-value' };

    addSimorghToRequestChain(headers);

    expect(headers).not.toHaveProperty('req-svc-chain');
  });
});
