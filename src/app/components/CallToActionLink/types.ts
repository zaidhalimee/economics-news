import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import { GelFontSize, FontVariant } from '../../models/types/theming';

export type CallToActionLinkProps = {
  href?: string;
  className?: string;
  eventTrackingData?: EventTrackingMetadata;
  download?: boolean;
  size?: GelFontSize;
  fontVariant?: FontVariant;
  ignoreLiteExtension?: boolean;
  centerAlign?: boolean;
  text?: string;
};
