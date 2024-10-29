/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PropsWithChildren } from 'react';
import styles from './index.styles';

type Props = {
  embeddableContent: string;
};

const EmbedHtml = ({ embeddableContent }: PropsWithChildren<Props>) => {
  if (!embeddableContent) return null;

  // TODO: Remove this logic after the US Elections
  const isUSElectionBanner = embeddableContent.includes(
    '2024-us-presidential-election-banner',
  );

  return (
    <div
      css={[
        styles.embedDiv,
        isUSElectionBanner && styles.electionBannerOverrides,
      ]}
      suppressHydrationWarning
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: embeddableContent }}
      data-testid="embed"
    />
  );
};

export default EmbedHtml;
