import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  wrapper: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: palette.WHITE,
      padding: `${spacings.FULL}rem`,
      marginLeft: `${spacings.FULL}rem`,
      marginRight: `${spacings.FULL}rem`,
      marginBottom: `${spacings.DOUBLE}rem`,

      [mq.GROUP_1_MIN_WIDTH]: {
        padding: `${spacings.DOUBLE}rem`,
      },

      [mq.GROUP_2_MIN_WIDTH]: {
        marginLeft: `${spacings.DOUBLE}rem`,
        marginRight: `${spacings.DOUBLE}rem`,
      },

      [mq.GROUP_3_MIN_WIDTH]: {
        marginBottom: `${spacings.QUADRUPLE}rem`,
      },

      [mq.GROUP_4_MIN_WIDTH]: {
        marginLeft: 0,
        marginRight: 0,
      },
    }),
  title: ({ palette }: Theme) =>
    css({
      color: palette.GREY_10,
    }),
  list: ({ spacings, mq }: Theme) =>
    css({
      listStyle: 'none',
      padding: 0,
      margin: `${spacings.DOUBLE}rem 0 0 0`,

      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `${pixelsToRem(12)}rem 0 0 0`,
      },
    }),
  listItem: ({ spacings, mq }: Theme) =>
    css({
      marginBottom: `${spacings.FULL}rem`,
      position: 'relative',

      '&:last-child': {
        marginBottom: 0,
      },

      [mq.GROUP_4_MIN_WIDTH]: {
        marginBottom: `${pixelsToRem(12)}rem`,
      },
    }),
  link: ({ fontSizes, fontVariants, palette, spacings }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.sansBold,
      padding: `${spacings.HALF}rem 0`,
      color: palette.GREY_10,
      display: 'inline-block',

      '&:visited': {
        color: palette.GREY_6,
      },
      '&:focus, &:hover': {
        color: palette.POSTBOX,

        span: {
          textDecorationThickness: `${pixelsToRem(2)}rem`,
        },
      },
    }),
  linkText: ({ spacings }: Theme) =>
    css({
      padding: `${spacings.FULL}rem ${spacings.DOUBLE}rem`,
      display: 'inline-block',
      position: 'relative',
      textDecoration: 'underline',
      textUnderlineOffset: `${spacings.HALF}rem`,
    }),
  linkTextActive: ({ spacings, palette }: Theme) =>
    css({
      color: palette.POSTBOX,

      '&::before': {
        position: 'absolute',
        content: '""',
        top: 0,
        insetInlineStart: 0,
        width: `${spacings.HALF}rem`,
        height: '100%',
        backgroundColor: palette.POSTBOX,
      },
    }),
};
