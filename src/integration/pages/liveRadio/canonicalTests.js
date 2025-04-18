import {
  runCoreCanonicalTests,
  runCanonicalAnalyticsTests,
  runRadioScheduleTests,
  runCommonCrossPlatformTests,
  runMediaPlayerAudioTests,
} from '../../common';

export default ({ service, pageType }) => {
  runCoreCanonicalTests();
  runCanonicalAnalyticsTests();
  runRadioScheduleTests(pageType);
  runCommonCrossPlatformTests(service);
  runMediaPlayerAudioTests();

  describe('Summary', () => {
    const summaryEl = document.querySelector('main p');
    const summaryText = summaryEl.textContent;

    it('should be in the document', () => {
      expect(summaryEl).toBeInTheDocument();
    });

    it('should contain text', () => {
      expect(summaryText).toBeTruthy();
    });

    it('should match text', () => {
      expect(summaryText).toMatchSnapshot();
    });
  });
};
