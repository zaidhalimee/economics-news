import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

const WIDTH = 250;

const styles = {
  container: ({ palette, spacings, mq }: Theme) =>
    css({
      textAlign: 'end',
      position: 'absolute',
      color: palette.WHITE,
      padding: `${spacings.FULL}rem`,
      display: 'flex',
      flexWrap: 'nowrap',
      background: `rgba(48, 128, 59, 0.9)`,
      height: '100%',
      width: '100%',
      zIndex: '1',
      [mq.GROUP_1_MIN_WIDTH]: {
        left: `calc(100% - ${pixelsToRem(WIDTH)}rem)`,
        width: `${pixelsToRem(WIDTH)}rem`,
        height: 'unset',
      },
    }),
  message: ({ palette }: Theme) =>
    css({
      margin: '0',
      color: palette.WHITE,
    }),
};

export default styles;
