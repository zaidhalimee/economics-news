/** @jsx jsx */
import { jsx } from '@emotion/react';
import { PropsWithChildren } from 'react';
import useToggle from '#app/hooks/useToggle';
import styles from './index.styles';

type Props = {
  embeddableContent: string;
};

const EmbedHtml = ({ embeddableContent }: PropsWithChildren<Props>) => {
  const { enabled: electionBannerEnabled }: { enabled: boolean | null } =
    useToggle('electionBanner');

  if (!embeddableContent) return null;

  // TODO: Remove this logic after the US Elections
  const isUSElectionBanner = embeddableContent.includes(
    '2024-us-presidential-election-banner',
  );

  // TODO: Remove this logic after the US Elections
  if (isUSElectionBanner && !electionBannerEnabled) return null;

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
