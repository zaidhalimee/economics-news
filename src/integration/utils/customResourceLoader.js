const jsdom = require('jsdom');

class CustomResourceLoader extends jsdom.ResourceLoader {
  fetch(url, options) {
    if (
      url ===
      'https://mybbc-analytics.files.bbci.co.uk/reverb-client-js/reverb-3.9.2.js'
    ) {
      return super.fetch(url, options);
    }

    return null;
  }
}

module.exports = CustomResourceLoader;
