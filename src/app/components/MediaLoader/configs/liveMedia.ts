import filterForBlockType from '#lib/utilities/blockHandlers';
import moment from 'moment';
import { ConfigBuilderProps, ConfigBuilderReturnProps } from '../types';
import buildPlaceholderConfig from '../utils/buildPlaceholderConfig';
import WARNING_LEVELS from './warningLevels';

type WarningItem = {
  // eslint-disable-next-line camelcase
  warning_code: string;
  // eslint-disable-next-line camelcase
  short_description: string;
};

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

  const { warnings } = video;

  let placeholderConfig = null;

  if (warnings) {
    const { warning } = warnings;
    const highestWarning = warning.reduce(
      (maxWarning: WarningItem, currWarning: WarningItem) => {
        const maxWarningCode = WARNING_LEVELS[maxWarning.warning_code];
        const currWarningCode = WARNING_LEVELS[currWarning.warning_code];
        if (currWarningCode > maxWarningCode) {
          return currWarning;
        }
        return maxWarning;
      },
    );

    if (WARNING_LEVELS[highestWarning.warning_code] >= WARNING_LEVELS.L1) {
      placeholderConfig = buildPlaceholderConfig({
        title,
        duration: rawDuration,
        durationISO8601: video?.duration,
        type: 'video',
        holdingImageURL,
        placeholderImageLocator: holdingImageURL,
        placeholderImageOriginCode: 'pips',
        translations,
      });
    }
  }

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
    ...(placeholderConfig && { placeholderConfig }),
    showAds: false,
  };
};
