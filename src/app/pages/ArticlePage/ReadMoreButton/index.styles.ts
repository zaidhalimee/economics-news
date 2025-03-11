import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import { css } from '@emotion/react';

export default {
  readMoreButton: () =>
    css({
      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
};
