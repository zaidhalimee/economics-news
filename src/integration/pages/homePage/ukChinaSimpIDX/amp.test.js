/**
 * @service ukchina
 * @pathname /ukchina/simp
 */

import runAmpTests from '../ampTests';
import { data as pageData } from '../../../../../data/ukchina/homePage/simp.json';

describe('AMP', () => {
  describe(pageType, () => {
    runAmpTests({ service, pageData });
  });
});
