import React from 'react';
import { render } from '@testing-library/react';

import withHashChangeHandler from '.';

const Fixture = withHashChangeHandler(() => (
  <>
    <a href="#section-1">Go to section 1</a>
    <section id="section-1">Section 1</section>
  </>
));

const CyrillicFixture = withHashChangeHandler(() => (
  <>
    <a href="#Мирнија-сам-неко-брине-о-њој-док-је-у-школи">Go to section 1</a>
    <section id="Мирнија-сам-неко-брине-о-њој-док-је-у-школи">
      Section 1
    </section>
  </>
));

window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.focus = jest.fn();

it('should scroll into view and focus on element when hash location changes', async () => {
  const { rerender } = render(<Fixture location={{ hash: '' }} />);

  rerender(<Fixture location={{ hash: '#section-1' }} />);

  expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  expect(window.HTMLElement.prototype.focus).toHaveBeenCalledTimes(1);
});

it('should scroll into view and focus on element when hash location changes with Cyrillic characters', async () => {
  const { rerender } = render(
    <CyrillicFixture
      location={{
        hash: '#%D0%9C%D0%B8%D1%80%D0%BD%D0%B8%D1%98%D0%B0-%D1%81%D0%B0%D0%BC-%D0%BD%D0%B5%D0%BA%D0%BE-%D0%B1%D1%80%D0%B8%D0%BD%D0%B5-%D0%BE-%D1%9A%D0%BE%D1%98-%D0%B4%D0%BE%D0%BA-%D1%98%D0%B5-%D1%83-%D1%88%D0%BA%D0%BE%D0%BB%D0%B8',
      }}
    />,
  );

  rerender(
    <CyrillicFixture
      location={{ hash: '#Мирнија-сам-неко-брине-о-њој-док-је-у-школи' }}
    />,
  );

  expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  expect(window.HTMLElement.prototype.focus).toHaveBeenCalledTimes(1);
});
