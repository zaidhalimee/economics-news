import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { css, Theme } from '@emotion/react';

export default {
  readMoreButtonA: ({ spacings, fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.serifMedium,
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: 'calc(100% - 2rem)',
      padding: `${spacings.DOUBLE}rem 0`,
      margin: `${spacings.QUADRUPLE}rem ${spacings.DOUBLE}rem -1.5rem  ${spacings.DOUBLE}rem`,
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
  readMoreButtonB: ({ spacings, fontSizes, fontVariants }: Theme) =>
    css({
      ...fontSizes.pica,
      ...fontVariants.serifMedium,
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: 'calc(100% - 2rem)',
      padding: `${spacings.DOUBLE}rem 0`,
      margin: `${spacings.TRIPLE}rem ${spacings.DOUBLE}rem -0.5rem ${spacings.DOUBLE}rem`,
      backgroundColor: '#F6F6F6',
      color: '#141414',
      textAlign: 'left',
      border: 'none',
      borderBottom: '1px solid #B0B2B4',
      paddingBottom: `calc(${spacings.DOUBLE}rem + 0.5rem)`,

      '&:hover, &:focus': {
        textDecoration: 'underline 2px',
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
};
