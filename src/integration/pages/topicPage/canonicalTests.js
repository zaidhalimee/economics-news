import {
  runCoreCanonicalTests,
  runCanonicalAnalyticsTests,
  runTimestampTests,
  runCommonCrossPlatformTests,
} from '../../common';

export default service => {
  runCommonCrossPlatformTests(service);
  runCoreCanonicalTests();
  runCanonicalAnalyticsTests();
  runTimestampTests();
};
