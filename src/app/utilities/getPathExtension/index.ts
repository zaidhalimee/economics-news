import Url from 'url-parse';
import { APP_REGEX, AMP_REGEX, LITE_REGEX } from '#app/lib/regex.const';

type ReturnProps = {
  isAmp: boolean;
  isApp: boolean;
  isLite: boolean;
};

export default (url: string): ReturnProps => {
  const { pathname } = new Url(url, true);

  return {
    isAmp: AMP_REGEX.test(pathname),
    isApp: APP_REGEX.test(pathname),
    isLite: LITE_REGEX.test(pathname),
  };
};
