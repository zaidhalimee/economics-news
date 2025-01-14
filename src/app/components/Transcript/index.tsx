/** @jsx jsx */
/* eslint-disable jsx-a11y/aria-role */
import { jsx } from '@emotion/react';
import styles from './index.styles';
import Text from '../Text';
import TranscriptTimestamp from './TranscriptTimestamp';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { RightArrow as ArrowSvg } from '../icons';
import { TranscriptBlock, TranscriptItem } from './types';
import ATIAnalyticsTranscript from '../ATIAnalytics/myAnalytics';

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
  const transcriptItems = transcript?.model?.blocks;
  if (!transcriptItems) {
    return null;
  }

  const formattedTitle = title ? `, ${title}` : '';

  const myATIData = {
    categoryName: null,
    contentId: 'urn:bbc:optimo:asset:ce42wzqr2mko',
    contentType: 'article',
    language: 'es',
    ldpThingIds: null,
    ldpThingLabels: null,
    nationsProducer: null,
    pageIdentifier: 'mundo.articles.ce42wzqr2mko.page',
    pageTitle:
      'Este artículo de prueba ha sido creado para que podamos ejecutar pruebas',
    timePublished: '2019-10-04T10:58:46.977Z',
    timeUpdated: '2019-10-04T10:58:46.977Z',
  };

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
      {/* dont think this works */}
      <span css={styles.isThisTerrible} id="isThisTerrible">
        <ATIAnalyticsTranscript />
      </span>
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
      <Text size="brevier" css={styles.disclaimer} as="small">
        This transcript was reviewed by a journalist after AI generation.
      </Text>
    </details>
  );
};

export default Transcript;
