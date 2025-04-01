import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

// const multicolour = keyframes({
//   '0%': { backgroundColor: '#00FFFF' },
//   '25%': { backgroundColor: '#39FF14' },
//   '50%': { backgroundColor: '#FFFF00' },
//   '75%': { backgroundColor: '#FF1493' },
// });

// const changes = keyframes({
//   '0%': { backgroundPosition: '0% 50%' },
//   '100%': { backgroundPosition: '800% 50%' },
// });

// const shrinkGrowSpin = keyframes({
//   '0%': {
//     transform: 'scale(3) rotate(0deg)',
//   },
//   '25%': {
//     transform: 'scale(0.5) rotate(90deg)',
//   },
//   '50%': {
//     transform: 'scale(2) rotate(180deg)',
//   },
//   '75%': {
//     transform: 'scale(0.5) rotate(270deg)',
//   },
//   '100%': {
//     transform: 'scale(3) rotate(360deg)',
//   },
// });

export default {
  icon: ({ palette }: Theme) =>
    css({
      color: palette.GREY_10,
      fill: 'currentColor',
      verticalAlign: 'middle',
      width: `${pixelsToRem(14)}rem`,
      height: `${pixelsToRem(14)}rem`,
    }),
  linkContainer: ({ spacings }: Theme) =>
    css({
      textDecoration: 'none',
      display: 'inline-block',
      padding: `${spacings.FULL}rem 0 ${spacings.DOUBLE}rem 0`,
      '&:first-of-type span': {
        borderLeft: 'none',
      },
    }),
  linkText: () =>
    css({
      display: 'inline-block',
      textDecoration: 'none',
      'a:visited &': {
        color: '#141414',
        borderBottom: `${pixelsToRem(1)}rem solid #141414`,
      },
      'a:focus &, a:hover &': {
        borderBottom: `${pixelsToRem(2)}rem solid #141414`,
        color: '#141414',
      },
    }),
  linkTextContainer: ({ spacings }: Theme) =>
    css({
      textDecoration: 'none',
      display: 'inline-block',
      borderLeft: `${pixelsToRem(1)}rem solid #AEAEB5`,
      padding: `0 ${spacings.FULL}rem`,
    }),
  selected: () =>
    css({
      borderBottom: `${pixelsToRem(2)}rem solid #141414`,
    }),
  notSelected: () =>
    css({
      margin: `0 0 ${pixelsToRem(2)}rem 0`,
      'a:visited &': {
        margin: `0 0 ${pixelsToRem(1)}rem 0`,
      },
      'a:focus &, a:hover &': {
        margin: `0`,
      },
    }),
  disclaimer: ({ spacings }: Theme) =>
    css({
      padding: `0 0 ${spacings.TRIPLE}rem 0`,
      color: '#545658',
      display: 'block',
    }),
};
