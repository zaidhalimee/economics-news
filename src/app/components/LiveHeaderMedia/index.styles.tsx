import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  componentContainer: ({ spacings }: Theme) =>
    css({
      width: '100%',
      marginTop: `${spacings.DOUBLE}rem`,
    }),
  mediaButton: ({ mq }: Theme) =>
    css({
      zIndex: '1',
      position: 'relative',
      padding: 0,
      [mq.FORCED_COLOURS]: {
        color: 'canvasText',
      },
    }),
  openButton: () =>
    css({
      cursor: 'pointer',
      backgroundColor: 'unset',
      border: 'unset',
      textAlign: 'start',
    }),
  watchLiveCTAText: ({ spacings, palette }: Theme) =>
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
        marginInlineEnd: `${spacings.FULL}rem`,
      },
    }),
  title: () =>
    css({
      display: 'block',
      width: '100%',
    }),
  guidanceMessage: ({ palette, spacings }: Theme) =>
    css({
      display: 'block',
      marginTop: `${spacings.DOUBLE}rem`,
      color: palette.GREY_2,
      textAlign: 'start',
    }),
  watchLiveCTA: ({ palette, mq, spacings }: Theme) =>
    css({
      width: `${pixelsToRem(171)}rem`,
      border: 0,
      backgroundColor: palette.LIVE_MEDIUM,
      padding: `${pixelsToRem(11)}rem`,
      marginTop: `${spacings.DOUBLE}rem`,
      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
      [mq.FORCED_COLOURS]: {
        color: 'canvasText',
        border: `${pixelsToRem(2)}rem solid canvasText`,
      },
      'button:hover &, button:focus &': {
        [mq.FORCED_COLOURS]: {
          textDecoration: 'underline',
        },
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
  closeButton: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
      background: 'none',
      width: '100%',
      border: 0,
      outline: 0,
      lineHeight: 0,
      alignItems: 'center',
    }),
  closeContainer: ({ spacings, palette, mq }: Theme) =>
    css({
      verticalAlign: 'center',
      svg: {
        fill: 'currentcolor',
        color: palette.WHITE,
        height: `${spacings.DOUBLE}rem`,
        width: `${spacings.DOUBLE}rem`,
        margin: `${pixelsToRem(13)}rem`,
      },
      backgroundColor: palette.BLACK,
      border: `${palette.WHITE} solid ${pixelsToRem(1)}rem`,
      'button:hover &, button:focus &': {
        backgroundColor: palette.POSTBOX,
        outline: `${palette.WHITE} solid ${pixelsToRem(2)}rem`,
      },

      [mq.FORCED_COLOURS]: {
        color: 'canvasText',
      },
    }),
  liveMediaSpan: () =>
    css({
      maxWidth: '100%',
    }),
  mediaLoader: ({ spacings }: Theme) =>
    css({
      maxWidth: '100%',
      marginTop: `${spacings.DOUBLE}rem`,
    }),
  mediaDescription: () =>
    css({
      display: 'block',
      width: '100%',
      span: { margin: 0 },
      'button:hover & span, button:focus & span': {
        textDecoration: 'underline',
      },
    }),
  openMediaDescription: ({ palette, spacings }: Theme) =>
    css({
      marginTop: `${spacings.FULL}rem`,
      span: { color: palette.GREY_4 },
    }),
  closeMediaDescription: ({ palette }: Theme) =>
    css({
      marginTop: 0,
      span: { color: palette.WHITE },
      textAlign: 'start',
    }),
  hideComponent: () => css({ display: 'none' }),
};
