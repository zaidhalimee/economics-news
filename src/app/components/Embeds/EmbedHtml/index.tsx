/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PropsWithChildren } from 'react';
import styles from './index.styles';
import { OEmbedProps } from '../types';

const EmbedHtml = ({
  embeddableContent,
}: PropsWithChildren<Pick<OEmbedProps, 'embeddableContent'>>) => {
  if (!embeddableContent) return null;

  return (
    <div
      css={styles.embedDiv}
      suppressHydrationWarning
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: embeddableContent }}
      data-testid="embed"
    />
  );
};

export default EmbedHtml;
