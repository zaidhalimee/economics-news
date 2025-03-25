import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

const styles = {
  main: ({ spacings, gridWidths }: Theme) =>
    css({
      maxWidth: `${pixelsToRem(gridWidths[1008])}rem`,
      margin: '0 auto',
      padding: `0 ${spacings.DOUBLE}rem`,
    }),
  image: () =>
    css({
      maxWidth: `${pixelsToRem(250)}rem`,
      minHeight: `${pixelsToRem(100)}rem`,
    }),
  link: ({ spacings, fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.sansBold,
      display: 'block',
      margin: `${spacings.FULL}rem 0`,
    }),
  year: ({ palette, spacings }: Theme) =>
    css({
      margin: `${spacings.FULL}rem 0`,
      padding: `${spacings.FULL}rem`,
      border: `${pixelsToRem(5)}rem solid ${palette.POSTBOX}`,
    }),
  month: ({ spacings }: Theme) =>
    css({
      display: 'flex',
      margin: `${spacings.HALF}rem 0`,
    }),
  details: () =>
    css({
      flex: '2',
    }),
};

export default styles;
