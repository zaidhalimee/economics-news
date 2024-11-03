/** @jsx jsx */
/* @jsxFrag React.Fragment */

import { jsx } from '@emotion/react';
import React from 'react';
import Text from '#app/components/Text';
import LiteButton from '../../LiteButton';
import styles from './index.styles';

function script(this: Element) {
  const parentEl = this.parentElement?.parentElement;
  const templateEl = parentEl?.querySelector('template');

  if (!templateEl) return;

  parentEl?.prepend(templateEl.content.cloneNode(true));

  templateEl.remove();
  this.parentElement?.remove();
}

type Props = {
  src?: string;
  title?: string;
};

const LiteLoader = ({ src, title }: Props) => {
  return (
    <>
      <div css={styles.buttonWrapper}>
        <LiteButton css={styles.button} script={script}>
          <Text fontVariant="sansBold">Load media</Text>
        </LiteButton>
      </div>
      <template>
        <iframe title={title} src={src} css={styles.iframe} />
      </template>
    </>
  );
};

export default LiteLoader;
