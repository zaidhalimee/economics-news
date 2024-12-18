/** @jsx jsx */
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import Text from '#app/components/Text';
import MaskedImage from '#app/components/MaskedImage';
import MediaLoader from '#app/components/MediaLoader';
import { MediaBlock, MediaCollection } from '#app/components/MediaLoader/types';
import React, { useState } from 'react';
import mediaIcons from '#psammead/psammead-assets/src/svgs/mediaIcons';
import LiveLabelHeader from './LiveLabelHeader';
import styles from './styles';

const Header = ({
  showLiveLabel,
  title,
  description,
  imageUrl,
  imageUrlTemplate,
  imageWidth,
  mediaCollections,
}: {
  showLiveLabel: boolean;
  title: string;
  description?: string;
  imageUrl?: string;
  imageUrlTemplate?: string;
  imageWidth?: number;
  mediaCollections?: MediaCollection[] | null;
}) => {
  const isHeaderImage = !!imageUrl && !!imageUrlTemplate && !!imageWidth;

  const Title = (
    <span
      css={isHeaderImage ? styles.titleWithImage : styles.titleWithoutImage}
    >
      {title}
    </span>
  );

  const [showMedia, setShowMedia] = useState(false);

  const handleClick = () => {
    console.log('button clicked');
    setShowMedia(!showMedia);
    console.log(showMedia);
  };

  return (
    <div css={styles.headerContainer}>
      <div css={styles.backgroundContainer}>
        <div css={styles.backgroundColor} />
      </div>
      <div css={styles.contentContainer}>
        {isHeaderImage ? (
          <MaskedImage
            imageUrl={imageUrl}
            imageUrlTemplate={imageUrlTemplate}
            imageWidth={imageWidth}
          />
        ) : null}
        <div
          css={
            isHeaderImage
              ? styles.textContainerWithImage
              : styles.textContainerWithoutImage
          }
        >
          <Heading
            size="trafalgar"
            level={1}
            id="content"
            tabIndex={-1}
            css={styles.heading}
          >
            {showLiveLabel ? (
              <LiveLabelHeader isHeaderImage={isHeaderImage}>
                {Title}
              </LiveLabelHeader>
            ) : (
              Title
            )}
          </Heading>
          {mediaCollections && (
            <div css={styles.headerButtonContainer}>
              <button
                type="button"
                onClick={handleClick}
                css={styles.headerButton}
              >
                <Text as="p" css={styles.headerButtonText}>
                  <span css={styles.headerButtonIcon}>{mediaIcons.video}</span>
                  {showMedia ? 'close' : 'watch live'}
                </Text>
              </button>
            </div>
          )}
          {mediaCollections && (
            <MediaLoader
              blocks={mediaCollections as MediaBlock[]}
              css={showMedia ? styles.showMediaPlayer : styles.hideMediaPlayer}
            />
          )}
          {description && (
            <Text
              as="p"
              css={[
                styles.description,
                showLiveLabel &&
                  !isHeaderImage &&
                  styles.layoutWithLiveLabelNoImage,
              ]}
            >
              {description}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
