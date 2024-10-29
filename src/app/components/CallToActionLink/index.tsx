/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import useClickTrackerHandler from '#app/hooks/useClickTrackerHandler';
import Text from '../Text';
import styles from './index.styles';
import { CallToActionLinkProps } from './types';

const CallToActionLink = ({
  href,
  className,
  children,
  eventTrackingData,
  download = false,
  ignoreStyling = false,
  ignoreLiteExtension = false,
}: PropsWithChildren<CallToActionLinkProps>) => {
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

  const styledContent = (
    <div css={styles.linkTextWrapper}>
      <Text size="pica" fontVariant="sansBold" css={styles.linkText}>
        {children}
      </Text>
    </div>
  );

  return (
    <a
      href={href}
      className={className}
      css={styles.linkBackground}
      onClick={clickTrackerHandler}
      download={download}
      {...(ignoreLiteExtension && { 'data-ignore-lite': true })}
    >
      {ignoreStyling ? children : styledContent}
    </a>
  );
};

export default CallToActionLink;
