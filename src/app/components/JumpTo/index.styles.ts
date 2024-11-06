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
        marginTop: `${pixelsToRem(12)}rem`,
      },
    }),
  listItem: ({ spacings, mq }: Theme) =>
    css({
      marginBottom: `${spacings.DOUBLE}rem`,
      padding: `${pixelsToRem(6)}rem 0`,

      '&:last-child': {
        marginBottom: 0,
      },

      [mq.GROUP_4_MIN_WIDTH]: {
        marginBottom: `${pixelsToRem(12)}rem`,
      },
    }),
  link: ({ palette }: Theme) =>
    css({
      color: palette.GREY_10,
      borderBottomColor: palette.GREY_10,
    }),
};
