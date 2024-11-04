import { css, Theme } from '@emotion/react';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import pixelsToRem from '#app/utilities/pixelsToRem';
import { focusIndicatorThickness } from '#app/components/ThemeProvider/focusIndicator';

export default {
  liteMediaButtonOverlay: ({ palette }: Theme) =>
    css({
      position: 'relative',
      backgroundColor: palette.WHITE,
      width: '100%',
      height: '100%',
      minHeight: 150,
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      borderRadius: 0,

      '&:hover, &:focus-visible': {
        span: {
          color: palette.WHITE,
          backgroundColor: palette.POSTBOX,
          textDecoration: 'underline',
          border: `${pixelsToRem(1)}rem solid ${palette.POSTBOX}`,
        },
      },

      "&[type='button']:focus-visible": {
        outline: 'none',
        boxShadow: 'none',

        span: {
          outline: `${focusIndicatorThickness} solid ${palette.BLACK}`,
          boxShadow: `0 0 0 ${focusIndicatorThickness} ${palette.WHITE}`,
          outlineOffset: `${focusIndicatorThickness}`,
        },
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
  liteButtonText: ({ palette, spacings }: Theme) =>
    css({
      display: 'inline-flex',
      alignItems: 'center',
      color: palette.BLACK,
      marginTop: `${spacings.QUADRUPLE}rem`,
      padding: `${spacings.DOUBLE}rem`,
      border: `${pixelsToRem(1)}rem solid ${palette.GREY_5}`,
    }),
  iconWrapper: ({ spacings, mq }: Theme) =>
    css({
      marginInlineEnd: `${spacings.FULL}rem`,
      display: 'flex',
      alignItems: 'center',
      height: `${spacings.TRIPLE}rem`,
      width: `${spacings.TRIPLE}rem`,

      '> svg': {
        color: 'currentColor',
        fill: 'currentColor',
        height: `${spacings.DOUBLE}rem`,
        width: `${spacings.DOUBLE}rem`,

        [mq.FORCED_COLOURS]: {
          color: 'canvasText',
        },
      },
    }),
  liteInfoText: ({ spacings }: Theme) =>
    css({
      marginTop: `${spacings.DOUBLE}rem`,
    }),
};
