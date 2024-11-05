import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { css, Theme } from '@emotion/react';

const styles = {
  figure: ({ isLite, spacings }: Theme) =>
    css({
      margin: 0,
      paddingBottom: `${spacings.TRIPLE}rem`,
      width: '100%',

      ...(isLite && {
        [`.${NO_JS_CLASSNAME} &`]: {
          display: 'none',
        },
      }),
    }),
};

export default styles;
