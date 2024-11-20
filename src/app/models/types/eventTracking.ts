import { ReactSDKClient } from '@optimizely/react-sdk';

export type EventTrackingMetadata = {
  componentName: string;
  detailedPlacement?: string;
  campaignID?: string;
  advertiserID?: number | string;
  optimizely?: ReactSDKClient | null;
  optimizelyMetricName?: string;
};

export type EventTrackingBlock = {
  block: {
    componentName: EventTrackingMetadata['componentName'];
  };
};
