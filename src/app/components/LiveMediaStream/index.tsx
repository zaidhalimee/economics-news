/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { jsx } from '@emotion/react';
import React, { FC, useContext, useEffect, useState } from 'react';
import Text from '#app/components/Text';
import { MediaCollection } from '#app/components/MediaLoader/types';
import MediaLoader, {
  BumpLoader,
  ManualControlProps,
} from '#app/components/MediaLoader';
import filterForBlockType from '#app/lib/utilities/blockHandlers';
import { ServiceContext } from '#app/contexts/ServiceContext';
import mediaIcons from '#psammead/psammead-assets/src/svgs/mediaIcons';
import styles from './index.styles';

type Props = { mediaCollection: MediaCollection[] | null };
const DEFAULT_WATCH__NOW = 'Watch Now';

const LiveMediaStream = ({ mediaCollection }: Props) => {
  const [showMedia, setShowMedia] = useState(false);
  const { translations } = useContext(ServiceContext);

  if (mediaCollection == null || mediaCollection.length === 0) {
    return null;
  }

  const {
    media: { watchNow = DEFAULT_WATCH__NOW },
  } = translations;

  const mediaItem = filterForBlockType(mediaCollection, 'liveMedia');

  const {
    model: {
      title,
      masterbrand: { networkName },
      synopses: { short },
    },
  } = mediaItem;

  const ManualControls = ({
    mediaControls,
    mediaContainer,
  }: ManualControlProps) => {
    const handleClick = () => {
      setShowMedia(previousState => !previousState);
    };

    useEffect(() => {
      if (showMedia) {
        mediaControls?.play();
      } else {
        mediaControls?.pause();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mediaControls, showMedia]);

    return (
      <>
        <div css={styles.liveMediaSpan}>
          <Text>{`${title} - ${networkName}`}</Text>
          <button
            type="button"
            onClick={handleClick}
            data-testid="close-button"
          >
            {mediaIcons.close}
          </button>
        </div>
        <button
          type="button"
          onClick={handleClick}
          data-testid="watch-now-button"
          css={[
            styles.playButton,
            showMedia ? styles.hideContent : styles.showContent,
          ]}
        >
          <span css={styles.playIcon}>{mediaIcons.video}</span>
          <Text
            css={[styles.playButtonText]}
            size="doublePica"
            fontVariant="sansBold"
          >
            {watchNow}
          </Text>
        </button>
        <div css={showMedia ? styles.showContent : styles.hideContent}>
          {mediaContainer}
        </div>
      </>
    );
  };

  return (
    <div css={styles.liveMediaStreamContainer}>
      <BumpLoader />
      <Text css={styles.mediaDescription}>{short}</Text>
      <div css={styles.mediaLoaderContainer}>
        <MediaLoader
          blocks={mediaCollection}
          placeholderOverride={false}
          ManualControls={ManualControls as FC}
        />
      </div>
    </div>
  );
};

export default LiveMediaStream;
