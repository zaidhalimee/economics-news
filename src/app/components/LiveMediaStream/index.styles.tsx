import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  componentContainer: ({ spacings }: Theme) =>
    css({
      width: '100%',
      marginTop: `${spacings.FULL}rem`,
    }),
  mediaButton: ({ palette, mq }: Theme) =>
    css({
      cursor: 'pointer',
      backgroundColor: 'unset',
      border: 'unset',
      textAlign: 'start',
      padding: 0,
      display: 'block',
      width: '100%',
      '&:hover .hoverStylesText span, &:focus .hoverStylesText span': {
        textDecoration: 'underline',
      },
      '&:hover .hoverStylesCTA, &:focus .hoverStylesCTA': {
        backgroundColor: palette.LIVE_DARK,
      },
      [mq.FORCED_COLOURS]: {
        color: 'canvasText',
      },
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
  closeContainer: ({ spacings, palette }: Theme) =>
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
    }),
  closeIconContainer: ({ spacings, palette }: Theme) =>
    css({
      svg: {
        fill: 'currentcolor',
        color: palette.WHITE,
        height: `${spacings.DOUBLE}rem`,
        width: `${spacings.DOUBLE}rem`,
        margin: `${pixelsToRem(14)}rem`,
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
  mediaDescription: ({ palette, spacings }: Theme) =>
    css({
      span: { color: palette.GREY_4, margin: 0 },
      margin: 0,
      // marginTop: `${spacings.FULL}rem`,
    }),
  mediaDescriptionGuidance: ({ spacings }: Theme) =>
    css({
      margin: `${spacings.DOUBLE}rem 0 0 0`,
    }),
  hideComponent: () => css({ display: 'none' }),
};
