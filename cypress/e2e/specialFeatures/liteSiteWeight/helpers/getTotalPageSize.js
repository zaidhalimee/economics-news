import getPageSizeInKB from './getPageSizeInKB';

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
          totalSize += size;
        });
      }
    })
    .then(() => {
      return totalSize;
    });
};
