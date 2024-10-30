/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { RequestContext } from '#app/contexts/RequestContext';
import AmpIframe from '#app/components/AmpIframe';
import useToggle from '#app/hooks/useToggle';
import { Tag } from '#app/components/Metadata/types';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { getEnvConfig } from '#app/lib/utilities/getEnvConfig';
import styles from './index.styles';
import BANNER_CONFIG from './config';

export default function ElectionBanner({ aboutTags }: { aboutTags: Tag[] }) {
  const { service } = useContext(ServiceContext);
  const { isAmp, isLite } = useContext(RequestContext);
  const { enabled: electionBannerEnabled }: { enabled: boolean | null } =
    useToggle('electionBanner');

  if (isLite) return null;

  const { heights, iframeSrc, iframeDevSrc, thingIds } = BANNER_CONFIG;

  const iframeSrcToUse =
    getEnvConfig()?.SIMORGH_APP_ENV === 'live' ? iframeSrc : iframeDevSrc;
  console.log('iframeSrcToUse', iframeSrcToUse);

  const validAboutTag = aboutTags?.find(tag => thingIds.includes(tag.thingId));

  const showBanner = validAboutTag && electionBannerEnabled;

  if (!showBanner) return null;

  if (isAmp) {
    return (
      <div data-testid="election-banner" css={styles.electionBannerWrapperAmp}>
        <AmpIframe
          ampMetadata={{
            imageWidth: 1,
            imageHeight: 1,
            src: `${iframeSrcToUse.replace('{service}', service)}/amp`,
            image:
              'https://news.files.bbci.co.uk/include/vjassets/img/app-launcher.png',
            title: validAboutTag.thingLabel,
          }}
        />
      </div>
    );
  }

  return (
    <div data-testid="election-banner" css={styles.electionBannerWrapper}>
      <iframe
        title={validAboutTag.thingLabel}
        src={iframeSrcToUse.replace('{service}', service)}
        scrolling="no"
        css={styles.electionBannerIframe}
        height={heights.desktop}
        width="100%"
      />
    </div>
  );
}
