/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import { GridItemMedium } from '#app/legacy/components/Grid';
import Text from '../Text';
import { ServiceContext } from '../../contexts/ServiceContext';
import styles from './index.styles';
import { defaultTranslations } from './config';
import InlineLink from '../InlineLink';
import { FormatIcon } from '../icons';

type CtaLinkProps = {
  href: string;
  text: string;
  ignoreLiteExtension?: boolean;
  className?: string;
  selected?: boolean;
};

const CtaLink = ({ href, text, className, selected = false }: CtaLinkProps) => {
  return (
    <a
      href={href}
      className={className}
      css={styles.linkContainer}
      {...(selected && { 'aria-current': 'page' })}
    >
      <span css={styles.linkTextContainer}>
        <Text
          size="brevier"
          css={[
            styles.linkText,
            selected ? styles.selected : styles.notSelected,
          ]}
        >
          {text}
        </Text>
      </span>
    </a>
  );
};

type Props = {
  easyVersionLink?: string;
  fullVersionLink?: string;
};

const EasyReadCTA = ({ easyVersionLink, fullVersionLink }: Props) => {
  const isEasyVersion = fullVersionLink != null;

  const { translations } = useContext(ServiceContext);

  const { easyReadSite = defaultTranslations } = translations;
  const {
    toStandardSite,
    toEasySite,
    format,
    aIDisclaimer,
    learnMore,
    learnMoreLink,
  } = easyReadSite;

  const id = 'Format';
  const href = isEasyVersion ? fullVersionLink : easyVersionLink;
  if (href == null) return null;

  return (
    <GridItemMedium>
      <div css={styles.outerContainer}>
        <section role="region" data-e2e="easy-read-cta" aria-labelledby={id}>
          <FormatIcon css={styles.icon} />
          <Text as="strong" id={id} hidden>
            {format}
          </Text>
          <CtaLink href={href} text={toStandardSite} />
          <CtaLink href={href} text={toEasySite} selected />
        </section>
        {isEasyVersion && (
          <Text as="small" size="brevier" css={styles.disclaimer}>
            {aIDisclaimer} <InlineLink text={learnMore} to={learnMoreLink} />.
          </Text>
        )}
      </div>
    </GridItemMedium>
  );
};

export default EasyReadCTA;
