import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

export default {
  linkText: ({ palette }: Theme) =>
    css({
      borderBottom: `${pixelsToRem(1)}rem solid ${palette.GREY_10}`,
      textDecoration: 'none',
      'a:visited &': {
        color: palette.BLACK,
        borderBottom: `${pixelsToRem(1)}rem solid ${palette.BLACK}`,
      },
      'a:focus &, a:hover &': {
        borderBottom: `${pixelsToRem(2)}rem solid ${palette.POSTBOX}`,
        color: palette.POSTBOX,
      },
    }),
  link: ({ spacings }: Theme) =>
    css({
      textDecoration: 'none',
      padding: `${spacings.FULL}rem 0 ${spacings.FULL}rem`,
      '&:focus, &:hover': {
        textDecoration: 'none',
      },
    }),
};
