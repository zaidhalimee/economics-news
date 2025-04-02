const logGet = allRequests => request => {
  request.continue(async response => {
    allRequests.push(response.body);
  });
};

export default allRequests => {
  cy.intercept('GET', '**', logGet(allRequests));
};
