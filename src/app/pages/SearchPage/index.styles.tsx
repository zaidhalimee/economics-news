import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

const styles = {
  container: () =>
    css({
      height: `${pixelsToRem(200)}rem`,
      alignContent: 'center',
      textAlign: 'center',
    }),
  title: ({ fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.canon,
      ...fontVariants.sansBold,
    }),
  inputs: ({ fontSizes, spacings }: Theme) =>
    css({
      margin: `${spacings.DOUBLE}rem`,
      input: {
        ...fontSizes.doublePica,
      },
      button: {
        ...fontSizes.doublePica,
      },
    }),
};

export default styles;
