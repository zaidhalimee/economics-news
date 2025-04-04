/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import { EventTrackingMetadata } from '#app/models/types/eventTracking';
import Chevron from './Chevron';
import FlexWrapper from './FlexWrapper';

type CallToActionLinkProps = {
  to?: string;
  className?: string;
  eventTrackingData?: EventTrackingMetadata;
};

const CallToActionLink = ({
  to,
  children,
  eventTrackingData,
  ...htmlAttributes // handles LiteSiteCta
}: PropsWithChildren<CallToActionLinkProps>) => {
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);
  const onClick = eventTrackingData ? clickTrackerHandler : () => null;

  return (
    <a href={to} onClick={onClick} {...htmlAttributes}>
      {children}
    </a>
  );
};

CallToActionLink.Chevron = Chevron;
CallToActionLink.FlexWrapper = FlexWrapper;

export default CallToActionLink;
