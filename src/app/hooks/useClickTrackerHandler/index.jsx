/* eslint-disable no-console */
import { useContext, useCallback, useState } from 'react';

import { EventTrackingContext } from '../../contexts/EventTrackingContext';
import { RequestContext } from '../../contexts/RequestContext';
import useTrackingToggle from '../useTrackingToggle';
import OPTIMIZELY_CONFIG from '../../lib/config/optimizely';
import { sendEventBeacon } from '../../components/ATIAnalytics/beacon/index';
import { ServiceContext } from '../../contexts/ServiceContext';
import { isValidClick } from './clickTypes';
import { buildATIEventTrackUrl } from '#app/components/ATIAnalytics/atiUrl';

const EVENT_TYPE = 'click';

const constructBeaconProps = props => {
  const eventTrackingContext = useContext(EventTrackingContext);
  const { service } = useContext(ServiceContext);

  const componentName = props?.componentName;
  const url = props?.url;
  const advertiserID = props?.advertiserID;
  const format = props?.format;
  const detailedPlacement = props?.detailedPlacement;

  const {
    pageIdentifier,
    platform,
    producerId,
    producerName,
    statsDestination,
  } = eventTrackingContext;
  const campaignID = props?.campaignID || eventTrackingContext?.campaignID;

  return {
    type: EVENT_TYPE,
    campaignID,
    componentName,
    format,
    pageIdentifier,
    platform,
    producerId,
    producerName,
    service,
    advertiserID,
    statsDestination,
    url,
    detailedPlacement,
  };
};

const useClickTrackerHandler = (props = {}) => {
  const preventNavigation = props?.preventNavigation;
  const optimizely = props?.optimizely;
  const optimizelyMetricNameOverride = props?.optimizelyMetricNameOverride;
  const beaconProps = constructBeaconProps(props);
  const {
    campaignID,
    componentName,
    pageIdentifier,
    platform,
    producerId,
    producerName,
    service,
    statsDestination,
  } = beaconProps;

  const { trackingIsEnabled } = useTrackingToggle(componentName);
  const [clicked, setClicked] = useState(false);

  const { useReverb } = useContext(ServiceContext);
  console.log('OUTSIDE USE CALLBACK');
  return useCallback(async event => {
    const shouldRegisterClick = [
      trackingIsEnabled,
      !clicked,
      isValidClick(event),
    ].every(Boolean);
    if (shouldRegisterClick) {
      setClicked(true);
      console.log('INSIDE USE CALLBACK');
      const shouldSendEvent = [
        campaignID,
        componentName,
        pageIdentifier,
        platform,
        producerId,
        producerName,
        service,
        statsDestination,
      ].every(Boolean);
      if (shouldSendEvent) {
        const nextPageUrl = event?.currentTarget?.href;

        event.stopPropagation();
        event.preventDefault();

        if (optimizely) {
          const eventName = OPTIMIZELY_CONFIG.viewClickAttributeId;

          const overrideAttributes = {
            ...optimizely.user.attributes,
            [`clicked_${eventName}`]: true,
          };

          optimizely.track(
            optimizelyMetricNameOverride
              ? `${optimizelyMetricNameOverride}_clicks`
              : 'component_clicks',
            optimizely.user.id,
            overrideAttributes,
          );
        }

        const optimizelyVariation =
          optimizely?.getVariation(OPTIMIZELY_CONFIG.ruleKey) || null;

        try {
          await sendEventBeacon({
            ...beaconProps,
            useReverb,
            ...(optimizelyVariation &&
              optimizelyVariation !== 'off' && {
                experimentVariant: optimizelyVariation,
              }),
          });
        } finally {
          if (nextPageUrl && !preventNavigation) {
            if (optimizely) {
              optimizely.close();
            }
            window.location.assign(nextPageUrl);
          }
        }
      }
    }
  }, Object.keys(beaconProps));
};

export const LITE_TRACKER_FUNCTION = 'liteTrackerFunction';

export const liteTrackingScript = () => {
  return `function ${LITE_TRACKER_FUNCTION}(event, atiURL){
      // console.log(event, atiURL);

      event.stopPropagation();
      event.preventDefault();

      var nextPageUrl = event.currentTarget.href;
      
      const { screen: {width, height, colorDepth, pixelDepth}, innerWidth, innerHeight } = window;
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();

      function getCookie () {
        const cookieName = 'atuserid';
        const expires = 397; // expires in 13 months
	      let value = \`; $\{document.cookie\}\`;
	      let parts = value.split(\`; $\{cookieName\}=\`);
        let val = null;
    
	      if (parts.length === 2){
          const cookie = parts.pop().split(';').shift();
          if(cookie){
            let decodedCookie = decodeURI(cookie);
            const user = JSON.parse(decodedCookie);
            val = user.val;
          }
          else if(crypto.randomUUID){
            val = JSON.stringify({val:crypto.randomUUID()});
          }
        } 

        if(val){
          document.cookie = \`$\{cookieName\}=$\{val\}; path=/; max-age=$\{expires\};\`;
        }
      
        return val;
      }

      const rValue = [
        width || 0,
        height || 0,
        colorDepth || 0,
        pixelDepth || 0,
      ].join('x')
      
      const reValue = [innerWidth || 0, innerHeight || 0].join('x');

      const hlValue = [hours, mins, secs].join('x');

      let clientSideAtiURL = atiURL
                                .concat('&', 'r=', rValue)
                                .concat('&', 're=', reValue)
                                .concat('&', 'hl=', hlValue)
      
      if (navigator.language) {
        clientSideAtiURL = clientSideAtiURL.concat('&', 'lng=', navigator.language)
      }                     
      
      const cookieId = getCookie();

      if (cookieId) {
        clientSideAtiURL = clientSideAtiURL.concat('&', 'idclient=', cookieId)
      }     

      sendBeaconLite(clientSideAtiURL);

      window.location.assign(nextPageUrl);
  }`;
};

export const constructLiteSiteURL = props => {
  const beaconProps = constructBeaconProps(props);
  const atiClickTrackingUrl = buildATIEventTrackUrl(beaconProps);
  return atiClickTrackingUrl;
};

export default useClickTrackerHandler;
