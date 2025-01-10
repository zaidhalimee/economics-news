/* eslint-disable prettier/prettier */
import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  componentContainer: ({ spacings }: Theme) =>
    css({
      width: '100%',
      marginTop: `${spacings.FULL}rem`,
    }),
  mediaButton: ({ mq }: Theme) =>
    css({
      zIndex: '1',
      position: 'relative',
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
      padding: 0,
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
      margin: `${spacings.FULL}rem 0 `,
      color: palette.GREY_2,
      textAlign: 'start',
    }),
  watchLiveCTA: ({ palette, mq, spacings }: Theme) =>
    css({
      width: `${pixelsToRem(171)}rem`,
      border: 0,
      backgroundColor: palette.LIVE_CORE,
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
        backgroundColor: palette.LIVE_DARK,
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
      padding: 0,
      alignItems: 'center',
    }),
  closeIconContainer: ({ spacings, palette, mq }: Theme) =>
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
  mediaLoader: () =>
    css({
      maxWidth: '100%',
    }),
  mediaDescription: ({ spacings }: Theme) =>
    css({
      display: 'block',
      width: '100%',
      marginTop: `${spacings.FULL}rem`,
      span: { margin: 0 },
      'button:hover & span, button:focus & span': {
        textDecoration: 'underline',
      },
    }),
  openMediaDescription: ({ palette }: Theme) =>
    css({
      span: { color: palette.GREY_4 },
    }),
  closeMediaDescription: ({ palette }: Theme) =>
    css({
      span: { color: palette.WHITE },
      textAlign: 'start',
    }),
  mediaDescriptionGuidance: ({ spacings }: Theme) =>
    css({
      margin: `${spacings.DOUBLE}rem 0 0 0`,
    }),
  hideComponent: () => css({ display: 'none' }),
};
