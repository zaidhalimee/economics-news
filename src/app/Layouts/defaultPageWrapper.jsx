import React, { Fragment } from 'react';
import { node, string, bool } from 'prop-types';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import ManifestContainer from '../containers/Manifest';
import { ServiceContextProvider } from '../contexts/ServiceContext';
import { RequestContextProvider } from '../contexts/RequestContext';
import { FeatureFlagContextProvider } from '../contexts/FeatureFlagContext';
import ConsentBanner from '../containers/ConsentBanner';
import getStatsDestination from '../contexts/RequestContext/getStatsDestination';
import getStatsPageIdentifier from '../contexts/RequestContext/getStatsPageIdentifier';
import getOriginContext from '../contexts/RequestContext/getOriginContext';
import getEnv from '../contexts/RequestContext/getEnv';
import GlobalStyle from '../lib/globalStyles';

const PageWrapper = ({ bbcOrigin, children, id, service, isAmp }) => {
  const { isUK, origin } = getOriginContext(bbcOrigin);
  const env = getEnv(origin);
  const pageType = 'article';
  return (
    <Fragment>
      <ServiceContextProvider service={service}>
        <GlobalStyle />
        <RequestContextProvider
          env={env}
          id={id}
          isUK={isUK}
          origin={origin}
          pageType={pageType}
          platform={isAmp ? 'amp' : 'canonical'}
          statsDestination={getStatsDestination({
            isUK,
            env,
            service,
          })}
          statsPageIdentifier={getStatsPageIdentifier({
            pageType,
            service,
            id,
          })}
        >
          <FeatureFlagContextProvider>
            <ManifestContainer />
            <ConsentBanner />
            <HeaderContainer />
            {children}
            <FooterContainer />
          </FeatureFlagContextProvider>
        </RequestContextProvider>
      </ServiceContextProvider>
    </Fragment>
  );
};

PageWrapper.propTypes = {
  bbcOrigin: string,
  children: node.isRequired,
  id: string,
  isAmp: bool.isRequired,
  service: string.isRequired,
};

PageWrapper.defaultProps = {
  bbcOrigin: null,
  id: null,
};

PageWrapper.defaultProps = {};

export default PageWrapper;
