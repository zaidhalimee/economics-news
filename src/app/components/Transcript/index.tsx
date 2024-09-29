/** @jsx jsx */
/* eslint-disable jsx-a11y/aria-role */
import { jsx } from '@emotion/react';
import styles from './index.styles';
import Text from '../Text';
import TranscriptTimestamp from './TranscriptTimestamp';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { RightArrow as ArrowSvg } from '../icons';
import { TranscriptBlock, TranscriptItem } from './types';

// TO DO - move this to BFF
const removeHoursMilliseconds = (timestamp: string) => timestamp.slice(3, -4);

const TranscriptListItem = ({ id, start, content }: TranscriptItem) => (
  // aria-labelledby fix for the a11y nested span's bug experienced in TalkBack, refer to the following issue: https://github.com/bbc/simorgh/issues/9652
  // But this is introduces bug on Voiceover/Mac
  <li key={id} css={styles.listItem}>
    <span aria-labelledby={`a11y-${id}`}>
      {/* A11Y TO DO -  see if we can avoid using role=text but still having content announced in one swipe on AT */}
      <Text role="text" css={styles.transcriptText} id={`a11y-${id}`}>
        <TranscriptTimestamp timestamp={removeHoursMilliseconds(start)} />
        {/* A11Y TO DO -  check this doesn't introduce extra swipe on AT */}
        <VisuallyHiddenText> </VisuallyHiddenText>
        <span css={styles.itemText}>{content}</span>
      </Text>
    </span>
  </li>
);

const Transcript = ({
  transcript,
  title,
  hideDisclaimer = true,
}: {
  transcript: TranscriptBlock;
  title?: string;
  hideDisclaimer?: boolean;
}) => {
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
          <Text size="pica" fontVariant="sansBold" css={styles.summaryTitle}>
            Read transcripts
          </Text>
          {title && <VisuallyHiddenText>{formattedTitle}</VisuallyHiddenText>}
        </span>
      </summary>
      <ul css={styles.ul} role="list">
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
      {!hideDisclaimer && (
        <Text size="brevier" css={styles.disclaimer} as="small">
          This transcript was auto generated.
        </Text>
      )}
    </details>
  );
};

export default Transcript;
