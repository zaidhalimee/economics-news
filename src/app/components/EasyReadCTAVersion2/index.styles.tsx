import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

export default {
  icon: ({ palette, mq }: Theme) =>
    css({
      color: palette.GREY_10,
      fill: 'currentColor',
      verticalAlign: 'middle',
      width: `${pixelsToRem(14)}rem`,
      height: `${pixelsToRem(14)}rem`,
    }),
  link: ({ spacings }: Theme) =>
    css({
      display: 'inline-block',
      textDecoration: 'none',
      borderLeft: `${pixelsToRem(1)}rem solid #AEAEB5`,
      padding: `0 0 0 ${spacings.FULL}rem`,
      margin: `0 0 0 ${spacings.FULL}rem`,
      '&:first-of-type': {
        borderLeft: 'none',
        margin: '0',
      },
    }),
  linkText: () =>
    css({
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
  selected: () =>
    css({
      borderBottom: `${pixelsToRem(1)}rem solid #141414`,
    }),
  disclaimer: ({ spacings }: Theme) =>
    css({
      margin: ` ${spacings.FULL}rem 0 0 0`,
      color: '#545658',
      display: 'block',
    }),
  bottomSpacing: ({ spacings }: Theme) =>
    css({
      margin: `0 0 ${spacings.QUADRUPLE}rem 0`,
    }),
};
