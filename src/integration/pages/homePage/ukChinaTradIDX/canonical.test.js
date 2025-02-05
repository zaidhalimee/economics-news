/**
 * @service ukchina
 * @pathname /ukchina/trad
 */

import runCanonicalTests from '../canonicalTests';
import { data as pageData } from '../../../../../data/ukchina/homePage/trad.json';

describe('Canonical', () => {
  describe(pageType, () => {
    runCanonicalTests({ service, pageData });
  });
});
