import isOperaProxy from '#app/lib/utilities/isOperaProxy';
import { getReferrer } from '#app/lib/analyticsUtils';

const sendBeaconOperaMiniScript = (atiPageViewUrlString: string) => {
  const referrer = getReferrer();
  const referrerParam = referrer ? `&ref=${referrer}` : '';

  return `
    if (${isOperaProxy.toString()}() && !Boolean(window.hasOperaMiniScriptRan)) {
      window.hasOperaMiniScriptRan = true;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", "${atiPageViewUrlString}${referrerParam}", true);
      xhr.withCredentials = true;
      xhr.send();
    }
`;
};

export default sendBeaconOperaMiniScript;
