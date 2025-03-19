/** @jsx jsx */

import React, { useContext } from 'react';
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import ATIAnalytics from '#app/components/ATIAnalytics';
import ChartbeatAnalytics from '#app/components/ChartbeatAnalytics';
import Metadata from '#app/components/Metadata';
import CallToActionLink from '#app/components/CallToActionLink';
import { ServiceContext } from '#app/contexts/ServiceContext';
import styles from './styles';
import { PageProps } from './types';

const DownloadsPageLayout = ({ service, pageData }: PageProps) => {
  const {
    lang,
    translations: {
      pwa: {
        instructions = 'There is no internet connection',
        title = 'Offline',
        mirror = null,
        mirrorCTA = '',
      } = {},
    },
  } = useContext(ServiceContext);

  const capitalisedService = service[0].toUpperCase() + service.slice(1);
  const description = `${capitalisedService} Offline Page`;
  const atiData = pageData?.metadata?.atiAnalytics || {};
  const pageTitle = pageData?.metadata?.pageTitle || '';
  return (
    <>
      <ATIAnalytics atiData={atiData} />
      <ChartbeatAnalytics title={pageTitle} />
      <Metadata
        title={title}
        lang={lang}
        description={description}
        openGraphType="website"
        hasAmpPage={false}
      />
      <div css={styles.grid}>
        <div css={styles.primaryColumn}>
          <main css={styles.mainContent}>
            <Heading level={1}>{title}</Heading>
            <p css={styles.paragraphTag}>{instructions}</p>
            {mirror && (
              <CallToActionLink
                css={styles.cta}
                href={mirror}
                download
                eventTrackingData={{
                  componentName: 'offlinePage',
                  campaignID: 'offline_mirror',
                }}
              >
                <span>{mirrorCTA}</span>
              </CallToActionLink>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default DownloadsPageLayout;
