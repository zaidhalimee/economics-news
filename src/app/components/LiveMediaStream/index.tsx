/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader, { BumpLoader } from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import styles from './index.styles';

type Props = { mediaCollection: MediaCollection[] | null };

const LiveMediaStream = ({ mediaCollection }: Props) => {
  if (mediaCollection == null || mediaCollection.length === 0) {
    return null;
  }

  const mediaItem = filterForBlockType(mediaCollection, 'liveMedia');

  const {
    model: {
      synopses: { short },
    },
  } = mediaItem;

  // const ManualControls = ({ mediaContainer }: ManualControlProps) => {
  //   const handleClick = () => {
  //     setShowMedia(previousState => !previousState);
  //   };

  //   return (
  //     <>
  //       <div
  //         css={[
  //           styles.liveMediaSpan,
  //           showMedia ? styles.showContent : styles.hideContent,
  //         ]}
  //       >
  //         <Text>{`${title} - ${networkName}`}</Text>
  //         <button
  //           type="button"
  //           onClick={handleClick}
  //           data-testid="close-button"
  //         >
  //           {mediaIcons.close}
  //         </button>
  //       </div>
  //       <button
  //         type="button"
  //         onClick={handleClick}
  //         data-testid="watch-now-button"
  //         css={[
  //           styles.playButton,
  //           showMedia ? styles.hideContent : styles.showContent,
  //         ]}
  //       >
  //         <span css={styles.playIcon}>{mediaIcons.video}</span>
  //         <Text
  //           css={[styles.playButtonText]}
  //           size="doublePica"
  //           fontVariant="sansBold"
  //         >
  //           {watchNow}
  //         </Text>
  //       </button>
  //       {mediaContainer}
  //     </>
  //   );
  // };

  return (
    <div css={styles.liveMediaStreamContainer}>
      <BumpLoader />
      <Text css={styles.mediaDescription}>{short}</Text>
      <div css={styles.mediaLoaderContainer}>
        <MediaLoader blocks={mediaCollection} placeholderOverride={false} />
      </div>
    </div>
  );
};

export default LiveMediaStream;
