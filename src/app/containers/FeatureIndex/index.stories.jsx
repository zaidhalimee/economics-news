import React from 'react';
import { storiesOf } from '@storybook/react';
import igboData from '#data/igbo/frontpage';
import pidginData from '#data/pidgin/frontpage';
import addIdsToItems from '#lib/utilities/preprocessor/rules/addIdsToItems';
import thaiData from '#data/thai/frontpage';
import yorubaData from '#data/yoruba/frontpage';
import punjabiData from '#data/punjabi/frontpage';
import filterUnknownContentTypes from '#lib/utilities/preprocessor/rules/filterContentType';
import filterEmptyGroupItems from '#lib/utilities/preprocessor/rules/filterEmptyGroupItems';
import applySquashTopstories from '#lib/utilities/preprocessor/rules/topstories';
import preprocess from '#lib/utilities/preprocessor';
import FeatureIndex from '.';

const preprocessorRules = [
  filterUnknownContentTypes,
  addIdsToItems,
  filterEmptyGroupItems,
  applySquashTopstories,
];

const serviceDatasets = {
  igbo: igboData,
  yoruba: yorubaData,
  pidgin: pidginData,
  thai: thaiData,
  punjabi: punjabiData,
};

const stories = storiesOf('Pages|Feature Index', module);
Object.keys(serviceDatasets).forEach(service => {
  stories.add(service, () => {
    const featureIndexData = preprocess(
      serviceDatasets[service],
      preprocessorRules,
    );

    const data = {
      pageData: featureIndexData,
      status: 200,
    };

    return (
      <FeatureIndex
        data={data}
        service={service}
        isAmp={false}
        loading={false}
        error={null}
        pageType="FIX"
      />
    );
  });
});
