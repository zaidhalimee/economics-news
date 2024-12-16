import { css, keyframes, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

const multicolour = keyframes({
  '0%': { backgroundColor: '#00FFFF' },
  '25%': { backgroundColor: '#39FF14' },
  '50%': { backgroundColor: '#FFFF00' },
  '75%': { backgroundColor: '#FF1493' },
});

const changes = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '100%': { backgroundPosition: '800% 50%' },
});

const shrinkGrowSpin = keyframes({
  '0%': {
    transform: 'scale(3) rotate(0deg)',
  },
  '25%': {
    transform: 'scale(0.5) rotate(90deg)',
  },
  '50%': {
    transform: 'scale(2) rotate(180deg)',
  },
  '75%': {
    transform: 'scale(0.5) rotate(270deg)',
  },
  '100%': {
    transform: 'scale(3) rotate(360deg)',
  },
});

export default {
  outerContainer: ({ mq, spacings }: Theme) =>
    css({
      margin: `${spacings.FULL}rem`,
      background:
        'linear-gradient(90deg, #00FFFF, #39FF14, #E0E722, #FF69B4, #FF0000, #E0E722, #00FFFF, #00FFFF)',

      'background-size': '800% 800%',
      border: `${pixelsToRem(25)}rem solid red`,
      padding: `${pixelsToRem(25)}rem`,
      [mq.GROUP_2_MIN_WIDTH]: {
        margin: `${spacings.DOUBLE}rem`,
      },
      animation: `${changes} 2s linear infinite`,
    }),
  container: ({ spacings, mq }: Theme) =>
    css({
      padding: `${spacings.DOUBLE}rem 0 0 0`,
      maxWidth: '63.4rem',
      position: 'relative',
      [mq.GROUP_1_MIN_WIDTH]: {
        padding: `${spacings.TRIPLE}rem 0 ${spacings.FULL}rem 0`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `0 auto`,
      },
    }),
  message: ({ spacings, mq }: Theme) =>
    css({
      marginBottom: `${spacings.HALF}rem`,
      [mq.GROUP_1_MIN_WIDTH]: {
        marginBottom: `${spacings.FULL}rem`,
      },
    }),
  chevron: ({ palette, spacings, mq }: Theme) =>
    css({
      animation: `${shrinkGrowSpin} 4s linear infinite`,
      color: palette.GREY_10,
      fill: 'currentColor',
      marginInlineStart: `${spacings.FULL}rem`,
      verticalAlign: 'middle',
      width: `${pixelsToRem(14)}rem`,
      height: `${pixelsToRem(14)}rem`,
      'a:visited &': {
        color: palette.METAL,
      },
      'a:focus &, a:hover &': {
        color: palette.POSTBOX,
      },
      [mq.FORCED_COLOURS]: {
        fill: 'linkText',
        'a:visited &': {
          fill: 'visitedText',
        },
        'a:active &': {
          fill: 'activeText',
        },
      },
    }),
  link: () =>
    css({
      display: 'inline-block',
      textDecoration: 'none',
    }),
  topLinkSpacing: ({ spacings }: Theme) =>
    css({
      padding: `${spacings.FULL + spacings.HALF}rem 0 ${spacings.FULL + spacings.HALF}rem`,
    }),
  linkText: ({ palette }: Theme) =>
    css({
      borderBottom: `${pixelsToRem(1)}rem solid ${palette.GREY_10}`,
      textDecoration: 'none',
      'a:visited &': {
        color: palette.METAL,
        borderBottom: `${pixelsToRem(1)}rem solid ${palette.METAL}`,
      },
      'a:focus &, a:hover &': {
        borderBottom: `${pixelsToRem(2)}rem solid ${palette.POSTBOX}`,
        color: palette.POSTBOX,
      },
    }),
};
