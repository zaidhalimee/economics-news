import { Theme, css } from '@emotion/react';
import pixelsToRem from '#app/utilities/pixelsToRem';

export default {
  grid: ({ mq, gridWidths, spacings }: Theme) =>
    css({
      maxWidth: `${pixelsToRem(gridWidths[1008])}rem`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      margin: '0 auto',
      paddingTop: `${spacings.DOUBLE}rem`,
      paddingLeft: `${spacings.DOUBLE}rem`,
      [mq.GROUP_3_MAX_WIDTH]: {
        paddingTop: `${spacings.DOUBLE}rem`,
        paddingLeft: `${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        paddingTop: `${spacings.TRIPLE}rem`,
        paddingLeft: '0',
      },
    }),
  primaryColumn: ({ mq }: Theme) =>
    css({
      gridColumn: '1 / span 12',
      paddingBottom: '2rem',

      [mq.GROUP_4_MIN_WIDTH]: {
        gridColumn: '1 / span 12',
      },
    }),
  orderedList: ({ mq }: Theme) =>
    css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))',
      listStyleType: 'none',
      padding: 0,
      [mq.GROUP_4_MIN_WIDTH]: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(50%, 1fr))',
      },
    }),
  cta: () =>
    css({
      div: {
        display: 'block',
      },
    }),
  listItem: ({ fontSizes, palette }: Theme) =>
    css({
      borderBottom: '1px solid #000',
      paddingBottom: '15px',
      marginBottom: '8px',
      marginRight: '0px',
      paddingRight: '5px',
      time: {
        ...fontSizes.greatPrimer,
        marginBottom: '8px',
      },
      svg: {
        marginRight: '8px',
      },
      a: {
        color: palette.RHINO,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          color: palette.POSTBOX,
        },
      },
    }),
  mainContent: ({ fontSizes, fontVariants, spacings }: Theme) =>
    css({
      paddingBottom: `${spacings.TRIPLE}rem`,
      p: {
        ...fontVariants.sansRegular,
        ...fontSizes.greatPrimer,
      },
    }),
};
