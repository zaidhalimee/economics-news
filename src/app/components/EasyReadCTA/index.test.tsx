import React from 'react';
import { render } from '../react-testing-library-with-providers';
import EasyReadCTA from '.';

describe('LiteSiteCTA', () => {
  it('Should have a hidden strong element with lite site identifier.', () => {
    const { container } = render(
      <EasyReadCTA
        easyReadAssetId="crkdy3r685jo"
        originalAssetId="cy0grkwd3zlo"
      />,
    );
    const strongText = container.querySelector('strong');
    expect(strongText?.innerHTML).toBe('Format');
    expect(strongText).toHaveAttribute('hidden');
  });

  it('Should have a CTA link to the easy site.', () => {
    const { container } = render(
      <EasyReadCTA
        easyReadAssetId="crkdy3r685jo"
        originalAssetId="cy0grkwd3zlo"
      />,
    );
    const [ctaText] = container.querySelectorAll(
      'a[href="/news/articles/crkdy3r685jo"] span span',
    );

    expect(ctaText?.innerHTML).toBe('Easy read');
  });
});
