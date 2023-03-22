import pixelsToRem from '#app/utilities/pixelsToRem';
import { css, Theme } from '@emotion/react';

export default {
  pageWrapper: ({ palette }: Theme) =>
    css({
      backgroundColor: palette.GREY_2,
    }),
  grid: ({ mq }: Theme) =>
    css({
      maxWidth: `${pixelsToRem(1008)}rem`,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',

      [mq.GROUP_4_MIN_WIDTH]: {
        padding: '0 1rem',
        // gridGap: '1rem', <- This is the same as the 'enableGelGutters' prop on the Grid component
      },
    }),
  primaryColumn: ({ mq }: Theme) =>
    css({
      // Start at col 1 and span 12 columns
      gridColumn: '1 / span 12',
      paddingBottom: '2rem',

      [mq.GROUP_4_MIN_WIDTH]: {
        // Start at col 1 and span 8 columns
        gridColumn: '1 / span 8',
      },
    }),
  secondaryColumn: ({ mq }: Theme) =>
    css({
      // Start at col 1 and span 12 columns
      gridColumn: '1 / span 12',

      [mq.GROUP_4_MIN_WIDTH]: {
        // Start at col 9 and span 4 columns
        gridColumn: '9 / span 4',
        marginTop: '2rem',
      },
    }),
  mainContent: ({ spacings }: Theme) =>
    css({
      paddingBottom: `${spacings.TRIPLE}rem`,
    }),
  mediaPlayer: ({ spacings }: Theme) =>
    css({
      paddingTop: `${spacings.TRIPLE}rem`,
    }),
  adContainer: ({ spacings }: Theme) =>
    css({
      marginBottom: `${spacings.TRIPLE}rem`,
    }),

  mostReadSection: ({ spacings, mq }: Theme) =>
    css({
      [mq.GROUP_1_MAX_WIDTH]: {
        margin: `0 ${spacings.FULL}rem`,
        paddingBottom: `${spacings.TRIPLE}rem`,
      },
      [mq.GROUP_2_MIN_WIDTH]: {
        [mq.GROUP_3_MAX_WIDTH]: {
          margin: `0 ${spacings.DOUBLE}rem`,
          paddingBottom: `${spacings.QUADRUPLE}rem`,
        },
      },
      [mq.GROUP_4_ONLY]: {
        margin: `0 ${spacings.DOUBLE}rem`,
        paddingBottom: `${spacings.QUINTUPLE}rem`,
      },
      [mq.GROUP_5_MIN_WIDTH]: {
        margin: '0 auto',
        padding: `0 ${spacings.DOUBLE}rem ${spacings.TRIPLE}rem`,
        // May need a better way to define these values globally
        maxWidth: `${pixelsToRem(1280)}rem`,
      },
    }),
  relatedTopics: ({ spacings, mq }: Theme) =>
    css({
      margin: `${spacings.DOUBLE}rem`,
      paddingBottom: `${spacings.FULL}rem`,

      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `${spacings.QUADRUPLE}rem 0`,
        paddingBottom: `${spacings.QUADRUPLE}rem`,
      },
    }),
};
