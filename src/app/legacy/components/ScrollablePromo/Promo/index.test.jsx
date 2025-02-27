import React from 'react';
import { render } from '../../../../components/react-testing-library-with-providers';
import {
  PromoSingleBlock,
  oneLinkWithTimestamp,
  topStoriesBlocks,
  mostReadBlocks,
  topStoriesBlocksWithLiveItem,
} from '../helpers/fixtureData';
import Promo from '.';
import { ServiceContextProvider } from '../../../../contexts/ServiceContext';

const ScrollablePromo = ({ block, experimentVariant }) => (
  <ServiceContextProvider service="pidgin">
    <Promo
      block={block}
      onClick={() => {}}
      experimentVariant={experimentVariant}
    />
  </ServiceContextProvider>
);

describe('ScrollablePromo', () => {
  it('should render a link', () => {
    const { queryByRole } = render(
      <ScrollablePromo block={PromoSingleBlock} />,
    );
    expect(queryByRole('link')).toBeInTheDocument();
  });

  it('should extract and render the correct title', () => {
    const { getByText } = render(<ScrollablePromo block={PromoSingleBlock} />);
    expect(
      getByText(
        'This is a very long headline. I am creating this for a test purpose. I love creating these type of tests. I really do not know what to write.',
      ),
    ).toBeTruthy();
  });

  it('should extract and render the correct href', () => {
    const { queryByRole } = render(
      <ScrollablePromo block={PromoSingleBlock} />,
    );
    expect(queryByRole('link').href).toEqual('https://www.bbc.com/mundo');
  });

  it('should render timestamp if timestamp is available', () => {
    const { container } = render(
      <ScrollablePromo block={oneLinkWithTimestamp[0]} />,
    );
    expect(container.getElementsByTagName('time')[0]).toBeInTheDocument();
  });

  describe('OJ Top Bar Promo', () => {
    it('should display Top Stories content when experimentVariant is A', () => {
      const { container } = render(
        <ScrollablePromo block={topStoriesBlocks[0]} experimentVariant="A" />,
      );
      const expectedHeadline =
        topStoriesBlocks[0].headlines.promoHeadline.blocks[0].model.blocks[0]
          .model.text;
      expect(container).toHaveTextContent(expectedHeadline);
    });

    it('should display Most Read content when experimentVariant is B', () => {
      const { container } = render(
        <ScrollablePromo block={mostReadBlocks[0]} experimentVariant="B" />,
      );
      const expectedHeadline = mostReadBlocks[0].title;
      expect(container).toHaveTextContent(expectedHeadline);
    });

    it('should render a link on Top Stories article headline when experimentVariant is A ', () => {
      const { queryByRole } = render(
        <ScrollablePromo block={topStoriesBlocks[2]} experimentVariant="A" />,
      );
      expect(queryByRole('link')).toBeInTheDocument();
    });

    it('should render a link on Most Read article headline when experimentVariant is B ', () => {
      const { queryByRole } = render(
        <ScrollablePromo block={mostReadBlocks[0]} experimentVariant="B" />,
      );
      expect(queryByRole('link')).toBeInTheDocument();
    });

    it('should not display a timestamp when experimentVariant is A or B', () => {
      const { queryByTestId } = render(
        <ScrollablePromo block={topStoriesBlocks[0]} experimentVariant="B" />,
      );
      expect(queryByTestId('timestamp')).not.toBeInTheDocument();
    });

    it('should display a LiveLabel when returning Top Stories', () => {
      const { container } = render(
        <ScrollablePromo
          block={topStoriesBlocksWithLiveItem[1]}
          experimentVariant="A"
        />,
      );
      expect(
        container.querySelector('[class*="liveLabelPulse"]'),
      ).toBeInTheDocument();
      expect(
        container.querySelector('[class*="liveLabelText"]'),
      ).toBeInTheDocument();
    });
  });
});
