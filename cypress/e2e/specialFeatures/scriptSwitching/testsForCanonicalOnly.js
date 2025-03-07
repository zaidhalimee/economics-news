import visitPage from '../../../support/helpers/visitPage';
import allVariantAssertions from '../utilities/scriptSwitchingJourneyAssertions';
import {
  clickScriptSwitcher,
  clickHomePageLink,
  clickPromoLinkOnHomePage,
} from '../utilities/scriptSwitchingJourneyActions';
import {
  getPrivacyBannerAccept,
  getCookieBannerAcceptCanonical,
} from '../utilities/cookiePrivacyBanner';

export default ({
  serviceId,
  serviceName,
  pageType,
  path,
  variant,
  otherVariant,
}) => {
  describe(`Script Switching - ${serviceName} - ${pageType} - ${path}`, () => {
    // This test suite is being skipped due to flakey failing within our build pipeline. Being investigated here https://github.com/bbc/simorgh/issues/6399
    beforeEach(() => {
      // cy.clearCookies();
      // ToDO: ask if testing the cookie banner is important in this context - seems to be causing a lot of the flakiness
      cy.setCookie('ckns_explicit', '1')
      visitPage(path, pageType);
    });

    beforeEach(() => cy.fixture(`toggles/${serviceId}.json`).as('toggles'));


    it(`should change to the correct script when switching script from ${variant} to ${otherVariant}`, () => {
      // cy.get('@toggles').then(toggles => {
      //   // Accept privacy banner
      //   if (toggles?.privacyPolicy?.enabled)
      //     getPrivacyBannerAccept(serviceId, variant).click();
      // });

      // Accept cookie banner
      // getCookieBannerAcceptCanonical(serviceId, variant).click();

      cy.log(
        `Asserting script switch button, url and document lang for variant: ${variant}`,
      );
      allVariantAssertions(serviceName, variant);

      // // Clicks script switcher
      clickScriptSwitcher(otherVariant);

      cy.log(
        `Asserting script switch button, url and document lang for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant);

      // // Navigate to home page by clicking link in the banner
      clickHomePageLink(serviceName, otherVariant);

      cy.log(
        `Asserting script switch button, url and document lang has persisted for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant);

      // // Finding a link to click on the home page
      clickPromoLinkOnHomePage(pageType);

      // FLAKINESS SEESM MOSTLY BECAUSE OF getCookieBannerCanonical
      
      cy.log(
        `Asserting script switch button, url and document lang has persisted for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant); // FLAKY

      // // Clicks script switcher to original variant
      clickScriptSwitcher(variant);

      cy.log(
        `Asserting script switch button, url and document lang have changed after clicking script switcher to ${variant}`,
      );
      allVariantAssertions(serviceName, variant);
    });
  });
};
