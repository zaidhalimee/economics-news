/** @jsx jsx */
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import Text from '#app/components/Text';
import MaskedImage from '#app/components/MaskedImage';
import MediaLoader, { BumpLoader } from '#app/components/MediaLoader';
import { MediaBlock, MediaCollection } from '#app/components/MediaLoader/types';
import { useContext, useState } from 'react';
import mediaIcons from '#psammead/psammead-assets/src/svgs/mediaIcons';
import { ServiceContext } from '#app/contexts/ServiceContext';
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
  const { translations } = useContext(ServiceContext);
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
    setShowMedia(!showMedia);
  };

  return (
    <div css={styles.headerContainer}>
      {mediaCollections && <BumpLoader />}
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
          {mediaCollections && (
            <div css={styles.headerButtonContainer}>
              <button
                type="button"
                onClick={handleClick}
                css={showMedia ? styles.closeButton : styles.mediaButton}
              >
                <Text as="p" css={styles.headerButtonText}>
                  {!showMedia && (
                    <span css={styles.headerButtonIcon}>
                      {mediaIcons.video}
                    </span>
                  )}
                  {showMedia
                    ? 'X'
                    : `${translations.media.watch} ${mediaCollections[0].model.version.status === 'LIVE' ? translations.media.liveLabel : ''}`}
                </Text>
              </button>
              {showMedia && (
                <Text as="p" css={styles.mediaInfo}>
                  {mediaCollections[0].model.title}
                  {' - '}
                  {mediaCollections[0].model.masterbrand.networkName}
                </Text>
              )}
            </div>
          )}
          {mediaCollections && showMedia && (
            <MediaLoader blocks={mediaCollections as MediaBlock[]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
