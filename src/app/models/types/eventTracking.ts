import { ReactSDKClient } from '@optimizely/react-sdk';

export type ReverbClient = {
  isReady: () => boolean;
  initialise: () => Promise<void>;
  viewEvent: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userActionEvent: (...args: any[]) => void;
};

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
