export default ({
  headers,
  application,
}: {
  headers: { [x: string]: string };
  application: 'EXPRESS' | 'NEXTJS';
}) => {
  const requestHeaders = new Headers(headers);

  const requestServiceChain = requestHeaders.get('req-svc-chain');

  const platform = `SIMORGH,${application}`;

  return requestServiceChain ? `${requestServiceChain},${platform}` : platform;
};
