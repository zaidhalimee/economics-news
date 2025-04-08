import React from 'react';

import HierarchicalGrid from './index';
import { pidginPromos, pidginPromosWithMedia } from './fixtures';

const Component = ({
  promoCount,
  promosToRender,
}: {
  promoCount: number;
  promosToRender: string;
}) => {
  const fixtureData =
    promosToRender === 'default' ? pidginPromos : pidginPromosWithMedia;
  return (
    <HierarchicalGrid
      headingLevel={2}
      summaries={fixtureData.slice(0, promoCount)}
    />
  );
};

export default {
  title: 'Components/Curation/Grid - Hierarchical',
  Component,
  args: {
    promoCount: 12,
    promosToRender: 'default',
  },
  argTypes: {
    promoCount: {
      control: {
        type: 'range',
        min: 3,
        max: 12,
        step: 1,
      },
    },
    promosToRender: {
      control: {
        type: 'select',
      },
      options: ['default', 'withMedia'],
    },
  },
};

export const Example = Component;
