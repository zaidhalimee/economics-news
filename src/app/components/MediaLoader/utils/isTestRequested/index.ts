import isLive from '#app/lib/utilities/isLive';
import onClient from '#app/lib/utilities/onClient';

export default () => {
  if (isLive()) {
    return false;
  }

  if (onClient()) {
    const testLiterals = window.location.hostname.match(/localhost|test/g);
    const isTest = Boolean(testLiterals && testLiterals.length > 0);

    const queryParams = new URLSearchParams(window.location.search);
    const isRenderEnvTest = queryParams.get('renderer_env') === 'test';

    return isTest && isRenderEnvTest;
  }

  return false;
};
