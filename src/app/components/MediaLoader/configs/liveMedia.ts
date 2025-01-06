import filterForBlockType from '#lib/utilities/blockHandlers';
import moment from 'moment';
import { ConfigBuilderProps, ConfigBuilderReturnProps } from '../types';
import buildPlaceholderConfig from '../utils/buildPlaceholderConfig';

export default ({
  blocks,
  basePlayerConfig,
  translations,
}: ConfigBuilderProps): ConfigBuilderReturnProps => {
  const { model: liveMediaBlock } = filterForBlockType(blocks, 'liveMedia');

  const {
    imageUrlTemplate: holdingImageURL,
    version: video,
    title,
    synopses: { short },
  } = liveMediaBlock;

  const rawDuration = moment.duration(video?.duration).asSeconds();

  const placeholderConfig = buildPlaceholderConfig({
    title,
    duration: rawDuration,
    durationISO8601: video?.duration,
    type: 'video',
    holdingImageURL,
    placeholderImageLocator: holdingImageURL,
    placeholderImageOriginCode: 'pips',
    translations,
  });

  return {
    playerConfig: {
      ...basePlayerConfig,
      autoplay: false,
      statsObject: {
        ...basePlayerConfig.statsObject,
        episodePID: liveMediaBlock.id,
      },
      playlistObject: {
        title,
        holdingImageURL,
        items: [
          {
            versionID: video?.vpid,
            kind: 'programme',
            duration: rawDuration,
            live: video.status === 'LIVE',
          },
        ],
        summary: short,
      },
    },
    mediaType: 'video',
    placeholderConfig,
    showAds: false,
  };
};
