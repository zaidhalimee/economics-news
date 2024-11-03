import { css, Theme } from '@emotion/react';

export default {
  buttonWrapper: ({ palette }: Theme) =>
    css({
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.WHITE,
    }),
  button: ({ palette }: Theme) =>
    css({
      padding: '1rem',
      border: `2px solid ${palette.BLACK}`,
      backgroundColor: palette.WHITE,
      cursor: 'pointer',

      span: {
        color: palette.BLACK,
      },

      '&:hover, &:focus-visible': {
        backgroundColor: palette.BLACK,

        span: {
          color: palette.WHITE,
        },
      },
    }),
  iframe: () =>
    css({
      width: '100%',
      height: '100%',
      border: 'none',
    }),
};
