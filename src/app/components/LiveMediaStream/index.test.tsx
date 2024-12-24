import mundoLiveFixture from '#data/mundo/live/c7dkx155e626t.json';
import React from 'react';
import LiveMediaStream from '.';
import { MediaCollection } from '../MediaLoader/types';
import {
  screen,
  render,
  fireEvent,
} from '../react-testing-library-with-providers';

const fixtureData = mundoLiveFixture.data.mediaCollections;

describe('liveMediaStream', () => {
  it('Displays a button on intial render.', () => {
    const { container } = render(
      <LiveMediaStream mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playButton = container.querySelector('button');

    expect(playButton?.innerHTML).toBe('Watch Now');
  });

  it('Displays a media loader when clicked.', () => {
    render(
      <LiveMediaStream mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playButton = screen.getByTestId('watch-now-button');
    fireEvent.click(playButton);

    const mediaLoader = screen.getByRole('figure');
    const closeButton = screen.getByTestId('close-button');
    const mediaTitle = screen.getByText('Non-Stop Cartoons! - CBBC');

    expect(mediaLoader).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(mediaTitle).toBeInTheDocument();
  });

  it('Removes the media loader when the close button is clicked.', () => {
    render(
      <LiveMediaStream mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playButton = screen.getByTestId('watch-now-button');
    fireEvent.click(playButton);

    const mediaLoader = screen.getByRole('figure');

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    const playButtonAfterClose = screen.getByTestId('watch-now-button');

    expect(mediaLoader).not.toBeInTheDocument();
    expect(playButtonAfterClose).toBeInTheDocument();
  });

  it('Displays nothing if no mediaCollection is passed in.', () => {
    const { container } = render(<LiveMediaStream mediaCollection={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Displays nothing if an empty array is passed in.', () => {
    const { container } = render(
      <LiveMediaStream mediaCollection={[] as MediaCollection[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
