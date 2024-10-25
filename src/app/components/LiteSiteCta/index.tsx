/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import Paragraph from '../Paragraph';
import Text from '../Text';
import { LeftChevron, RightChevron } from '../icons';
import { ServiceContext } from '../../contexts/ServiceContext';
import { RequestContext } from '../../contexts/RequestContext';
import styles from './index.styles';
import { defaultTranslations } from './liteSiteConfig';
import CallToActionLink from '../CallToActionLink';

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
          <CallToActionLink
            href={canonicalLink}
            text={toMainSite}
            ignoreLiteExtension
            size="brevier"
            fontVariant="sansBold"
            className="touchTarget"
            centerAlign={false}
            css={[styles.topLinkSpacing, styles.link]}
          >
            {isRtl ? (
              <LeftChevron css={styles.chevron} />
            ) : (
              <RightChevron css={styles.chevron} />
            )}
          </CallToActionLink>
        </Paragraph>
        <Paragraph data-e2e="information-page">
          <CallToActionLink
            href={informationPageLink}
            text={informationPage}
            size="brevier"
            fontVariant="sansRegular"
            className="touchTarget"
            centerAlign={false}
            css={[styles.bottomLinkSpacing, styles.link]}
          />
        </Paragraph>
      </div>
    </section>
  );
};

export default LiteSiteCta;
