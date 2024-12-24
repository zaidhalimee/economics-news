import { css, Theme } from '@emotion/react';
import PlayButton from '../MediaLoader/Placeholder/PlayButton';

export default {
  liveMediaStreamContainer: ({ palette, spacings, mq }: Theme) =>
    css({
      // backgroundColor: `${palette.BLACK}`,
      margin: `0 ${spacings.FULL}rem`,
    }),
  title: () =>
    css({
      display: 'block',
      width: '100%',
    }),
  playButton: () =>
    css({
      width: '100%',
    }),
  // closeButton: () =>
  //   css({

  //   }),
  liveMediaSpan: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
    }),
  mediaDescription: () =>
    css({
      display: 'block',
      width: '100%',
    }),
  mediaLoaderContainer: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: `${palette.POSTBOX}`,
    }),
};
