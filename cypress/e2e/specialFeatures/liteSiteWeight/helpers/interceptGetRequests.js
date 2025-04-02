export default allRequests => {
  cy.intercept('GET', '**', request => {
    request.continue(response => {
      allRequests.push(response.body);
    });
  });
};
