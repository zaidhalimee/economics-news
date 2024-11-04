/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import React, { PropsWithChildren, useContext } from 'react';
import { MediaType } from '#app/models/types/media';
import { mediaIcons } from '#psammead/psammead-assets/src/svgs';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { Translations } from '#app/models/types/translations';
import LiteButton from '../LiteButton';
import styles from './index.styles';

function script(this: Element) {
  const parentEl = this.parentElement;
  const templateEl = parentEl?.querySelector('template');

  if (!templateEl) return;

  parentEl?.prepend(templateEl.content.cloneNode(true));

  templateEl.remove();
  this.remove();
}

type ButtonTextProps = {
  type?: MediaType;
  liteSiteTranslations: Translations['liteSite'];
};

const getButtonText = ({ type, liteSiteTranslations }: ButtonTextProps) => {
  switch (type) {
    case 'audio':
      return liteSiteTranslations?.loadAudio || 'Load Audio';
    case 'video':
      return liteSiteTranslations?.loadVideo || 'Load Video';
    case 'image':
      return liteSiteTranslations?.loadImage || 'Load Image';
    default:
      return liteSiteTranslations?.loadMedia || 'Load Media';
  }
};

type Props = {
  type?: MediaType;
  width?: number;
  height?: number;
};

const LiteMediaLoader = ({
  type,
  width,
  height,
  children,
}: PropsWithChildren<Props>) => {
  const {
    translations: { liteSite: liteSiteTranslations },
  } = useContext(ServiceContext);

  return (
    <>
      <LiteButton
        css={[
          styles.liteMediaButtonOverlay,
          width &&
            height && {
              aspectRatio: `${width}/${height}`,
            },
        ]}
        script={script}
      >
        <Text css={styles.liteButtonText} fontVariant="sansBold">
          <div css={styles.iconWrapper}>
            {mediaIcons?.[type as keyof typeof mediaIcons]}
          </div>
          <div>{getButtonText({ type, liteSiteTranslations })}</div>
        </Text>
        <Text
          as="div"
          css={styles.liteInfoText}
          fontVariant="sansRegularItalic"
          size="brevier"
        >
          Data usage may be high when loading media
        </Text>
      </LiteButton>
      <template>{children}</template>
    </>
  );
};

export default LiteMediaLoader;
