import { ATIEventTrackingProps } from '#app/components/ATIAnalytics/types';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import { CLICK_EVENT, VIEW_EVENT } from './analytics.const';

export type ATIEventType = typeof VIEW_EVENT | typeof CLICK_EVENT;

export type EventTrackingProps = ATIEventTrackingProps & EventTrackingMetadata;
