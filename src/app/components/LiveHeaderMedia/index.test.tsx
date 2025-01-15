import mundoLiveFixture from '#data/mundo/live/c7dkx155e626t.json';
import React from 'react';
import LiveHeaderMedia from '.';
import { MediaCollection } from '../MediaLoader/types';
import {
  screen,
  render,
  fireEvent,
} from '../react-testing-library-with-providers';

const fixtureData = mundoLiveFixture.data.mediaCollections;

describe('liveMediaStream', () => {
  it('Displays all components on intial render.', () => {
    const { container } = render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playCloseButton = container.querySelector(
      'button[data-testid="watch-now-close-button"]',
    );
    const mediaLoader = container.querySelector('figure');

    expect(playCloseButton).toBeInTheDocument();
    expect(mediaLoader).toBeInTheDocument();
  });

  it('Displays a warning message when needed.', () => {
    const mediaBlock = fixtureData[0];
    mediaBlock.model.version.warnings = {
      warning_text: 'Contains some upsetting scenes.',
      warning: [
        {
          warning_code: 'D1',
          short_description: 'some upsetting scenes',
        },
      ],
    };

    const { container } = render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playCloseButton = container.querySelector(
      'span[data-testid="warning-message"]',
    );

    expect(playCloseButton?.innerHTML).toContain(
      'Contains some upsetting scenes.',
    );
  });

  it('Plays the media loader when the watch button is clicked.', () => {
    window.mediaPlayers = {
      p0gh4n67: {
        player: { paused: jest.fn().mockReturnValueOnce(true) },
        play: jest.fn(),
        pause: jest.fn(),
      },
    };

    render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playCloseButton = screen.getByTestId('watch-now-close-button');
    fireEvent.click(playCloseButton);

    expect(window.mediaPlayers.p0gh4n67.play).toHaveBeenCalled();
  });

  it('Paused the media loader when the close button is clicked.', () => {
    window.mediaPlayers = {
      p0gh4n67: {
        play: jest.fn(),
        pause: jest.fn(),
      },
    };
    render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playCloseButton = screen.getByTestId('watch-now-close-button');
    fireEvent.click(playCloseButton);
    fireEvent.click(playCloseButton);

    expect(window.mediaPlayers.p0gh4n67.play).toHaveBeenCalledTimes(1);
    expect(window.mediaPlayers.p0gh4n67.pause).toHaveBeenCalledTimes(1);
  });

  it('Displays nothing if no mediaCollection is passed in.', () => {
    const { container } = render(<LiveHeaderMedia mediaCollection={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('Displays nothing if an empty array is passed in.', () => {
    const { container } = render(
      <LiveHeaderMedia mediaCollection={[] as MediaCollection[]} />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it.each([
    {
      title: 'Displays a title with a comma when there is no punctuation.',
      inputTitle: 'Title with no punctuation',
      expectedResult:
        '<div><span class="hoverStylesText css-1hja70-mediaDescription-openMediaDescription-description"><span class="css-1cxhpmz-Text">Title with no punctuation,</span><span class="css-3g34uu-Text"> CBBC</span></span><span class="css-10lim9y-guidanceMessage" data-testid="warning-message"><span class="css-49uz87-visuallyHiddenText">, </span>Contains some upsetting scenes.</span></div><div class="hoverStylesCTA css-1wgos6z-watchLiveCTA"><span class="css-1hxk0l6-watchLiveCTAText"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" focusable="false" aria-hidden="true"><path d="M29 16 5.8 1v30z"></path></svg>Watch</span></div>',
    },
    {
      title: 'Displays a title as is when there is punctuation.',
      inputTitle: 'Title with punctuation!',
      expectedResult:
        '<div><span class="hoverStylesText css-1hja70-mediaDescription-openMediaDescription-description"><span class="css-1cxhpmz-Text">Title with punctuation!</span><span class="css-3g34uu-Text"> CBBC</span></span><span class="css-10lim9y-guidanceMessage" data-testid="warning-message"><span class="css-49uz87-visuallyHiddenText">, </span>Contains some upsetting scenes.</span></div><div class="hoverStylesCTA css-1wgos6z-watchLiveCTA"><span class="css-1hxk0l6-watchLiveCTAText"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" focusable="false" aria-hidden="true"><path d="M29 16 5.8 1v30z"></path></svg>Watch</span></div>',
    },
  ])('Open state - $title', ({ inputTitle, expectedResult }) => {
    const mediaBlock = fixtureData[0];
    mediaBlock.model.synopses.short = inputTitle;

    const { container } = render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const mediaLoader = container.querySelector(
      'button[data-testid="watch-now-close-button"]',
    );

    expect(mediaLoader?.innerHTML).toEqual(expectedResult);
  });

  it.each([
    {
      title: 'Displays a title with a comma when there is no punctuation.',
      inputTitle: 'Title with no punctuation',
      expectedResult:
        '<div><span class="hoverStylesText css-1vwvkut-mediaDescription-closeMediaDescription-description"><span class="css-49uz87-visuallyHiddenText">Close video, </span><span class="css-1cxhpmz-Text">Title with no punctuation,</span><span class="css-3g34uu-Text"> CBBC</span></span><span class="css-10lim9y-guidanceMessage" data-testid="warning-message"><span class="css-49uz87-visuallyHiddenText">, </span>Contains some upsetting scenes.</span></div><div class="css-itfd0k-closeContainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" focusable="false" aria-hidden="true"><path d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9z"></path></svg></div>',
    },
    {
      title: 'Displays a title as is when there is punctuation.',
      inputTitle: 'Title with punctuation!',
      expectedResult:
        '<div><span class="hoverStylesText css-1vwvkut-mediaDescription-closeMediaDescription-description"><span class="css-49uz87-visuallyHiddenText">Close video, </span><span class="css-1cxhpmz-Text">Title with punctuation!</span><span class="css-3g34uu-Text"> CBBC</span></span><span class="css-10lim9y-guidanceMessage" data-testid="warning-message"><span class="css-49uz87-visuallyHiddenText">, </span>Contains some upsetting scenes.</span></div><div class="css-itfd0k-closeContainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" focusable="false" aria-hidden="true"><path d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9z"></path></svg></div>',
    },
  ])('Close state - $title', ({ inputTitle, expectedResult }) => {
    const mediaBlock = fixtureData[0];
    mediaBlock.model.synopses.short = inputTitle;

    window.mediaPlayers = {
      p0gh4n67: {
        player: { paused: jest.fn().mockReturnValueOnce(true) },
        play: jest.fn(),
        pause: jest.fn(),
      },
    };

    const { container } = render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const mediaLoader = container.querySelector(
      'button[data-testid="watch-now-close-button"]',
    );

    const playCloseButton = screen.getByTestId('watch-now-close-button');
    fireEvent.click(playCloseButton);

    expect(mediaLoader?.innerHTML).toEqual(expectedResult);
  });

  it.each([
    {
      title: 'Should NOT autoplay for Level 1 warnings and above.',
      playCalls: 0,
      warning: [
        {
          warning_code: 'D1',
          short_description: 'some upsetting scenes',
        },
        {
          warning_code: 'D2',
          short_description: 'upsetting scenes',
        },
        {
          warning_code: 'L1',
          short_description: 'some strong language',
        },
      ],
    },
    {
      title: 'Should autoplay for below L1 warnings.',
      playCalls: 1,
      warning: [
        {
          warning_code: 'D1',
          short_description: 'some upsetting scenes',
        },
        {
          warning_code: 'D2',
          short_description: 'upsetting scenes',
        },
      ],
    },
  ])('$title', ({ warning, playCalls }) => {
    const mediaBlock = fixtureData[0];
    mediaBlock.model.version.warnings = {
      warning_text: '',
      warning,
    };

    window.mediaPlayers = {
      p0gh4n67: {
        player: { paused: jest.fn().mockReturnValueOnce(true) },
        play: jest.fn(),
        pause: jest.fn(),
      },
    };

    render(
      <LiveHeaderMedia mediaCollection={fixtureData as MediaCollection[]} />,
    );

    const playCloseButton = screen.getByTestId('watch-now-close-button');
    fireEvent.click(playCloseButton);

    expect(window.mediaPlayers.p0gh4n67.play).toHaveBeenCalledTimes(playCalls);
  });
});
