import React from 'react';
import { render } from '../../react-testing-library-with-providers';
import SignPostNoJs from '.';

describe('Sign Post', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it(`should render a 'Help reduce your power consumption' message`, () => {
    const { container } = render(
      <SignPostNoJs noJsMessage="Help reduce your power and data usage by not playing video content." />,
      {
        service: 'news',
      },
    );
    expect(container).toMatchSnapshot();
  });
});
