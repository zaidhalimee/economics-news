import React, { useContext } from 'react';
import { RequestContext } from '#contexts/RequestContext';
import { ServiceContext } from '../../contexts/ServiceContext';
import MyAnalytics from './canonical/sendBeaconTranscript';
import { ATIProps } from './types';
import buildATIUrl from './params';

const ATIAnalyticsTranscript = ({ data, atiData }: ATIProps) => {
  const requestContext = useContext(RequestContext);
  const serviceContext = useContext(ServiceContext);

  const pageviewParams = buildATIUrl({
    requestContext,
    serviceContext,
    data,
    atiData,
  }) as string;

  return <MyAnalytics pageviewParams={pageviewParams} />;
};

export default ATIAnalyticsTranscript;
