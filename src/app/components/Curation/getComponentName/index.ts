import {
  VISUAL_STYLE,
  VISUAL_PROMINENCE,
  CurationProps,
} from '#app/models/types/curationData';

export const COMPONENT_NAMES = {
  MESSAGE_BANNER: 'message-banner',
  SIMPLE_CURATION_GRID: 'simple-curation-grid',
  HIERARCHICAL_CURATION_GRID: 'hierarchical-curation-grid',
  NOT_SUPPORTED: 'not-supported',
  MOST_READ: 'most-read',
  RADIO_SCHEDULE: 'radio-schedule',
  EMBED: 'embed',
  // FLOURISH_VIS: 'flourish-vis',
  // VJ_INCLUDE: 'vj-include',
} as const;

const { NONE, BANNER, COLLECTION, RANKED } = VISUAL_STYLE;
const { MINIMUM, LOW, NORMAL, HIGH, MAXIMUM } = VISUAL_PROMINENCE;
const {
  MESSAGE_BANNER,
  SIMPLE_CURATION_GRID,
  HIERARCHICAL_CURATION_GRID,
  MOST_READ,
  NOT_SUPPORTED,
  RADIO_SCHEDULE,
  EMBED,
  // FLOURISH_VIS,
  // VJ_INCLUDE,
} = COMPONENT_NAMES;

export default ({
  visualStyle,
  visualProminence,
  radioSchedule,
  embed,
}: // link,
// vjFetchResponse,
Partial<CurationProps>) => {
  if (radioSchedule) {
    return RADIO_SCHEDULE;
  }
  if (embed) {
    return EMBED;
  }
  // if (link?.includes('flo.uri.sh')) {
  //   return FLOURISH_VIS;
  // }
  // if (vjFetchResponse) {
  //   return VJ_INCLUDE;
  // }

  const componentsByVisualStyleAndProminence = {
    [`${BANNER}_${MINIMUM}`]: NOT_SUPPORTED,
    [`${BANNER}_${LOW}`]: NOT_SUPPORTED,
    [`${BANNER}_${NORMAL}`]: MESSAGE_BANNER,
    [`${BANNER}_${MAXIMUM}`]: MESSAGE_BANNER,
    [`${BANNER}_${HIGH}`]: NOT_SUPPORTED,
    [`${NONE}_${NORMAL}`]: SIMPLE_CURATION_GRID,
    [`${NONE}_${HIGH}`]: HIERARCHICAL_CURATION_GRID,
    [`${COLLECTION}_${HIGH}`]: HIERARCHICAL_CURATION_GRID,
    [`${RANKED}_${NORMAL}`]: MOST_READ,
    [`${BANNER}_${NORMAL}`]: EMBED,
  };

  const visualStyleAndProminence = `${visualStyle}_${visualProminence}`;

  return componentsByVisualStyleAndProminence[visualStyleAndProminence] || null;
};
