/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import Paragraph from '../Paragraph';
import Text from '../Text';
import { LeftChevron, RightChevron } from '../icons';
import { ServiceContext } from '../../contexts/ServiceContext';
import styles from './index.styles';
import { defaultTranslations } from './config';

type CtaLinkProps = {
  isRtl: boolean;
  href: string;
  text: string;
  fontVariant?: string;
  showChevron?: boolean;
  ignoreLiteExtension?: boolean;
  className?: string;
};

const CtaLink = ({
  isRtl,
  href,
  text,
  fontVariant = 'sansRegular',
  showChevron = false,
  ignoreLiteExtension = false,
  className,
}: CtaLinkProps) => {
  const chevron = isRtl ? (
    <LeftChevron css={styles.chevron} />
  ) : (
    <RightChevron css={styles.chevron} />
  );

  return (
    <a
      href={href}
      className={className}
      css={styles.link}
      {...(ignoreLiteExtension && { 'data-ignore-lite': true })}
    >
      <Text size="brevier" fontVariant={fontVariant} css={styles.linkText}>
        {text}
      </Text>
      {showChevron && chevron}
    </a>
  );
};

type Props = {
  easyVersionLink?: string;
  fullVersionLink?: string;
};

const EasyReadCTA = ({ easyVersionLink, fullVersionLink }: Props) => {
  const isEasyVersion = fullVersionLink != null;

  const { dir, translations } = useContext(ServiceContext);
  const isRtl = dir === 'rtl';
  const { easyReadSite = defaultTranslations } = translations;
  const {
    easyOnboardingMessage,
    standardOnboardingMessage,
    toStandardSite,
    toEasySite,
    easySite,
    standardSite,
    aIDisclaimer,
  } = easyReadSite;
  const id = 'LiteSiteCta';

  const href = isEasyVersion ? fullVersionLink : easyVersionLink;

  if (href == null) return null;

  return (
    <section
      role="region"
      data-e2e="lite-cta"
      aria-labelledby={id}
      css={styles.outerContainer}
    >
      <Text as="strong" id={id} hidden>
        {isEasyVersion ? easySite : standardSite}
      </Text>
      <div css={styles.container}>
        <Paragraph size="brevier" css={styles.message}>
          {isEasyVersion ? easyOnboardingMessage : standardOnboardingMessage}
        </Paragraph>
        {isEasyVersion && (
          <Paragraph size="brevier" css={styles.message}>
            {aIDisclaimer}
          </Paragraph>
        )}
        <Paragraph data-e2e="to-main-site">
          <CtaLink
            fontVariant="sansBold"
            isRtl={isRtl}
            href={href}
            text={isEasyVersion ? toStandardSite : toEasySite}
            css={styles.topLinkSpacing}
            showChevron
          />
        </Paragraph>
      </div>
    </section>
  );
};

export default EasyReadCTA;
