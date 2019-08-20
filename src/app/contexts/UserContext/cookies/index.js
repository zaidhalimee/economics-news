import Cookie from 'js-cookie';

export const getCookiePolicy = () => {
  const POLICY_COOKIE = 'ckns_policy';

  return Cookie.get(POLICY_COOKIE) || '000';
};

export const personalisationEnabled = cookiePolicy =>
  cookiePolicy && cookiePolicy.length === 3 && cookiePolicy[1] === '1';
