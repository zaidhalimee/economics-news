import buildIChefURL from '#lib/utilities/ichefURL';
import filterForBlockType from '#lib/utilities/blockHandlers';
import {
  AresMediaBlock,
  BasePlayerConfig,
  MediaBlock,
  PlayerConfig,
} from '../types';

const DEFAULT_WIDTH = 512;

type Props = {
  blocks: MediaBlock[];
  basePlayerConfig: BasePlayerConfig;
};

type ReturnProps = {
  mediaType: string;
  playerConfig: PlayerConfig;
} | null;

export default ({ blocks, basePlayerConfig }: Props): ReturnProps => {
  const aresMediaBlock: AresMediaBlock = filterForBlockType(
    blocks,
    'aresMedia',
  );

  if (!aresMediaBlock) return null;

  const { webcastVersions = [] } =
    aresMediaBlock?.model?.blocks?.[0]?.model ?? [];

  const hasWebcastItems = webcastVersions.length > 0;

  const versionParameter = hasWebcastItems ? 'webcastVersions' : 'versions';

  const { originCode, locator } =
    aresMediaBlock?.model?.blocks?.[1]?.model?.blocks?.[0]?.model ?? {};

  const versionId =
    aresMediaBlock?.model?.blocks?.[0]?.model?.[versionParameter]?.[0]
      ?.versionId;

  const format = aresMediaBlock?.model?.blocks?.[0]?.model?.format;

  const rawDuration =
    aresMediaBlock?.model?.blocks?.[0]?.model?.[versionParameter]?.[0]
      ?.duration;

  const placeholderSrc = buildIChefURL({
    originCode,
    locator,
    resolution: DEFAULT_WIDTH,
  });

  const title = aresMediaBlock?.model?.blocks?.[0]?.model?.title;
  const kind =
    aresMediaBlock?.model?.blocks?.[0]?.model?.smpKind || 'programme';
  const guidanceMessage =
    aresMediaBlock?.model?.blocks?.[0]?.model?.[versionParameter]?.[0]?.warnings
      ?.short;

  return {
    mediaType: format || 'video',
    playerConfig: {
      ...basePlayerConfig,
      playlistObject: {
        title,
        holdingImageURL: placeholderSrc,
        items: [
          {
            versionID: versionId,
            kind,
            duration: rawDuration,
          },
        ],
        ...(guidanceMessage && { guidance: guidanceMessage }),
      },
    },
  };
};
