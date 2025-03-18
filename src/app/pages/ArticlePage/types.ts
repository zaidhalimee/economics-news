import { OptimoBlock } from '#app/models/types/optimo';
import { Translations } from '#app/models/types/translations';

export type Block = Omit<OptimoBlock, 'model'> & {
  model: { blocks: OptimoBlock[] };
};

export type ComponentToRenderProps = {
  type: string;
  blocks: Block[];
};

export type TimeStampProps = {
  firstPublished: number;
  lastPublished: number;
};

export type HeadlineComponentProps = {
  pathname: string;
  isLite: boolean;
  translations?: Translations;
};
