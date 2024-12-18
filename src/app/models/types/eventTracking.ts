import { ReactSDKClient } from '@optimizely/react-sdk';

export type EventTrackingMetadata = {
  componentName: string;
  detailedPlacement?: string;
  campaignID?: string;
  advertiserID?: number | string;
  optimizely?: ReactSDKClient | null;
  optimizelyMetricNameOverride?: string;
};

export type EventTrackingBlock = {
  block: {
    componentName: EventTrackingMetadata['componentName'];
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type viewTrackerRef = any;
