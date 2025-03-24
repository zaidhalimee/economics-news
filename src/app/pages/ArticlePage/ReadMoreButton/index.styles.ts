import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { css, Theme } from '@emotion/react';

export default {
  readMoreButton: ({ spacings }: Theme) =>
    css({
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: '100%',
      padding: `${spacings.DOUBLE}rem 0`,
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
