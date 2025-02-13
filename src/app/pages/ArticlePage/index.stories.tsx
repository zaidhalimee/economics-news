/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import ThemeProvider from '#app/components/ThemeProvider';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import {
  ServiceContext,
  ServiceContextProvider,
} from '#app/contexts/ServiceContext';
import { RequestContextProvider } from '#app/contexts/RequestContext';
import { ARTICLE_PAGE } from '#app/routes/utils/pageTypes';
import articleData from '#data/news/articles/c0g992jmmkko.json';
import articleDataBurmese from '#data/burmese/articles/cn0exdy1jzvo.json';
import articleDataWithRelatedContent from '#data/afrique/articles/c7yn6nznljdo.json';
import articleDataWithSingleRelatedContent from '#data/afrique/articles/cz216x22106o.json';
import articleDataWithPodcastPromo from '#data/russian/articles/c61q94n3rm3o.json';
import articleDataWithTranscript from '#data/mundo/articles/cle16n19nd9o.json';
import articleNewsWithPodcastPromo from '#data/news/articles/crkxdvxzwxk2.json';
import articleDataWithElectionTag from '#data/mundo/articles/c206j730722o.json';
import withPageWrapper from '#containers/PageHandlers/withPageWrapper';
import withOptimizelyProvider from '#containers/PageHandlers/withOptimizelyProvider';
import { service as newsConfig } from '#app/lib/config/services/news';
import latin from '#app/components/ThemeProvider/fontScripts/latin';
import { Services } from '#app/models/types/global';
import { StoryArgs, StoryProps } from '#app/models/types/storybook';
import { Stages } from '#app/hooks/useExperimentHook';
import ArticlePageComponent from './ArticlePage';

const PageWithOptimizely = withOptimizelyProvider(ArticlePageComponent);
const Page = withPageWrapper(PageWithOptimizely);

const serviceContextMock = {
  ...newsConfig.default,
  service: 'news',
  script: latin,
  dir: 'ltr',
  podcastPromo: {
    title: 'Podcast',
    brandTitle: 'Sounds of the 90s with Fearne Cotton',
    brandDescription:
      'Join Fearne for a nostalgia drenched celebration of the best music and pop culture from the 90s.',
    image: {
      src: 'https://ichef.bbci.co.uk/images/ic/400x400/p098vtc3.jpg',
      alt: 'Picture of Spice Girls',
    },
    linkLabel: {
      href: 'https://www.bbc.co.uk/sounds/brand/m000gkf5',
      text: 'Episodes',
    },
    skipLink: {
      text: 'Skip podcast promotion and continue reading',
      endTextVisuallyHidden: 'End of podcast promotion',
    },
  },
};

type Props = {
  data: {
    data: {
      article: any;
      secondaryData: any;
    };
  };
  service?: Services;
  podcastEnabled?: boolean;
  electionBanner?: boolean;
  experimentStage?: Stages;
};

const ComponentWithContext = ({
  data: { data },
  service = 'news',
  podcastEnabled = false,
  electionBanner = false,
}: Props) => {
  return (
    <ToggleContextProvider
      toggles={{
        eventTracking: { enabled: true },
        mostRead: { enabled: true },
        frostedPromo: { enabled: true, value: 1 },
        podcastPromo: { enabled: podcastEnabled },
        electionBanner: { enabled: electionBanner },
      }}
    >
      {/* Service set to news to enable most read. Article data is in english */}
      <ServiceContextProvider service={service}>
        <RequestContextProvider
          isAmp={false}
          isApp={false}
          pageType={ARTICLE_PAGE}
          service={service}
          pathname="/news/articles/c000000000o"
          id="c000000000o"
          isUK
        >
          <ThemeProvider service={service}>
            <Page
              pageData={{
                ...data.article,
                secondaryColumn: data.secondaryData,
                mostRead: data.secondaryData.mostRead,
              }}
            />
          </ThemeProvider>
        </RequestContextProvider>
      </ServiceContextProvider>
    </ToggleContextProvider>
  );
};

const ComponentWithServiceContext = ({
  data: { data },
  service = 'news',
  podcastEnabled = false,
  electionBanner = false,
  experimentStage,
}: Props) => {
  const memoisedServiceContext = useMemo(
    () => ({ ...serviceContextMock, service }),
    [service],
  );

  return (
    <ToggleContextProvider
      toggles={{
        eventTracking: { enabled: true },
        mostRead: { enabled: true },
        frostedPromo: { enabled: true, value: 1 },
        podcastPromo: { enabled: podcastEnabled },
        electionBanner: { enabled: electionBanner },
      }}
    >
      {/* Service set to news to enable most read. Article data is in english */}
      <ServiceContext.Provider
        // @ts-expect-error - passing partial service context
        value={memoisedServiceContext}
      >
        <ThemeProvider service={service}>
          <Page
            pageData={{
              ...data.article,
              secondaryColumn: data.secondaryData,
              mostRead: data.secondaryData.mostRead,
            }}
            experimentStage={experimentStage}
          />
        </ThemeProvider>
      </ServiceContext.Provider>
    </ToggleContextProvider>
  );
};

export default {
  Component: ComponentWithContext,
  title: 'Pages/Article Page',
  parameters: { layout: 'fullscreen' },
};

export const ArticlePage = (_: StoryArgs, { service }: StoryProps) => (
  <ComponentWithContext data={articleData} service={service} />
);
export const Burmese = () => (
  <ComponentWithServiceContext data={articleDataBurmese} service="burmese" />
);

export const ArticlePageWithRelatedContent = (
  _: StoryArgs,
  { service }: StoryProps,
) => (
  <ComponentWithContext
    data={articleDataWithRelatedContent}
    service={service}
  />
);

export const ArticlePageWithSingleRelatedContent = (
  _: StoryArgs,
  { service }: StoryProps,
) => (
  <ComponentWithContext
    data={articleDataWithSingleRelatedContent}
    service={service}
  />
);

export const ArticlePageWithPodcastPromo = () => (
  <ComponentWithContext
    data={articleDataWithPodcastPromo}
    service="russian"
    podcastEnabled
  />
);

export const ArticlePageWithPodcastPromoRightToLeft = () => (
  <ComponentWithContext
    data={articleDataWithPodcastPromo}
    service="arabic"
    podcastEnabled
  />
);

export const ArticlePageWithPodcastNews = () => (
  <ComponentWithServiceContext
    data={articleNewsWithPodcastPromo}
    service="news"
    podcastEnabled
  />
);

export const ArticlePageWithTranscript = ({ experimentStage }: Props) => (
  <ComponentWithServiceContext
    data={articleDataWithTranscript}
    experimentStage={experimentStage}
    service="mundo"
  />
);

export const ArticlePageWithElectionBanner = {
  render: () => (
    <ComponentWithServiceContext
      data={articleDataWithElectionTag}
      service="mundo"
      electionBanner
    />
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};
