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
  playButton: ({ spacings, palette, mq }: Theme) =>
    css({
      width: '40%',
      border: 0,
      backgroundColor: palette.LIVE_LIGHT,
      padding: `${spacings.DOUBLE}rem`,

      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
    }),
  playButtonText: ({ spacings, palette, mq }: Theme) =>
    css({
      color: palette.WHITE,
    }),
  playIcon: ({ spacings, palette }: Theme) =>
    css({
      svg: {
        color: palette.WHITE,
        marginBottom: `${spacings.FULL}rem`,
      },
    }),
  liveMediaSpan: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
    }),
  mediaDescription: ({ spacings }: Theme) =>
    css({
      margin: `${spacings.FULL}rem`,
      marginLeft: 0,
      display: 'block',
      width: '100%',
    }),
  mediaLoaderContainer: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: `${palette.POSTBOX}`,
    }),
};
