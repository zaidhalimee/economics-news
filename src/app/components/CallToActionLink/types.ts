import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import { GelFontSize, FontVariant } from '../../models/types/theming';

export type CallToActionLinkProps = {
  href?: string;
  className?: string;
  eventTrackingData?: EventTrackingMetadata;
  size?: GelFontSize;
  fontVariant?: FontVariant;
  download?: boolean;
  ignoreLiteExtension?: boolean;
  borderStyleOverride?: boolean;
  linkText?: string;
};
