import { Services, Variants } from '#app/models/types/global';
import { ATIData } from '#app/components/ATIAnalytics/types';

export type Metadata = {
  atiAnalytics: ATIData;
  type: string;
  pageTitle: string;
};

export type PageProps = {
  service: Services;
  variant?: Variants;
  pageData: {
    title: string;
    description: string;
    metadata?: Metadata;
  };
};
