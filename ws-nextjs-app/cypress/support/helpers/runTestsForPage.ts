export default ({ pageType, testSuites, testIsolation = false }) => {
  testSuites.forEach(testData => {
    const { path, tests, runforEnv, ...params } = testData;
    const cypressEnv = Cypress.env('APP_ENV');

    if (runforEnv.includes(cypressEnv)) {
      describe(`${Cypress.config().baseUrl}${path}`, { testIsolation }, () => {
        before(() => {
          cy.intercept('GET', path, req => {
            req.headers['Cache-Control'] = 'no-cache';
          }).as('pageRequest');

          cy.intercept(
            'GET',
            'http://static.chartbeat.com/js/chartbeat.js',
            req => {
              req.headers['Cache-Control'] = 'no-cache';
            },
          ).as('chartbeatRequest');

          cy.visit(path);

          cy.wait(['@pageRequest', '@chartbeatRequest']).then(interceptions => {
            let pageSize = interceptions[0].response.body.length / 1024;
            let chartbeatSize = interceptions[1].response.body.length / 1024;

            console.log('Page size:', pageSize);
            console.log('Chartbeat size:', chartbeatSize);
            Cypress.env('PAGE_SIZE', pageSize);
            Cypress.env('CHARTBEAT_SIZE', chartbeatSize);
          });
        });

        tests.forEach(test => {
          test({ path, pageType, ...params });
        });
      });
    }
  });
};
