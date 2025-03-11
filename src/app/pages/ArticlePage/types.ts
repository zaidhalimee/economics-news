import { OptimoBlock } from '#app/models/types/optimo';

export type ComponentToRenderProps = {
  blocks: OptimoBlock[];
};

export type TimeStampProps = {
  firstPublished: number;
  lastPublished: number;
};

export type getHeadlineComponentProps = {
  pathname: string; 
  isLite: boolean;
  translations: {},
};
