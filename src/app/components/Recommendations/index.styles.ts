import { css, Theme } from '@emotion/react';

export default {
  recommendationsWrapper: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: palette.GREY_2,
      margin: `${spacings.TRIPLE}rem 0`,

      [mq.GROUP_2_MIN_WIDTH]: {
        margin: `0 0 ${spacings.TRIPLE}rem`,
        padding: `0 ${spacings.DOUBLE}rem ${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `0 0 ${spacings.TRIPLE}rem`,
        padding: `${spacings.DOUBLE}rem 0`,
      },
    }),
  labelComponent: ({ spacings, mq }: Theme) =>
    css({
      margin: 0,
      padding: 0,

      [mq.GROUP_3_MIN_WIDTH]: {
        margin: `0 0 ${spacings.FULL}rem`,
      },
    }),
  /// RecommendationsPromo
  promoWrapper: ({ palette, spacings, mq }: Theme) =>
    css({
      position: 'relative',
      padding: `${spacings.FULL}rem`,
      marginTop: `${spacings.FULL}rem`,
      backgroundColor: palette.GHOST,
    }),
  imageWrapper: ({ mq }: Theme) =>
    css({
      display: 'inline-block',
      position: 'relative',
      width: '4.7rem',
      verticalAlign: 'top',

      [mq.GROUP_2_MIN_WIDTH]: {
        width: '6.8rem',
      },

      [mq.GROUP_3_MIN_WIDTH]: {
        width: '7.5rem',
      },
    }),
  textWrapper: ({ spacings, mq, isLite }: Theme) =>
    css({
      display: 'inline-block',
      width: isLite ? '100%' : 'calc(100% - 7.5rem)',
      padding: `0 ${spacings.FULL}rem`,
      verticalAlign: 'top',
      height: '100%',

      [mq.GROUP_1_MAX_WIDTH]: {
        width: 'calc(100% - 5rem)',
      },

      [mq.GROUP_3_MIN_WIDTH]: {
        padding: `0 ${spacings.DOUBLE}rem`,
      },
    }),
  link: ({ palette }: Theme) =>
    css({
      position: 'static',
      color: palette.GREY_10,
      textDecoration: 'none',
      overflowWrap: 'break-word',

      '&:before': {
        bottom: 0,
        content: "''",
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
        whiteSpace: 'nowrap',
        zIndex: 1,
      },

      '&:hover, &:focus': {
        textDecoration: 'underline',
      },

      '&:visited': {
        color: palette.METAL,
      },
    }),
  headline: ({ palette, fontSizes, fontVariants }: Theme) =>
    css({
      ...fontVariants.serifMedium,
      ...fontSizes.pica,
      color: palette.GREY_10,
      margin: 0,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    }),
};
