import { css, Theme } from '@emotion/react';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';

export default {
  liteMediaButtonOverlay: ({ palette }: Theme) =>
    css({
      position: 'relative',
      backgroundColor: palette.WHITE,
      width: '100%',
      height: '100%',
      border: 'none',
      cursor: 'pointer',
      aspectRatio: '16 / 9',

      '&:hover, &:focus-visible': {
        span: {
          backgroundColor: palette.BLACK,
          color: palette.WHITE,
        },
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
  liteButtonText: ({ palette }: Theme) =>
    css({
      padding: '1rem',
      color: palette.BLACK,
      border: `2px solid ${palette.BLACK}`,
    }),
  liteInfoText: () =>
    css({
      position: 'absolute',
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
    }),
};
