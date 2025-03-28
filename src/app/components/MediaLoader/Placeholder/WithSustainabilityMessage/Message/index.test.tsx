import React from 'react';
import { render } from '../../../../react-testing-library-with-providers';
import Message from '.';

describe('Message', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it(`should render a 'Help reduce your power consumption' message`, () => {
    const { container } = render(<Message />, {
      service: 'news',
    });
    const text = container.querySelector('p')?.innerHTML;

    expect(text).toEqual(
      'Help reduce your power and data usage by not playing video content.',
    );
    expect(container).toMatchSnapshot();
  });
});
