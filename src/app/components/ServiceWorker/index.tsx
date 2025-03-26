/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import onClient from '#lib/utilities/onClient';
import { RequestContext } from '#contexts/RequestContext';
import { jsx } from '@emotion/react';
import isLocal from '#app/lib/utilities/isLocal';
import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';
import { ServiceContext } from '../../contexts/ServiceContext';

interface AmpServiceWorkerProps {
  canonicalLink?: string;
  swSrc?: string;
}

const AmpHead = () => (
  <Helmet>
    <script
      async
      custom-element="amp-install-serviceworker"
      src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"
    />
  </Helmet>
);

const AmpServiceWorker = ({
  canonicalLink = '',
  swSrc = '',
}: AmpServiceWorkerProps) => (
  <amp-install-serviceworker
    src={swSrc}
    data-iframe-src={canonicalLink}
    layout="nodisplay"
  />
);

export default () => {
  const { swPath, service } = useContext(ServiceContext);
  const { isAmp, canonicalLink } = useContext(RequestContext);
  const swSrc = `${getEnvConfig().SIMORGH_BASE_URL}/${service}${swPath}`;

  useEffect(() => {
    const registerServiceWorker = async () => {
      const shouldInstallServiceWorker =
        swPath && onClient() && 'serviceWorker' in navigator;

      if (shouldInstallServiceWorker) {
        try {
          const registration = await navigator.serviceWorker.register(
            `/${service}${swPath}`,
          );

          // Type assertion to inform TypeScript about periodicSync
          const periodicSyncRegistration =
            registration as ServiceWorkerRegistration & {
              periodicSync?: {
                register: (
                  tag: string,
                  options: { minInterval: number },
                ) => Promise<void>;
              };
            };

          if (periodicSyncRegistration.periodicSync) {
            await periodicSyncRegistration.periodicSync.register(
              'get-latest-news',
              {
                minInterval: 1 * 60 * 1000,
              },
            );
            console.warn('Periodic Sync registered successfully.');
          } else {
            console.warn('Periodic Sync is not supported in this browser.');
          }
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();
  }, [swPath, service]);

  return !isLocal() && isAmp && swPath ? (
    <>
      <AmpHead />
      <AmpServiceWorker canonicalLink={canonicalLink} swSrc={swSrc} />
    </>
  ) : null;
};
