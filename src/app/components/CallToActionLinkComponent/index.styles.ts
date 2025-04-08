import { css } from '@emotion/react';

export default {
  link: () =>
    css({
      display: 'inline-block', // positions link against margin. Otherwise it's centered.
    }),
};
