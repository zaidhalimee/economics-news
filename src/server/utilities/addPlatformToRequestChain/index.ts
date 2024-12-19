export default ({
  headers,
  application,
}: {
  headers: { [x: string]: string } | Headers;
  application: 'EXPRESS' | 'NEXTJS';
}) => {
  const requestHeaders = new Headers(headers);

  const requestServiceChain = requestHeaders.get('req-svc-chain');

  const simorghPlatform = 'SIMORGH';
  let platformApplication = `${simorghPlatform},${application}`;

  if (requestServiceChain) {
    platformApplication = `,${simorghPlatform},${application}`;
    const finalService = requestServiceChain.split(',').pop();
    if (finalService === simorghPlatform) {
      platformApplication = `,${application}`;
    }
  }

  return requestServiceChain
    ? `${requestServiceChain}${platformApplication}`
    : platformApplication;
};
