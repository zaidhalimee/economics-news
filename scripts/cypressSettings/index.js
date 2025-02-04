/* eslint-disable import/extensions */
import { getPageUrls } from '../../cypress/support/helpers/getPageUrls.js';

const {
  smoke = false,
  pageType = 'articles',
  environment = 'local',
} = process.argv.slice(2).reduce((acc, key) => {
  const [name, value] = key.split('=');

  return Object.assign(acc, { [name]: value });
}, {});

console.log('filters', { smoke, pageType, environment });

const urls = getPageUrls({ pageType, environment, isSmoke: smoke }).flat();

console.log(urls);
