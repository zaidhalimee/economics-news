import { MediaBlock } from '#app/components/MediaLoader/types';
import { OptimoBlock } from '#app/models/types/optimo';

export type ComponentToRenderProps = {
  blocks: OptimoBlock[];
};

// Temporary - For rendering storybook asset. To replace with hook use.
export type MediaComponentToRenderProps = {
  blocks: MediaBlock[];
};

export type TimeStampProps = {
  firstPublished: number;
  lastPublished: number;
};
