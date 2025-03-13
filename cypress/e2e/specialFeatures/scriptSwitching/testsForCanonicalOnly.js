import visitPage from '../../../support/helpers/visitPage';
import allVariantAssertions from '../utilities/scriptSwitchingJourneyAssertions';
import {
  clickScriptSwitcher,
  clickHomePageLink,
  clickPromoLinkOnHomePage,
} from '../utilities/scriptSwitchingJourneyActions';

export default ({ serviceName, pageType, path, variant, otherVariant }) => {
  describe(`Script Switching - ${serviceName} - ${pageType} - ${path}`, () => {
    beforeEach(() => {
      visitPage(path, pageType);
    });

    it(`should change to the correct script when switching script from ${variant} to ${otherVariant}`, () => {
      cy.log(
        `Asserting script switch button, url and document lang for variant: ${variant}`,
      );
      allVariantAssertions(serviceName, variant);

      // Clicks script switcher
      clickScriptSwitcher(otherVariant);

      cy.log(
        `Asserting script switch button, url and document lang for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant);

      // Navigate to home page by clicking link in the banner
      clickHomePageLink(serviceName, otherVariant);

      cy.log(
        `Asserting script switch button, url and document lang has persisted for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant);

      // Finding a link to click on the home page
      clickPromoLinkOnHomePage(pageType);

      cy.log(
        `Asserting script switch button, url and document lang has persisted for other variant: ${otherVariant}`,
      );
      allVariantAssertions(serviceName, otherVariant);

      // Clicks script switcher to original variant
      clickScriptSwitcher(variant);

      cy.log(
        `Asserting script switch button, url and document lang have changed after clicking script switcher to ${variant}`,
      );
      allVariantAssertions(serviceName, variant);
    });
  });
};
