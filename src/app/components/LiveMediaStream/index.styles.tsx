import { css, Theme } from '@emotion/react';

export default {
  liveMediaStreamContainer: ({ palette, spacings, mq }: Theme) =>
    css({
      // backgroundColor: `${palette.BLACK}`,
      margin: `0 ${spacings.FULL}rem`,
    }),
};
