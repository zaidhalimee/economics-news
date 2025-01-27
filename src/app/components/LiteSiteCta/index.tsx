/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import useClickTrackerHandler, {
  constructLiteSiteURL,
} from '#app/hooks/useClickTrackerHandler';
import Paragraph from '../Paragraph';
import Text from '../Text';
import { LeftChevron, RightChevron } from '../icons';
import { ServiceContext } from '../../contexts/ServiceContext';
import { RequestContext } from '../../contexts/RequestContext';
import styles from './index.styles';
import { defaultTranslations } from './liteSiteConfig';

type CtaLinkProps = {
  isRtl: boolean;
  href: string;
  text: string;
  fontVariant?: string;
  showChevron?: boolean;
  ignoreLiteExtension?: boolean;
  className?: string;
  eventTrackingData: { componentName: string };
};

const CtaLink = ({
  isRtl,
  href,
  text,
  fontVariant = 'sansRegular',
  showChevron = false,
  ignoreLiteExtension = false,
  className,
  eventTrackingData,
}: CtaLinkProps) => {
  const chevron = isRtl ? (
    <LeftChevron css={styles.chevron} />
  ) : (
    <RightChevron css={styles.chevron} />
  );

  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);
  const liteUrl = constructLiteSiteURL(eventTrackingData);

  return (
    <a
      href={href}
      className={className}
      css={styles.link}
      onClick={clickTrackerHandler}
      {...(liteUrl && { 'add-lite-tracker-params': liteUrl })}
      {...(ignoreLiteExtension && { 'data-ignore-lite': true })}
    >
      <Text size="brevier" fontVariant={fontVariant} css={styles.linkText}>
        {text}
      </Text>
      {showChevron && chevron}
    </a>
  );
};

const LiteSiteCta = () => {
  const { dir, translations } = useContext(ServiceContext);
  const { canonicalLink } = useContext(RequestContext);
  const isRtl = dir === 'rtl';
  const { liteSite = defaultTranslations } = translations;
  const {
    onboardingMessage,
    toMainSite,
    informationPage,
    informationPageLink,
    dataSaving,
  } = liteSite;
  const id = 'LiteSiteCta';
  const eventTrackingDataSiteSwitch = { componentName: 'switch-to-canonical' };
  const eventTrackingLiteSiteInfo = { componentName: 'lite-site-info' };

  return (
    <section
      role="region"
      data-e2e="lite-cta"
      aria-labelledby={id}
      css={styles.outerContainer}
    >
      <Text as="strong" id={id} hidden>
        {dataSaving}
      </Text>
      <div css={styles.container}>
        <Paragraph size="brevier" css={styles.message}>
          {onboardingMessage}
        </Paragraph>
        <Paragraph data-e2e="to-main-site">
          <CtaLink
            fontVariant="sansBold"
            isRtl={isRtl}
            href={canonicalLink}
            text={toMainSite}
            css={styles.topLinkSpacing}
            ignoreLiteExtension
            showChevron
            eventTrackingData={eventTrackingDataSiteSwitch}
          />
        </Paragraph>
        <Paragraph data-e2e="information-page">
          <CtaLink
            isRtl={isRtl}
            href={informationPageLink}
            text={informationPage}
            css={styles.bottomLinkSpacing}
            eventTrackingData={eventTrackingLiteSiteInfo}
          />
        </Paragraph>
      </div>
    </section>
  );
};

export default LiteSiteCta;
