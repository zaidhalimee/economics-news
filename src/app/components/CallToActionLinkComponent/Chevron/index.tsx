/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { LeftChevron, RightChevron } from '../../icons';

const Chevron = () => {
  const { dir } = useContext(ServiceContext);
  const isRtl = dir === 'rtl';
  return isRtl ? <LeftChevron /> : <RightChevron />;
};

export default Chevron;
