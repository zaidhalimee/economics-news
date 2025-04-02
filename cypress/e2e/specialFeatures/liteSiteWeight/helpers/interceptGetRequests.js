const logGet = allRequests => request => {
  request.continue(async response => {
    allRequests.push(response.body);
  });
};

export const interceptGetRequests = allRequests => {
  cy.intercept('GET', '**', logGet(allRequests));
};
