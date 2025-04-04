import getPageSizeInKB from './getPageSizeInKB';
import roundTo2Decimals from './roundTo2Decimals';

export default requests => {
  let totalSize = 0;
  // eslint-disable-next-line cypress/unsafe-to-chain-command
  return cy
    .wrap(requests)
    .each(({ url, contentLength }) => {
      if (contentLength) {
        totalSize += contentLength;
      } else {
        getPageSizeInKB(url).then(size => {
          cy.task('table', [
            {
              Request: url,
              'Request Size (KB)': size,
            },
          ]);
          totalSize += size;
        });
      }
    })
    .then(() => {
      return roundTo2Decimals(totalSize);
    });
};
