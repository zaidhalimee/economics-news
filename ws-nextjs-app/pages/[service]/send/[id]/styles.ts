import { Theme, css } from '@emotion/react';
import pixelsToRem from '../../../../../src/app/utilities/pixelsToRem';

export default {
  background: () =>
    css({
      background:
        'linear-gradient(200deg, #A20219 0%, #180109 54%, #180109 90%)',
    }),
  grid: ({ mq, gridWidths, spacings }: Theme) =>
    css({
      [mq.GROUP_3_MIN_WIDTH]: {
        maxWidth: `${pixelsToRem(gridWidths[1008])}rem`,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        padding: '1rem',
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        columnGap: `${spacings.FULL}rem`,
      },
    }),
  primaryColumn: ({ mq }: Theme) =>
    css({
      gridColumn: '1 / span 12',

      [mq.GROUP_4_MIN_WIDTH]: {
        gridColumn: '1 / span 8',
        paddingBottom: '2rem',
      },
    }),
  mainContent: ({ spacings, palette, mq }: Theme) =>
    css({
      background: palette.WHITE,
      padding: `${spacings.TRIPLE}rem ${spacings.DOUBLE}rem`,
      [mq.GROUP_3_MIN_WIDTH]: {
        width: '35rem',
      },
    }),
  description: ({ palette, spacings, fontVariants, fontSizes }: Theme) =>
    css({
      borderBottom: `1px solid ${palette.GREY_5}`,
      marginBottom: `${spacings.QUADRUPLE}rem`,
      paddingBottom: `${spacings.DOUBLE}rem`,
      ...fontVariants.sansRegular,
      ...fontSizes.bodyCopy,
    }),
};
