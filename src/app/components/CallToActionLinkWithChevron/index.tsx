/** @jsx jsx */
import { PropsWithChildren, useContext } from 'react';
import { jsx, SerializedStyles, Theme } from '@emotion/react';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { CallToActionLinkProps } from '../CallToActionLink/types';
import { LeftChevron, RightChevron } from '../icons';
import CallToActionLink from '../CallToActionLink';

const CallToActionLinkWithChevron = ({
  href,
  className,
  children,
  eventTrackingData,
  download = false,
  chevronStyles,
}: PropsWithChildren<
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CallToActionLinkProps & { chevronStyles?: (theme: Theme) => SerializedStyles }
>) => {
  const { dir } = useContext(ServiceContext);
  const isRtl = dir === 'rtl';

  return (
    <CallToActionLink
      href={href}
      className={className}
      eventTrackingData={eventTrackingData}
      download={download}
    >
      {children}
      {isRtl ? (
        <LeftChevron css={chevronStyles} />
      ) : (
        <RightChevron css={chevronStyles} />
      )}
    </CallToActionLink>
  );
};

export default CallToActionLinkWithChevron;
