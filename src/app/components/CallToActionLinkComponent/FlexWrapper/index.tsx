/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';

const FlexWrapper = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default FlexWrapper;
