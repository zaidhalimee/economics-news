import React, { PropsWithChildren } from 'react';
import TEXT from '#app/components/Text';
import styles from './index.styles';

type TextProps = {
  as?: string;
  className?: string;
  size?: string;
  fontVariant?: string;
};

const Text = ({
  as,
  size,
  fontVariant,
  children,
}: PropsWithChildren<TextProps>) => {
  return (
    <TEXT as={as} size={size} fontVariant={fontVariant} css={styles.text}>
      {children}
    </TEXT>
  );
};

export default Text;
