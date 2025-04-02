export default allRequests => {
  cy.intercept('GET', '**', request => {
    request.continue(async response => {
      allRequests.push(response.body);
    });
  });
};
