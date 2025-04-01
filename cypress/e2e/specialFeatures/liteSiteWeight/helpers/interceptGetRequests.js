const logGet = allRequests => request => {
  request.continue(response => {
    let sizeInKB = 0;
    if (response.body && typeof response.body.length === 'number') {
      sizeInKB = response.body.length / 1024;
    } else if (response.headers['content-length']) {
      sizeInKB = response.headers['content-length'] / 1024;
    }

    if (isNaN(sizeInKB)) {
      sizeInKB = 0;
    }

    allRequests.push({ url: request.url, sizeInKB });
  });
};

export const interceptGetRequests = allRequests => {
  cy.intercept('GET', '**', logGet(allRequests));
};
