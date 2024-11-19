import { css, Theme } from '@emotion/react';

export default {
  experimentTopStoriesSection:
    (variant: string) =>
    ({ spacings, mq }: Theme) => {
      return css({
        display: 'none',
        marginBottom: `${spacings.TRIPLE}rem`,
        [`[amp-x-topStoriesExperiment="${variant}"] &`]: {
          display: 'block',
          [mq.GROUP_4_MIN_WIDTH]: {
            display: 'none',
          },
        },
      });
    },
};
