/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';

type CallToActionLinkProps = {
  to?: string;
};

const Link = ({
  to = '/#',
  children,
}: PropsWithChildren<CallToActionLinkProps>) => {
  return <a href={to}>{children}</a>;
};

export default Link;
