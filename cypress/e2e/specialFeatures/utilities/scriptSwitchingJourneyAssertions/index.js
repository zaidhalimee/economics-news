import appConfig from '../../../../../src/server/utilities/serviceConfigs/index';

const assertScriptSwitchButton = (product, variantValue) => {
  const scriptToSwitchToText = appConfig[product][variantValue].scriptLink.text;
  const scriptToSwitchTo = appConfig[product][variantValue].scriptLink.variant;

  cy.contains(scriptToSwitchToText, { matchCase: false });
  cy.get('header[role="banner"]')
    .first()
    .within(() => {
      cy.get(`a[data-variant="${scriptToSwitchTo}"]`).should('exist');
    });
};

const assertURLContains = (serviceName, variantValue) => {
  cy.url().should(url => {
    url.includes(`${serviceName}/${variantValue}/`);
  });
};

const assertLang = (serviceName, variantValue) => {
  const expectedLang = appConfig[serviceName][variantValue].lang;
  cy.get('html')
    .should('have.attr', 'lang')
    .then($lang => {
      expect($lang.toLowerCase()).to.equal(expectedLang);
    });
};

export default (serviceName, variantValue) => {
  // Assert the script switch button is correct for variant
  cy.log('assertScriptSwitchButton');
  assertScriptSwitchButton(serviceName, variantValue);
  // Assert URL contains correct variant
  cy.log('assertURLContains');
  assertURLContains(serviceName, variantValue);
  // Issue with 'have.property' assertion
  cy.log('assertLang');
  assertLang(serviceName, variantValue);
};
