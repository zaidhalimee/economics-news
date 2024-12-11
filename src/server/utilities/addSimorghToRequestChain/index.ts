export default (headers: { [x: string]: string }) => {
  const requestHeaders = new Headers(headers);

  if (requestHeaders.get('req-svc-chain')) {
    requestHeaders.append('req-svc-chain', 'SIMORGH');
  }

  console.log(requestHeaders.get('req-svc-chain'));
};
