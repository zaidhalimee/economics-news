/** @jsx jsx */
/* eslint-disable jsx-a11y/aria-role */
import { jsx } from '@emotion/react';
import useViewTracker from '#app/hooks/useViewTracker';
import styles from './index.styles';
import Text from '../Text';
import TranscriptTimestamp from './TranscriptTimestamp';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { RightArrow as ArrowSvg } from '../icons';
import { TranscriptBlock, TranscriptItem } from './types';

// TO DO - move this to BFF
const removeHoursMilliseconds = (timestamp: string) => timestamp.slice(3, -4);

const TranscriptListItem = ({ id, start, content }: TranscriptItem) => (
  <li key={id} css={styles.listItem}>
    <Text role="text" css={styles.transcriptText} size="bodyCopy">
      <TranscriptTimestamp timestamp={removeHoursMilliseconds(start)} />
      <VisuallyHiddenText> </VisuallyHiddenText>
      <span css={styles.itemText}>{content}</span>
    </Text>
  </li>
);

const Transcript = ({
  transcript,
  title,
}: {
  transcript: TranscriptBlock;
  title?: string;
}) => {
  const viewRef = useViewTracker({ componentName: 'Transcript' });
  const transcriptItems = transcript?.model?.blocks;
  if (!transcriptItems) {
    return null;
  }

  const formattedTitle = title ? `, ${title}` : '';

  return (
    <details css={styles.details}>
      <summary css={styles.summary}>
        <ArrowSvg />
        <span role="text">
          {/* TO DO - add translations */}
          <Text size="pica" fontVariant="sansBold" css={styles.summaryTitle}>
            Read transcript
          </Text>
          {title && <VisuallyHiddenText>{formattedTitle}</VisuallyHiddenText>}
        </span>
      </summary>
      <ul css={styles.ul} role="list" ref={viewRef}>
        {/*  eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {transcriptItems.map((item, _index) => (
          <TranscriptListItem
            key={item.id}
            id={item.id}
            start={item.start}
            content={item.content}
          />
        ))}
      </ul>
      <Text size="brevier" css={styles.disclaimer} as="small">
        This transcript was reviewed by a journalist after AI generation.
      </Text>
    </details>
  );
};

export default Transcript;
