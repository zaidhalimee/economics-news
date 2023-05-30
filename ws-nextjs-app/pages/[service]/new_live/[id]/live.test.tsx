import React from 'react';
import {
  render,
  screen,
  act,
} from '#app/components/react-testing-library-with-providers';
import liveFixture from '#data/pidgin/livePage/c7p765ynk9qt.json';
import Live from './LivePageLayout';

const mockPageData = {
  ...liveFixture.data,
  pageCount: 10,
  activePage: 1,
  someResponse: {
    block: 'Its a block',
  },
};

describe('Live Page', () => {
  it('should render the live page title', async () => {
    await act(async () => {
      render(<Live pageData={mockPageData} />);
    });

    expect(screen.getByText('Pidgin test 2')).toBeInTheDocument();
  });

  it('should render the live page description', async () => {
    await act(async () => {
      render(<Live pageData={mockPageData} />);
    });

    expect(
      screen.getByText('Pidgin test 2 - the description'),
    ).toBeInTheDocument();
  });

  it('should render the live page summary', async () => {
    await act(async () => {
      render(<Live pageData={mockPageData} />);
    });

    expect(screen.getByText('I am the summary box')).toBeInTheDocument();
  });

  it('creates snapshot of the live page', async () => {
    let container;

    await act(
      // eslint-disable-next-line no-return-assign
      async () => ({ container } = render(<Live pageData={mockPageData} />)),
    );

    expect(container).toMatchSnapshot();
  });
});
