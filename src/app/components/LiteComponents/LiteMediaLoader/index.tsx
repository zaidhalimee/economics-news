/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import React, { PropsWithChildren } from 'react';
import { MediaType } from '#app/models/types/media';
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

const getButtonText = (type?: MediaType | 'image') => {
  switch (type) {
    case 'audio':
      return 'Load Audio';
    case 'video':
      return 'Load Video';
    case 'image':
      return 'Load Image';
    default:
      return 'Load Media';
  }
};

type Props = {
  type?: MediaType | 'image';
};
const LiteMediaLoader = ({ type, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <LiteButton css={styles.liteMediaButtonOverlay} script={script}>
        <Text css={styles.liteButtonText} fontVariant="sansBold">
          {getButtonText(type)}
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
