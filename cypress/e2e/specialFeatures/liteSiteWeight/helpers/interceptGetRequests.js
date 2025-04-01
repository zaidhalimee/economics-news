export const interceptGetRequests = path => {
  cy.intercept('GET', path, req => {
    req.headers['Cache-Control'] = 'no-cache';
  }).as('pageRequest');

  cy.intercept('GET', 'http://static.chartbeat.com/js/chartbeat.js').as(
    'chartbeatRequest',
  );
};
