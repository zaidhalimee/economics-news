/* eslint-disable import/prefer-default-export */
import getAppEnv from '../../../support/helpers/getAppEnv';

// Limiting to one service for now
const serviceHasPublishedPromo = service => service === 'arabic';

// For testing features that may differ across services but share a common logic e.g. translated strings.
export const testsThatFollowSmokeTestConfig = ({ service }) => {
  if (serviceHasPublishedPromo(service) && getAppEnv() === 'live') {
    it('individual promo should link to corresponding article pages and back navigation should link to frontpage', done => {
      cy.viewport(1008, 768);
      // This is to catch an application error that keeps failing live E2Es
      // See issue #9138
      // We are waiting for a response from Google to find a fix
      // And in the meantime are stopping this error failing the tests
      // eslint-disable-next-line no-unused-vars
      cy.on('uncaught:exception', err => {
        expect(err.message).to.include('application');
        done();
        return false;
      });

      let currentURL = null;
      cy.get('h3')
        .eq(3)
        .within(() => {
          cy.get('a')
            .should('have.attr', 'href')
            .then(href => {
              cy.request({
                url: href,
                failOnStatusCode: false,
              }).then(resp => {
                expect(resp.status).to.not.equal(404);
              });
            });
        });

      cy.url().then(url => {
        currentURL = url;
        cy.get('h3').eq(3).click();
        cy.go('back');
        cy.url().should('eq', currentURL);
        // If I run the tests without this done() I get an error saying 'The done() callback was never invoked!'
        done();
      });
    });
  }
};
