/** @jsx jsx */
import { jsx } from '@emotion/react';
import Heading from '#app/components/Heading';
import Text from '#app/components/Text';
import MaskedImage from '#app/components/MaskedImage';
import { MediaCollection } from '#app/components/MediaLoader/types';
import LiveMediaStream from '#app/components/LiveMediaStream';
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
            <LiveMediaStream
              mediaCollection={[
                {
                  type: 'liveMedia',
                  model: {
                    title: 'Non-Stop Cartoons!',
                    synopses: {
                      short: 'Toon in, kick back and relax to 100% cartoons!',
                    },
                    imageUrlTemplate:
                      'https://ichef.bbci.co.uk/images/ic/$recipe/p0k31t4d.jpg',
                    masterbrand: {
                      networkName: 'CBBC',
                    },
                    version: {
                      vpid: 'p0gh4n67',
                      duration: 'PT24H',
                      status: 'LIVE',
                    },
                  },
                },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
