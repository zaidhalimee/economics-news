/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import styles from './index.styles';

const FlexWrapper = ({ children }: PropsWithChildren) => {
  return <div css={styles.flexWrapper}>{children}</div>;
};

export default FlexWrapper;
