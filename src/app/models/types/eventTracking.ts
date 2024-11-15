export type EventTrackingMetadata = {
  componentName: string;
  detailedPlacement?: string;
  campaignID?: string;
  advertiserID?: number | string;
};

export type EventTrackingBlock = {
  block: {
    componentName: EventTrackingMetadata['componentName'];
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type viewTrackerRef = any;
