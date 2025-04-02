import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

// const LabelComponent = styled(SectionLabel)`
//   margin: 0;
//   padding: 0;
//   @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
//     margin: 0 0 ${GEL_SPACING};
//   }
// `;

export default {
  recommendationsWrapper: ({ palette, spacings, mq }: Theme) =>
    css({
      backgroundColor: palette.GREY_2,
      margin: `${spacings.TRIPLE}rem 0`,

      [mq.GROUP_2_MIN_WIDTH]: {
        margin: `0 0 ${spacings.TRIPLE}rem`,
        padding: `0 ${spacings.DOUBLE}rem ${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        margin: `0 0 ${spacings.TRIPLE}rem`,
        padding: `${spacings.DOUBLE}rem 0`,
      },
    }),
  labelComponent: ({ spacings, mq }: Theme) =>
    css({
      margin: 0,
      padding: 0,

      [mq.GROUP_3_MIN_WIDTH]: {
        margin: `0 0 ${spacings.FULL}rem`,
      },
    }),
};
