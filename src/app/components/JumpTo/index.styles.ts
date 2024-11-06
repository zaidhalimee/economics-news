import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  wrapper: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: palette.WHITE,
      padding: `${spacings.FULL}rem`,

      [mq.GROUP_1_MIN_WIDTH]: {
        padding: `${spacings.DOUBLE}rem`,
      },
    }),
  title: ({ palette }: Theme) =>
    css({
      color: palette.GREY_10,
    }),
  list: () =>
    css({
      listStyle: 'none',
      padding: 0,
    }),
  listItem: ({ spacings, mq }: Theme) =>
    css({
      marginBottom: `${spacings.DOUBLE}rem`,

      [mq.GROUP_4_MIN_WIDTH]: {
        marginBottom: `${pixelsToRem(12)}rem`,
      },
    }),
  link: ({ fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.sansBold,
    }),
};
