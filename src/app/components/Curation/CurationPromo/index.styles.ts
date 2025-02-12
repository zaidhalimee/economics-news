import { css, Theme } from '@emotion/react';
import pixelsToRem from '#app/utilities/pixelsToRem';

export default {
  promo: ({ isLite, spacings, mq }: Theme) =>
    css({
      ...(isLite && {
        [mq.GROUP_2_MAX_WIDTH]: {
          marginTop: `${pixelsToRem(48)}rem`,
        },
      }),
    }),
};
