export default allRequests => {
  cy.intercept('GET', '**', request => {
    request.continue(response => {
      const contentLength = response.headers['content-length'];
      allRequests.push({
        url: response.url,
        ...(contentLength && {
          contentLength: parseFloat(contentLength) / 1024,
        }),
      });
    });
  });
};
