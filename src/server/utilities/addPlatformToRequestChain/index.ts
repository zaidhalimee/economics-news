export default ({
  headers,
  application,
}: {
  headers: { [x: string]: string } | Headers;
  application: 'EXPRESS' | 'NEXTJS';
}) => {
  const requestHeaders = new Headers(headers);

  let requestServiceChain = requestHeaders.get('req-svc-chain');

  const simorghPlatform = 'SIMORGH';
  const platformApplication = `${simorghPlatform},${application}`;

  if (requestServiceChain) {
    if (requestServiceChain.endsWith(simorghPlatform)) {
      requestServiceChain = requestServiceChain.replace(
        simorghPlatform,
        platformApplication,
      );
    } else {
      requestServiceChain = `${requestServiceChain},${platformApplication}`;
    }
  } else {
    requestServiceChain = platformApplication;
  }

  return requestServiceChain;
};
