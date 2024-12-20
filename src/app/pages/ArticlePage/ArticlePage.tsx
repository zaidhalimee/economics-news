/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useContext } from 'react';
import { jsx, useTheme } from '@emotion/react';
import useToggle from '#hooks/useToggle';
import { singleTextBlock } from '#app/models/blocks';
import ArticleMetadata from '#containers/ArticleMetadata';
import { RequestContext } from '#contexts/RequestContext';
import headings from '#containers/Headings';
import visuallyHiddenHeadline from '#containers/VisuallyHiddenHeadline';
import gist from '#containers/Gist';
import text from '#containers/Text';
import Blocks from '#containers/Blocks';
import Timestamp from '#containers/ArticleTimestamp';
import ComscoreAnalytics from '#containers/ComscoreAnalytics';
import SocialEmbedContainer from '#containers/SocialEmbed';
import MediaLoader from '#app/components/MediaLoader';
import {
  ARTICLE_PAGE,
  PHOTO_GALLERY_PAGE,
  STORY_PAGE,
} from '#app/routes/utils/pageTypes';

import {
  getArticleId,
  getHeadline,
  getSummary,
  getFirstPublished,
  getLastPublished,
  getAboutTags,
  getArticleSection,
  getMentions,
  getLang,
} from '#lib/utilities/parseAssetData';
import filterForBlockType from '#lib/utilities/blockHandlers';
import RelatedTopics from '#containers/RelatedTopics';
import NielsenAnalytics from '#containers/NielsenAnalytics';
import CpsRecommendations from '#containers/CpsRecommendations';
import InlinePodcastPromo from '#containers/PodcastPromo/Inline';
import { Article, OptimoBylineBlock } from '#app/models/types/optimo';
import ScrollablePromo from '#components/ScrollablePromo';
import JumpTo, { JumpToProps } from '#app/components/JumpTo';
import useOptimizelyVariation from '#app/hooks/useOptimizelyVariation';
import OptimizelyArticleCompleteTracking from '#app/legacy/containers/OptimizelyArticleCompleteTracking';
import OptimizelyPageViewTracking from '#app/legacy/containers/OptimizelyPageViewTracking';
import { Stages } from '#app/hooks/useExperimentHook';
import ElectionBanner from './ElectionBanner';
import ImageWithCaption from '../../components/ImageWithCaption';
import AdContainer from '../../components/Ad';
import EmbedImages from '../../components/Embeds/EmbedImages';
import EmbedHtml from '../../components/Embeds/EmbedHtml';
import MostRead from '../../components/MostRead';
import ATIAnalytics from '../../components/ATIAnalytics';
import ChartbeatAnalytics from '../../components/ChartbeatAnalytics';
import LinkedData from '../../components/LinkedData';
import Byline from '../../components/Byline';
import OEmbedLoader from '../../components/Embeds/OEmbed';
import UnsupportedEmbed from '../../components/Embeds/UnsupportedEmbed';
import Uploader from '../../components/Embeds/Uploader';
import {
  bylineExtractor,
  categoryName,
  getAuthorTwitterHandle,
} from '../../components/Byline/utilities';
import { ServiceContext } from '../../contexts/ServiceContext';
import RelatedContentSection from '../../components/RelatedContentSection';
import Disclaimer from '../../components/Disclaimer';
import SecondaryColumn from './SecondaryColumn';
import styles from './ArticlePage.styles';
import {
  ComponentToRenderProps,
  MediaComponentToRenderProps,
  TimeStampProps,
} from './types';
import AmpExperiment from '../../components/AmpExperiment';
import {
  experimentName,
  experimentTopStoriesConfig,
  getExperimentAnalyticsConfig,
  getExperimentTopStories,
  ExperimentTopStories,
} from './experimentTopStories/helpers';

const ArticlePage = ({ pageData }: { pageData: Article }) => {
  const { isApp, pageType, service, isAmp, env } = useContext(RequestContext);

  const {
    articleAuthor,
    isTrustProjectParticipant,
    showRelatedTopics,
    brandName,
    atiAnalyticsProducerId,
  } = useContext(ServiceContext);

  const { enabled: preloadLeadImageToggle } = useToggle('preloadLeadImage');

  const {
    palette: { GREY_2, WHITE },
  } = useTheme();

  const allowAdvertising = pageData?.metadata?.allowAdvertising ?? false;
  const adcampaign = pageData?.metadata?.adCampaignKeyword;
  const isTransliterated =
    ['serbian', 'zhongwen', 'uzbek'].includes(service) &&
    pageType === ARTICLE_PAGE;

  const { enabled: podcastPromoEnabled } = useToggle('podcastPromo');
  const headline = getHeadline(pageData) ?? '';
  const description = getSummary(pageData) || getHeadline(pageData);
  const firstPublished = getFirstPublished(pageData);
  const lastPublished = getLastPublished(pageData);
  const aboutTags = getAboutTags(pageData);
  const topics = pageData?.metadata?.topics ?? [];
  const blocks = pageData?.content?.model?.blocks ?? [];
  const startsWithHeading = blocks?.[0]?.type === 'headline' || false;
  const bylineBlock = blocks.find(
    block => block.type === 'byline',
  ) as OptimoBylineBlock;

  const bylineContribBlocks = bylineBlock?.model?.blocks || [];

  const bylineLinkedData = bylineExtractor(bylineContribBlocks);

  const hasByline = !!bylineLinkedData;

  const articleAuthorTwitterHandle = hasByline
    ? getAuthorTwitterHandle(blocks)
    : null;

  const taggings = pageData?.metadata?.passport?.taggings ?? [];
  const formats = pageData?.metadata?.passport?.predicates?.formats ?? [];

  const recommendationsData = pageData?.recommendations ?? [];

  const isPGL = pageData?.metadata?.type === PHOTO_GALLERY_PAGE;
  const isSTY = pageData?.metadata?.type === STORY_PAGE;
  const isCPS = isPGL || isSTY;
  const isTC2Asset = pageData?.metadata?.analyticsLabels?.contentId
    ?.split(':')
    ?.includes('topcat');

  const {
    metadata: { atiAnalytics },
    mostRead: mostReadInitialData,
  } = pageData;

  const jumpToVariation = useOptimizelyVariation(
    'jump_to',
  ) as unknown as string;

  const hasJumpToBlockForExperiment = blocks.some(
    block => block.type === 'jumpTo',
  );

  const enableOptimizelyEventTracking = Boolean(
    jumpToVariation && hasJumpToBlockForExperiment,
  );

  const topStoriesContent = pageData?.secondaryColumn?.topStories;
  const { shouldEnableExperimentTopStories, transformedBlocks } =
    getExperimentTopStories({
      blocks,
      topStoriesContent,
      isAmp,
      service,
    });

  const showRelatedContent = blocks.some(
    block => block.type === 'relatedContent',
  );

  const atiData = {
    ...atiAnalytics,
    ...(isCPS && { pageTitle: `${atiAnalytics.pageTitle} - ${brandName}` }),
    ...(shouldEnableExperimentTopStories && {
      ampExperimentName: `${experimentName}`,
    }),
  };

  const componentsToRender = {
    visuallyHiddenHeadline,
    headline: headings,
    subheadline: headings,
    audio: MediaLoader,
    // Temporary - For rendering storybook asset. To replace with hook use.
    video: MediaLoader,
    text,
    image: (props: ComponentToRenderProps) => (
      <ImageWithCaption
        {...props}
        sizes="(min-width: 1008px) 760px, 100vw"
        shouldPreload={preloadLeadImageToggle}
      />
    ),
    timestamp: (props: ComponentToRenderProps & TimeStampProps) =>
      hasByline ? (
        <Byline blocks={bylineContribBlocks}>
          <Timestamp
            firstPublished={new Date(firstPublished).getTime()}
            lastPublished={new Date(lastPublished).getTime()}
            popOut={false}
          />
        </Byline>
      ) : (
        <Timestamp {...props} popOut={false} />
      ),
    social: SocialEmbedContainer,
    embed: UnsupportedEmbed,
    embedHtml: EmbedHtml,
    oEmbed: OEmbedLoader,
    embedImages: EmbedImages,
    embedUploader: Uploader,
    group: gist,
    links: (props: ComponentToRenderProps) => <ScrollablePromo {...props} />,
    mpu: (props: ComponentToRenderProps) =>
      allowAdvertising ? <AdContainer {...props} slotType="mpu" /> : null,
    wsoj: (props: ComponentToRenderProps) => (
      <CpsRecommendations {...props} items={recommendationsData} />
    ),
    disclaimer: (props: ComponentToRenderProps) => (
      <Disclaimer {...props} increasePaddingOnDesktop={false} />
    ),
    podcastPromo: () => (podcastPromoEnabled ? <InlinePodcastPromo /> : null),
    experimentTopStoriesQuarter: () =>
      topStoriesContent ? (
        <ExperimentTopStories
          topStoriesContent={topStoriesContent}
          variantName="Quarter"
        />
      ) : null,
    experimentTopStoriesHalf: () =>
      topStoriesContent ? (
        <ExperimentTopStories
          topStoriesContent={topStoriesContent}
          variantName="Half"
        />
      ) : null,
    experimentTopStoriesThreeQuarters: () =>
      topStoriesContent ? (
        <ExperimentTopStories
          topStoriesContent={topStoriesContent}
          variantName="ThreeQuarters"
        />
      ) : null,

    jumpTo: (props: ComponentToRenderProps & JumpToProps) =>
      jumpToVariation === 'on' ? (
        <JumpTo {...props} showRelatedContentLink={showRelatedContent} />
      ) : null,
  };

  const visuallyHiddenBlock = {
    id: null,
    model: { blocks: [singleTextBlock(headline)] },
    type: 'visuallyHiddenHeadline',
  };

  const articleBlocks = startsWithHeading
    ? transformedBlocks
    : [visuallyHiddenBlock, ...transformedBlocks];

  const promoImageBlocks =
    pageData?.promo?.images?.defaultPromoImage?.blocks ?? [];

  const promoImageAltTextBlock = filterForBlockType(
    promoImageBlocks,
    'altText',
  );

  const promoImageRawBlock = filterForBlockType(promoImageBlocks, 'rawImage');
  const promoImageAltText =
    promoImageAltTextBlock?.model?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  const promoImage = promoImageRawBlock?.model?.locator;

  const showTopics = Boolean(
    showRelatedTopics && topics.length > 0 && !isTransliterated,
  );

  return (
    <div css={styles.pageWrapper}>
      {shouldEnableExperimentTopStories && (
        <AmpExperiment
          experimentConfig={experimentTopStoriesConfig}
          analyticsConfig={getExperimentAnalyticsConfig({
            env,
            service,
            atiAnalyticsProducerId,
          })}
        />
      )}
      <ATIAnalytics atiData={atiData} />
      <ChartbeatAnalytics
        sectionName={pageData?.relatedContent?.section?.name}
        title={headline}
      />
      <ComscoreAnalytics />
      <NielsenAnalytics />
      <ArticleMetadata
        articleId={getArticleId(pageData)}
        title={headline}
        author={articleAuthor}
        twitterHandle={articleAuthorTwitterHandle}
        firstPublished={firstPublished}
        lastPublished={lastPublished}
        section={getArticleSection(pageData)}
        aboutTags={aboutTags}
        mentionsTags={getMentions(pageData)}
        lang={getLang(pageData)}
        description={description}
        imageLocator={promoImage}
        imageAltText={promoImageAltText}
        hasAmpPage={!isTC2Asset}
      />
      <LinkedData
        showAuthor
        bylineLinkedData={bylineLinkedData}
        type={
          !isPGL
            ? categoryName(isTrustProjectParticipant, taggings, formats)
            : 'Article'
        }
        seoTitle={headline}
        headline={headline}
        description={description}
        datePublished={firstPublished}
        dateModified={lastPublished}
        aboutTags={aboutTags}
        imageLocator={promoImage}
      />
      {allowAdvertising && (
        <AdContainer slotType="leaderboard" adcampaign={adcampaign} />
      )}
      <ElectionBanner aboutTags={aboutTags} taggings={taggings} />
      <div css={styles.grid}>
        <div css={!isPGL ? styles.primaryColumn : styles.pglColumn}>
          <main css={styles.mainContent} role="main">
            <Blocks
              blocks={articleBlocks}
              componentsToRender={componentsToRender}
            />
          </main>
          {showTopics && (
            <RelatedTopics
              css={styles.relatedTopics}
              topics={topics}
              mobileDivider={false}
              backgroundColour={GREY_2}
              tagBackgroundColour={WHITE}
            />
          )}
          <RelatedContentSection
            content={blocks}
            sendOptimizelyEvents={enableOptimizelyEventTracking}
          />
        </div>
        {!isApp && !isPGL && <SecondaryColumn pageData={pageData} />}
      </div>
      {!isApp && !isPGL && (
        <MostRead
          css={styles.mostReadSection}
          data={mostReadInitialData}
          columnLayout="multiColumn"
          size="default"
          headingBackgroundColour={GREY_2}
          mobileDivider={showTopics}
        />
      )}
      {enableOptimizelyEventTracking && (
        <>
          <OptimizelyArticleCompleteTracking />
          <OptimizelyPageViewTracking />
        </>
      )}
    </div>
  );
};

export default ArticlePage;
