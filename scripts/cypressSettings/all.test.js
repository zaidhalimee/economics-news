import { getPageUrls } from '../../cypress/support/helpers/getPageUrls';

describe('All Cypress Settings for all environments', () => {
  it.each`
    smoke    | environment | pageType
    ${true}  | ${'local'}  | ${'articles'}
    ${false} | ${'local'}  | ${'articles'}
    ${true}  | ${'test'}   | ${'articles'}
    ${false} | ${'test'}   | ${'articles'}
    ${true}  | ${'live'}   | ${'articles'}
    ${false} | ${'live'}   | ${'articles'}
    ${true}  | ${'local'}  | ${'liveRadio'}
    ${false} | ${'local'}  | ${'liveRadio'}
    ${true}  | ${'test'}   | ${'liveRadio'}
    ${false} | ${'test'}   | ${'liveRadio'}
    ${true}  | ${'live'}   | ${'liveRadio'}
    ${false} | ${'live'}   | ${'liveRadio'}
    ${true}  | ${'local'}  | ${'onDemandAudio'}
    ${false} | ${'local'}  | ${'onDemandAudio'}
    ${true}  | ${'test'}   | ${'onDemandAudio'}
    ${false} | ${'test'}   | ${'onDemandAudio'}
    ${true}  | ${'live'}   | ${'onDemandAudio'}
    ${false} | ${'live'}   | ${'onDemandAudio'}
    ${true}  | ${'local'}  | ${'onDemandTV'}
    ${false} | ${'local'}  | ${'onDemandTV'}
    ${true}  | ${'test'}   | ${'onDemandTV'}
    ${false} | ${'test'}   | ${'onDemandTV'}
    ${true}  | ${'live'}   | ${'onDemandTV'}
    ${false} | ${'live'}   | ${'onDemandTV'}
    ${true}  | ${'local'}  | ${'topicPage'}
    ${false} | ${'local'}  | ${'topicPage'}
    ${true}  | ${'test'}   | ${'topicPage'}
    ${false} | ${'test'}   | ${'topicPage'}
    ${true}  | ${'live'}   | ${'topicPage'}
    ${false} | ${'live'}   | ${'topicPage'}
    ${true}  | ${'local'}  | ${'mediaAssetPage'}
    ${false} | ${'local'}  | ${'mediaAssetPage'}
    ${true}  | ${'test'}   | ${'mediaAssetPage'}
    ${false} | ${'test'}   | ${'mediaAssetPage'}
    ${true}  | ${'live'}   | ${'mediaAssetPage'}
    ${false} | ${'live'}   | ${'mediaAssetPage'}
    ${true}  | ${'local'}  | ${'photoGalleryPage'}
    ${false} | ${'local'}  | ${'photoGalleryPage'}
    ${true}  | ${'test'}   | ${'photoGalleryPage'}
    ${false} | ${'test'}   | ${'photoGalleryPage'}
    ${true}  | ${'live'}   | ${'photoGalleryPage'}
    ${false} | ${'live'}   | ${'photoGalleryPage'}
    ${true}  | ${'local'}  | ${'storyPage'}
    ${false} | ${'local'}  | ${'storyPage'}
    ${true}  | ${'test'}   | ${'storyPage'}
    ${false} | ${'test'}   | ${'storyPage'}
    ${true}  | ${'live'}   | ${'storyPage'}
    ${false} | ${'live'}   | ${'storyPage'}
    ${true}  | ${'local'}  | ${'mostReadPage'}
    ${false} | ${'local'}  | ${'mostReadPage'}
    ${true}  | ${'test'}   | ${'mostReadPage'}
    ${false} | ${'test'}   | ${'mostReadPage'}
    ${true}  | ${'live'}   | ${'mostReadPage'}
    ${false} | ${'live'}   | ${'mostReadPage'}
    ${true}  | ${'local'}  | ${'featureIndexPage'}
    ${false} | ${'local'}  | ${'featureIndexPage'}
    ${true}  | ${'test'}   | ${'featureIndexPage'}
    ${false} | ${'test'}   | ${'featureIndexPage'}
    ${true}  | ${'live'}   | ${'featureIndexPage'}
    ${false} | ${'live'}   | ${'featureIndexPage'}
  `(
    'smoke = $smoke, environment = $environment, pageType = $pageType',
    ({ smoke, pageType, environment }) => {
      // eslint-disable-next-line no-console
      console.log(
        `smoke = ${smoke}, environment = ${environment}, pageType = ${pageType}
`,
        getPageUrls({ pageType, environment, isSmoke: smoke }).flat(),
      );

      expect(true).toBeTruthy();
    },
  );
});
