import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { css, Theme } from '@emotion/react';

export default {
  readMoreButton: ({ spacings, fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.serifMedium,
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: 'calc(100% - 2rem)',
      padding: `${spacings.DOUBLE}rem 0`,
      margin: `auto ${spacings.DOUBLE}rem`,
      backgroundColor: '#141414',
      color: '#FFFFFF',
      border: 'none',

      '&:hover, &:focus': {
        textDecoration: 'underline 2px',
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
};
