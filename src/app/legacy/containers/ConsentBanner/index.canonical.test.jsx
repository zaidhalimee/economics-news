/* eslint-disable global-require */
import React from 'react';

import Cookies from 'js-cookie';

import { RequestContextProvider } from '#contexts/RequestContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { UserContextProvider } from '#contexts/UserContext';
import {
  render,
  screen,
  fireEvent,
} from '../../../components/react-testing-library-with-providers';
import { ServiceContextProvider } from '../../../contexts/ServiceContext';
import ConsentBanner from '.';

const PRIVACY_COOKIE = 'ckns_privacy';
const EXPLICIT_COOKIE = 'ckns_explicit';
const POLICY_COOKIE = 'ckns_policy';
const DEFAULT_PRIVACY_COOKIE = 'july2019';
const PRIVACY_BANNER_TEXT =
  "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.";
const COOKIE_BANNER_TEXT = 'Let us know you agree to cookies';

const renderFixture = ({ privacyToggleEnabled = false } = {}) =>
  render(
    <RequestContextProvider
      bbcOrigin="https://www.test.bbc.co.uk"
      id="c0000000000o"
      pageType="article"
      isAmp={false}
      service="news"
      statusCode={200}
      pathname="/pathname"
    >
      <ServiceContextProvider service="news">
        <ToggleContextProvider
          toggles={{ privacyPolicy: { enabled: privacyToggleEnabled } }}
        >
          <UserContextProvider>
            <ConsentBanner />
          </UserContextProvider>
        </ToggleContextProvider>
      </ServiceContextProvider>
    </RequestContextProvider>,
  );

beforeEach(() => {
  Cookies.remove(PRIVACY_COOKIE);
  Cookies.remove(EXPLICIT_COOKIE);
  Cookies.remove(POLICY_COOKIE);
});

describe('Canonical Consent Banner', () => {
  it('should render only the privacy banner when no cookies are set and the privacyToggle is set to true', () => {
    renderFixture({ privacyToggleEnabled: true });

    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);
    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);

    expect(privacyBannerHeadingEl).toBeInTheDocument();
    expect(cookieBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render only the privacy banner when PRIVACY_COOKIE is 0 and the privacyToggle is set to true', () => {
    Cookies.set(PRIVACY_COOKIE, '0');

    renderFixture({ privacyToggleEnabled: true });

    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);
    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);

    expect(privacyBannerHeadingEl).toBeInTheDocument();
    expect(cookieBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render only the cookie banner when EXPLICIT_COOKIE is 0 and PRIVACY_COOKIE is set', async () => {
    Cookies.set(EXPLICIT_COOKIE, '0');
    Cookies.set(PRIVACY_COOKIE, DEFAULT_PRIVACY_COOKIE);

    renderFixture({ privacyToggleEnabled: true });

    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);
    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);

    expect(cookieBannerHeadingEl).toBeInTheDocument();
    expect(privacyBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render only the cookie banner when the privacyToggle is set to false', async () => {
    renderFixture({ privacyToggleEnabled: false });

    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);
    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);

    expect(cookieBannerHeadingEl).toBeInTheDocument();
    expect(privacyBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render no banners when EXPLICIT_COOKIE is 1 and PRIVACY_COOKIE is set', () => {
    Cookies.set(EXPLICIT_COOKIE, '1');
    Cookies.set(PRIVACY_COOKIE, DEFAULT_PRIVACY_COOKIE);

    renderFixture();

    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);
    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);

    expect(cookieBannerHeadingEl).not.toBeInTheDocument();
    expect(privacyBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render only the cookie banner when the privacy banner is dismissed', async () => {
    renderFixture({ privacyToggleEnabled: true });

    const okButtonEl = screen.queryByText('OK');

    fireEvent.click(okButtonEl);

    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);
    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);

    expect(cookieBannerHeadingEl).toBeInTheDocument();
    expect(privacyBannerHeadingEl).not.toBeInTheDocument();
  });

  it('should render no banners when both are dismissed', async () => {
    renderFixture({ privacyToggleEnabled: true });

    const okButtonEl = screen.queryByText('OK');

    fireEvent.click(okButtonEl);

    const agreeButtonEl = screen.queryByText('Yes, I agree');

    fireEvent.click(agreeButtonEl);

    const cookieBannerHeadingEl = screen.queryByText(COOKIE_BANNER_TEXT);
    const privacyBannerHeadingEl = screen.queryByText(PRIVACY_BANNER_TEXT);

    expect(cookieBannerHeadingEl).not.toBeInTheDocument();
    expect(privacyBannerHeadingEl).not.toBeInTheDocument();
  });
});
