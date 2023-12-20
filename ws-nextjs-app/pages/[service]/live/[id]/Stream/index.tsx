/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import Paragraph from '#app/components/Paragraph';
import { ServiceContext } from '#contexts/ServiceContext';
import { StreamResponse } from '../Post/types';
import Post from '../Post';
import styles from './styles';
import useScrollToLinkable from './hooks/use-scroll-to-linkable';
import MyHook from './hooks/myhook';

const Stream = ({
  streamContent,
  contributors,
  post,
}: {
  streamContent: StreamResponse | null;
  contributors: string | null;
  post: string | null;
}) => {
  const {
    translations: {
      liveExperiencePage: { liveCoverage = 'Live Coverage' },
    },
  } = useContext(ServiceContext);

  // const isReducedMotion = false;

  console.log("I'm the stream post ID", post);

  // useScrollToLinkable({ post, isReducedMotion });

  MyHook(post);

  if (!streamContent) return null;

  const { results: streamResults } = streamContent?.data;

  const hasNoPost = streamResults.length === 0;
  const hasSinglePost = streamResults.length === 1;

  if (hasNoPost) return null;

  return (
    <div>
      <Heading
        css={[
          styles.heading,
          !contributors && styles.headingNoContributorsPadding,
        ]}
        level={2}
      >
        {liveCoverage}
      </Heading>
      {contributors && (
        <Paragraph data-testid="live-contributors" css={styles.subHeading}>
          {contributors}
        </Paragraph>
      )}

      {hasSinglePost ? (
        <Post post={streamResults[0]} />
      ) : (
        <ol role="list" css={styles.orderedList}>
          {streamResults.map(postItem => (
            <li key={postItem.urn} css={styles.listItem}>
              <Post post={postItem} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Stream;
