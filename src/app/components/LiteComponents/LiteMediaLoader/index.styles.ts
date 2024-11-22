import { css, Theme } from '@emotion/react';
import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import pixelsToRem from '#app/utilities/pixelsToRem';
import { focusIndicatorThickness } from '#app/components/ThemeProvider/focusIndicator';

export default {
  wrapper: () => css({ height: '100%' }),
  liteMediaButtonOverlay: ({ isDarkUi, palette }: Theme) =>
    css({
      position: 'relative',
      backgroundColor: isDarkUi ? palette.GREY_6 : palette.WHITE,
      width: '100%',
      height: '100%',
      minHeight: 250,
      border: '0.1875rem solid transparent',
      cursor: 'pointer',
      padding: 0,
      borderRadius: 0,

      '&:hover, &:focus-visible': {
        '.liteButtonText': {
          color: palette.GREY_2,
          backgroundColor: palette.POSTBOX,
          textDecoration: 'underline',
          border: `${pixelsToRem(1)}rem solid ${palette.POSTBOX}`,
        },
      },

      "&[type='button']:focus-visible": {
        outline: 'none',
        boxShadow: 'none',

        '.liteButtonText': {
          outline: `${focusIndicatorThickness} solid ${palette.BLACK}`,
          boxShadow: `0 0 0 ${focusIndicatorThickness} ${palette.WHITE}`,
          outlineOffset: `${focusIndicatorThickness}`,
        },
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
  liteButtonText: ({ isDarkUi, palette, spacings }: Theme) =>
    css({
      display: 'inline-flex',
      alignItems: 'center',
      color: isDarkUi ? palette.GREY_2 : palette.GREY_10,
      margin: `${spacings.DOUBLE}rem 0`,
      padding: `${spacings.DOUBLE}rem`,
      border: `${pixelsToRem(1)}rem solid ${isDarkUi ? palette.GREY_2 : palette.GREY_5}`,
    }),
  liteButtonInfoText: ({ isDarkUi, palette }: Theme) =>
    css({
      color: isDarkUi ? palette.GREY_2 : palette.GREY_10,
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
};
