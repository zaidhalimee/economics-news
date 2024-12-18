import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../../../../../src/app/utilities/pixelsToRem';

export default {
  headerContainer: ({ mq }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      [mq.FORCED_COLOURS]: {
        borderBottom: `solid ${pixelsToRem(1)}rem transparent`,
      },
    }),
  heading: () =>
    css({
      '&:focus': {
        outline: 'none',
      },
    }),
  headerButtonContainer: ({ spacings }: Theme) =>
    css({
      padding: `${spacings.DOUBLE}rem`,
      paddingLeft: 0,
      paddingRight: 0,
    }),
  mediaButton: ({ palette, mq }: Theme) =>
    css({
      backgroundColor: palette.LIVE_LIGHT,
      marginLeft: 0,
      padding: 0,
      paddingLeft: 10,
      paddingRight: 10,
      border: 0,
      outline: 0,
      width: '40%',
      [mq.GROUP_2_MAX_WIDTH]: {
        width: '100%',
      },
    }),
  closeButton: ({ palette }: Theme) =>
    css({
      backgroundColor: palette.GREY_10,
      border: 0,
      outline: 0,
      padding: 0,
      margin: 0,
    }),
  headerButtonIcon: ({ palette }: Theme) =>
    css({
      display: 'inline',
      svg: {
        color: palette.WHITE,
      },
    }),
  mediaInfo: ({ palette }: Theme) =>
    css({
      color: palette.WHITE,
      // scale: '150%',
      fontWeight: '600',
    }),
  headerButtonText: ({ spacings, palette }: Theme) =>
    css({
      color: palette.WHITE,
      display: 'block',
      padding: `${spacings.DOUBLE}rem`,
      margin: 0,
      scale: '150%',
      fontWeight: '600',
    }),
  backgroundContainer: () =>
    css({
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '100%',
      overflow: 'hidden',
    }),
  backgroundColor: ({ palette }: Theme) =>
    css({
      backgroundColor: palette.GREY_10,
      width: '100%',
      top: 0,
      bottom: 0,
      position: 'absolute',
    }),
  contentContainer: ({ mq, gridWidths }: Theme) =>
    css({
      [mq.GROUP_4_MIN_WIDTH]: {
        maxWidth: `${pixelsToRem(gridWidths[1280])}rem`,
        margin: '0 auto',
        position: 'relative',
        width: '100%',
      },
    }),
  textContainerWithoutImage: ({ mq, gridWidths, spacings }: Theme) =>
    css({
      position: 'relative',
      padding: `${spacings.DOUBLE}rem ${spacings.FULL}rem`,
      maxWidth: `${pixelsToRem(gridWidths[1280])}rem`,
      margin: '0 auto',
      [mq.GROUP_2_MIN_WIDTH]: {
        padding: `${spacings.DOUBLE}rem`,
      },

      [mq.GROUP_4_MIN_WIDTH]: {
        paddingTop: `${spacings.TRIPLE}rem`,
        paddingBottom: `${spacings.QUADRUPLE}rem`,
      },
    }),
  textContainerWithImage: ({ mq, spacings }: Theme) =>
    css({
      position: 'relative',
      padding: `${spacings.FULL}rem ${spacings.FULL}rem ${spacings.DOUBLE}rem`,
      [mq.GROUP_2_MIN_WIDTH]: {
        padding: `${spacings.FULL}rem ${spacings.DOUBLE}rem ${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        padding: `${spacings.DOUBLE}rem`,
        minHeight: `${pixelsToRem(440)}rem`, // calculation includes padding
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '50%', // determines width of text overlay.
      },
    }),
  titleWithImage: ({ palette }: Theme) =>
    css({
      display: 'block',
      color: palette.GREY_1,
      width: '100%',
    }),
  titleWithoutImage: ({ mq, palette, spacings }: Theme) =>
    css({
      display: 'block',
      color: palette.GREY_1,
      marginTop: `${spacings.DOUBLE}rem`,
      [mq.GROUP_0_MAX_WIDTH]: {
        marginTop: `${spacings.FULL}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        width: 'calc(100% / 3 * 2)',
        display: 'inline-flex',
        marginTop: '0',
      },
      [mq.GROUP_5_MIN_WIDTH]: {
        display: 'inline-flex',
        width: '75%',
      },
    }),
  description: ({ palette }: Theme) =>
    css({
      color: palette.GREY_2,
      margin: 0,
    }),
  layoutWithLiveLabelNoImage: ({ mq }: Theme) =>
    css({
      [mq.GROUP_4_MIN_WIDTH]: {
        marginInlineStart: 'calc(100% / 3)',
      },
      [mq.GROUP_5_MIN_WIDTH]: {
        marginInlineStart: 'calc(100% / 4)',
      },
    }),
};
