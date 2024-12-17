import React from 'react';
import { render } from '../react-testing-library-with-providers';
import EasyReadCTA from '.';

describe('LiteSiteCTA', () => {
  it('Should have a hidden strong element with lite site identifier.', () => {
    const { container } = render(
      <EasyReadCTA fullVersionLink="https://www.test.bbc.com/news/articles/c0g992jmmkko" />,
    );
    const strongText = container.querySelector('strong');
    expect(strongText?.innerHTML).toBe('Easy read version');
    expect(strongText).toHaveAttribute('hidden');
  });
  it('Should have a CTA link to the main site.', () => {
    const { container } = render(
      <EasyReadCTA fullVersionLink="https://www.test.bbc.com/news/articles/c0g992jmmkko" />,
    );
    const [ctaText] = container.querySelectorAll('a span');
    const [ctaLink] = container.querySelectorAll(
      'a[href="https://www.test.bbc.com/news/articles/c0g992jmmkko"]',
    );
    expect(ctaText?.innerHTML).toBe('Take me to the standard version');
    expect(ctaLink).toBeTruthy();
  });
});
