import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import { RADIO_MISSING_FIELD, PODCAST_MISSING_FIELD } from '#lib/logger.const';
import { InitialDataProps } from '#app/models/types/initialData';
import fetchDataFromBFF from '#app/routes/utils/fetchDataFromBFF';
import overrideRendererOnTest from '../../utils/overrideRendererOnTest';
import getErrorStatusCode from '../../utils/fetchPageData/utils/getErrorStatusCode';
import { getPodcastExternalLinks } from '../tempData/podcastExternalLinks';

const getScheduleToggle = path(['onDemandRadioSchedule', 'enabled']);

const getConfig = (pathname: string) => {
  const detailPageType = pathname.includes('podcast')
    ? 'Podcast'
    : 'On Demand Radio';
  const isPodcast = detailPageType === 'Podcast';
  const missingFieldCode = isPodcast
    ? PODCAST_MISSING_FIELD
    : RADIO_MISSING_FIELD;
  const DEFAULT_TOGGLE_VALUE = { enabled: false, value: isPodcast ? 8 : 4 };
  const recentEpisodesKey = isPodcast
    ? 'recentPodcastEpisodes'
    : 'recentAudioEpisodes';
  const getRecentEpisodesToggle = pathOr(DEFAULT_TOGGLE_VALUE, [
    recentEpisodesKey,
  ]);

  return {
    isPodcast,
    missingFieldCode,
    detailPageType,
    getRecentEpisodesToggle,
  };
};

export default async ({
  path: pathname,
  pageType,
  service,
  toggles,
  isAmp,
  getAgent,
  variant,
}: InitialDataProps) => {
  try {
    const { isPodcast, getRecentEpisodesToggle } = getConfig(pathname);

    const radioPodcastDataPath = overrideRendererOnTest(pathname);

    const { json, status } = await fetchDataFromBFF({
      pathname: radioPodcastDataPath,
      pageType,
      service,
      isAmp,
      getAgent,
    });

    const { externalLinkVersionId, brandId, recentEpisodes } = json.data;

    const scheduleIsEnabled = getScheduleToggle(toggles);

    const recentEpisodesToggle = getRecentEpisodesToggle(toggles);

    const { enabled: showRecentEpisodes, value: recentEpisodesLimit } =
      recentEpisodesToggle;

    const externalLinks = isPodcast
      ? await getPodcastExternalLinks(
          service,
          brandId,
          variant,
          externalLinkVersionId,
        )
      : [];
    return {
      status,
      pageData: {
        ...json.data,
        externalLinks,
        ...(!scheduleIsEnabled && { radioScheduleData: null }),
        ...(showRecentEpisodes
          ? { recentEpisodes: recentEpisodes.slice(0, recentEpisodesLimit) }
          : { recentEpisodes: null }),
      },
    };
  } catch ({
    message,
    status = getErrorStatusCode(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any | { message: string; status: number }) {
    return { error: message, status };
  }
};
