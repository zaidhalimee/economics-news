import { css, Theme } from '@emotion/react';

export default {
  liveMediaStreamContainer: ({ palette, spacings }: Theme) =>
    css({
      backgroundColor: `${palette.BLACK}`,
      margin: `0 ${spacings.FULL}rem`,
      marginLeft: 0,
    }),
  liveMediaStreamText: ({ spacings, palette }: Theme) =>
    css({
      color: palette.WHITE,
      padding: `${spacings.FULL}rem`,
      paddingLeft: 0,
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
  playButtonText: ({ palette }: Theme) =>
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
  closeIconButton: ({ palette }: Theme) =>
    css({
      background: 'none',
      border: 0,
      outline: 0,
      padding: 0,
      margin: 0,
      svg: {
        color: palette.WHITE,
      },
    }),
  liveMediaSpan: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
    }),
  mediaDescription: ({ spacings, palette }: Theme) =>
    css({
      color: palette.WHITE,
      margin: `${spacings.FULL}rem`,
      marginLeft: 0,
      display: 'block',
      width: '100%',
    }),
  // mediaLoaderContainer: ({ palette, spacings, mq }: Theme) =>
  //   css({
  //     backgroundColor: `${palette.POSTBOX}`,
  //   }),
};
