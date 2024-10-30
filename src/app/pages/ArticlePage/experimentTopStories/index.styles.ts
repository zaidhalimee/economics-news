import { css, Theme } from '@emotion/react';

export default {
  experimentTopStoriesSectionQuarter: ({ spacings, mq }: Theme) =>
    css({
      display: 'none',
      marginBottom: `${spacings.TRIPLE}rem`,
      '[amp-x-topStoriesExperiment="show_at_quarter"] &': {
        display: 'block',
        [mq.GROUP_4_MIN_WIDTH]: {
          display: 'none',
        },
      },
    }),
  experimentTopStoriesSectionHalfway: ({ spacings, mq }: Theme) =>
    css({
      display: 'none',
      marginBottom: `${spacings.TRIPLE}rem`,
      '[amp-x-topStoriesExperiment="show_at_halfway"] &': {
        display: 'block',
        [mq.GROUP_4_MIN_WIDTH]: {
          display: 'none',
        },
      },
    }),
  experimentTopStoriesSectionThreeQuarters: ({ spacings, mq }: Theme) =>
    css({
      display: 'none',
      marginBottom: `${spacings.TRIPLE}rem`,
      '[amp-x-topStoriesExperiment="show_at_three_quarters"] &': {
        display: 'block',
        [mq.GROUP_4_MIN_WIDTH]: {
          display: 'none',
        },
      },
    }),
};
