const clickFirstLink = () => {
  cy.get('a').first().click();
};

const clickFirstMapLink = () => {
  cy.get('[data-e2e="media-indicator"]').then($styledMediaIndicators => {
    if ($styledMediaIndicators.length > 0) {
      cy.get('[data-e2e="media-indicator"]')
        .first()
        .parentsUntil('[data-testid="topic-promos"]')
        .first()
        .within(() => {
          clickFirstLink();
        });
    } else {
      // If a MAP item isn't found on the home page, click the first promo item.
      clickFirstLink();
    }
  });
};

export const clickScriptSwitcher = variant => {
  cy.get(`a[data-variant="${variant}"]`).click();
};

// ToDo: double check this method is not used elsewhere
export const clickHomePageLink = (product, variant) => {
  cy.get('header[role="banner"]').within(() => {
    cy.get(`a[aria-labelledby="BrandLink-topPage"][href="/${product}/${variant}"]`).click();
  });
};

export const clickPromoLinkOnHomePage = pageType => {
  cy.get('[data-testid="topic-promos"]').first().within(() => {
    // If it is a MAP test, find first MAP within a StoryPromoLi item and click it
    if (pageType === 'mediaAssetPage') {
      clickFirstMapLink();
    } else {
      // If it isn't a MAP page being tested, click the first promo item
      clickFirstLink();
    }
  });
};
