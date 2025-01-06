import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  ComponentContainer: ({ spacings, mq }: Theme) =>
    css({
      margin: `${spacings.FULL}rem 0`,
      width: '100%',
      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
    }),
  playButtonText: ({ spacings, palette }: Theme) =>
    css({
      color: palette.WHITE,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      svg: {
        height: `${spacings.DOUBLE}rem`,
        width: `${spacings.DOUBLE}rem`,
        verticalAlign: 'middle',
        fill: 'currentcolor',
        color: palette.WHITE,
        margin: `0`,
        marginInlineEnd: `${spacings.FULL}rem`,
      },
    }),
  title: () =>
    css({
      display: 'block',
      width: '100%',
    }),
  playButton: ({ palette, mq }: Theme) =>
    css({
      cursor: 'pointer',
      width: `${pixelsToRem(171)}rem`,
      border: 0,
      backgroundColor: palette.LIVE_CORE,
      padding: `${pixelsToRem(11)}rem`,
      '&:hover': {
        backgroundColor: palette.LIVE_DARK,
      },
      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
    }),
  liveMediaStreamText: ({ palette }: Theme) =>
    css({
      color: palette.GREY_4,
    }),
  liveMediaStreamContainer: ({ mq }: Theme) =>
    css({
      maxWidth: '60%',
      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
      [mq.GROUP_4_MAX_WIDTH]: {
        width: '50%',
      },
    }),
  closeIconButton: ({ spacings, palette }: Theme) =>
    css({
      cursor: 'pointer',
      background: 'none',
      border: 0,
      outline: 0,
      padding: 0,
      margin: 0,
      svg: {
        fill: 'currentcolor',
        color: palette.WHITE,
        height: `${spacings.DOUBLE}rem`,
        width: `${spacings.DOUBLE}rem`,
        verticalAlign: 'middle',
      },
    }),
  liveMediaSpan: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '100%',
    }),
  mediaLoader: () =>
    css({
      maxWidth: '100%',
    }),
  mediaDescription: ({ spacings, palette }: Theme) =>
    css({
      span: { color: palette.GREY_4 },
      margin: `${spacings.FULL}rem 0`,
      display: 'block',
      width: '100%',
    }),
  hideComponent: () => css({ display: 'none' }),
  showComponent: () => css({ display: 'unset' }),
};
