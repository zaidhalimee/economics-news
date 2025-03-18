/** @jsx jsx */
import { PropsWithChildren, useContext } from 'react';
import { jsx } from '@emotion/react';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { CallToActionLinkProps } from '../CallToActionLink/types';
import { LeftChevron, RightChevron } from '../icons';
import CallToActionLink from '../CallToActionLink';
import Text from '../Text';
import styles from './index.styles';

const CallToActionLinkWithChevron = ({
  href,
  className,
  children,
  eventTrackingData,
  download = false,
}: PropsWithChildren<CallToActionLinkProps>) => {
  const { dir } = useContext(ServiceContext);
  const isRtl = dir === 'rtl';

  return (
    <CallToActionLink
      href={href}
      className={className}
      eventTrackingData={eventTrackingData}
      download={download}
      css={styles.link}
    >
      <Text fontVariant="sansBold" css={styles.linkText}>
        {children}
      </Text>
      {isRtl ? (
        <LeftChevron css={styles.chevron} />
      ) : (
        <RightChevron css={styles.chevron} />
      )}
    </CallToActionLink>
  );
};

export default CallToActionLinkWithChevron;
