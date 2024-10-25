/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { PropsWithChildren } from 'react';
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
  ignoreLiteExtension = false,
  text = '',
  size = 'pica',
  fontVariant = 'sansBold',
  centerAlign = true,
}: PropsWithChildren<CallToActionLinkProps>) => {
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);

  return (
    <a
      href={href}
      className={className}
      css={styles.linkBackground}
      onClick={clickTrackerHandler}
      download={download}
      {...(ignoreLiteExtension && { 'data-ignore-lite': true })}
    >
      {centerAlign ? (
        <div css={styles.linkTextWrapper}>
          <Text size={size} fontVariant={fontVariant} css={styles.linkText}>
            {children}
          </Text>
        </div>
      ) : (
        <>
          <Text size={size} fontVariant={fontVariant}>
            {text}
          </Text>
          {children}
        </>
      )}
    </a>
  );
};

export default CallToActionLink;
