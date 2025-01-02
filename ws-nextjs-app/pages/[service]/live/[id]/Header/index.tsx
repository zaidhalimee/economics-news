/** @jsx jsx */
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import Text from '#app/components/Text';
import LiveMediaStream from '#app/components/LiveMediaStream';
import MediaCollection from '#app/components/MediaLoader/types';

import MaskedImage from '#app/components/MaskedImage';
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
            <LiveMediaStream mediaCollection={mediaCollections} />
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
