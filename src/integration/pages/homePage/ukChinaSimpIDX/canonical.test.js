/**
 * @service ukchina
 * @pathname /ukchina/simp
 */

import runCanonicalTests from '../canonicalTests';
import { data as pageData } from '../../../../../data/ukchina/homePage/simp.json';

describe('Canonical', () => {
  describe(pageType, () => {
    runCanonicalTests({ service, pageData });
  });
});
