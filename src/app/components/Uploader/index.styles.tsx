import { css, Theme } from '@emotion/react';
import pixelsToRem from '#app/utilities/pixelsToRem';

const styles = {
  container: ({ spacings, mq }: Theme) =>
    css({
      margin: `${spacings.TRIPLE}rem ${spacings.FULL}rem`,
      [mq.GROUP_2_MIN_WIDTH]: {
        margin: `${spacings.TRIPLE}rem ${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `${spacings.TRIPLE}rem 0`,
      },
    }),
  card: ({ spacings, palette, mq }: Theme) =>
    css({
      backgroundColor: palette.WHITE,
      padding: `${spacings.DOUBLE}rem`,
      [mq.HIGH_CONTRAST]: {
        border: '0.1875rem solid transparent',
      },
    }),
  text: () =>
    css({
      paddingTop: `${pixelsToRem(12)}rem`,
    }),
  linkContainer: () =>
    css({
      display: 'flex',
      justifyContent: 'start',
    }),
  linkBackground: ({ spacings, palette }: Theme) =>
    css({
      padding: `${pixelsToRem(12)}rem ${spacings.DOUBLE}rem`,
      marginTop: `${spacings.DOUBLE}rem`,
      backgroundColor: palette.GREY_10,
      width: 'auto',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: palette.WHITE,
      },
      '&:focus': {
        textDecoration: 'underline',
        color: palette.WHITE,
      },
    }),
  link: ({ palette }: Theme) =>
    css({
      color: palette.WHITE,
    }),
  chevron: ({ palette }: Theme) =>
    css({
      marginInlineStart: `${pixelsToRem(12)}rem`,
      color: palette.WHITE,
      fill: 'currentcolor',
    }),
};
export default styles;
