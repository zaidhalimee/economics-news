/**
 * @service ukchina
 * @pathname /ukchina/trad
 */

import runAmpTests from '../ampTests';
import { data as pageData } from '../../../../../data/ukchina/homePage/trad.json';

describe('AMP', () => {
  describe(pageType, () => {
    runAmpTests({ service, pageData });
  });
});
