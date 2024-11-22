import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

const WIDTH = 200;

const styles = {
  container: ({ palette, spacings, mq }: Theme) =>
    css({
      textAlign: 'center',
      position: 'absolute',
      color: palette.WHITE,
      padding: `${spacings.FULL}rem`,
      display: 'flex',
      flexWrap: 'nowrap',
      background: `rgba(34, 34, 34, 0.75)`,
      height: '100%',
      width: '100%',
      zIndex: '1',
      [mq.GROUP_1_MIN_WIDTH]: {
        textAlign: 'end',
        left: `calc(100% - ${pixelsToRem(WIDTH)}rem)`,
        width: `${pixelsToRem(WIDTH)}rem`,
        height: 'unset',
      },
    }),
  message: ({ palette }: Theme) =>
    css({
      alignItems: 'center',
      display: 'flex',
      color: palette.WHITE,
    }),
};

export default styles;
