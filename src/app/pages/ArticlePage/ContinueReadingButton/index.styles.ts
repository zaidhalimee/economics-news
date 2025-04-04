import NO_JS_CLASSNAME from '#app/lib/noJs.const';
import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  continueReadingButtonA: ({ spacings, palette }: Theme) =>
    css({
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: 'calc(100% - 2rem)',
      padding: `${spacings.DOUBLE}rem 0`,
      margin: `0 ${spacings.DOUBLE}rem -1.5rem  ${spacings.DOUBLE}rem`,
      backgroundColor: palette.GREY_10,
      border: 'none',

      span: {
        color: palette.WHITE,
      },

      '&:hover, &:focus': {
        textDecoration: 'underline',
        '> span': {
          textDecoration: 'inherit',
        },
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
  continueReadingButtonB: ({ spacings, palette }: Theme) =>
    css({
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
      width: 'calc(100% - 2rem)',
      padding: `${spacings.DOUBLE}rem 0`,
      margin: `0 ${spacings.DOUBLE}rem -0.5rem ${spacings.DOUBLE}rem`,
      backgroundColor: palette.GREY_2,
      color: palette.GREY_10,
      textAlign: 'start',
      border: 'none',
      borderBottom: `${pixelsToRem(1)}rem solid #B0B2B4`,
      paddingBottom: `calc(${spacings.DOUBLE}rem + 0.5rem)`,

      svg: {
        fill: 'currentColor',
        width: `${spacings.DOUBLE}rem`,
        height: `${spacings.DOUBLE}rem`,
        marginInlineEnd: `${pixelsToRem(10)}rem`,
        verticalAlign: 'middle',
      },

      '&:hover, &:focus': {
        textDecoration: 'underline',
      },

      [`.${NO_JS_CLASSNAME} &`]: {
        display: 'none',
      },
    }),
  hideButtonOnDesktop: ({ mq }: Theme) =>
    css({
      [mq.GROUP_4_MIN_WIDTH]: {
        display: 'none',
      },
    }),
};
