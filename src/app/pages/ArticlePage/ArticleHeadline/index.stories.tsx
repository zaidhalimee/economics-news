import React from 'react';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import { Services } from '#app/models/types/global';
import { ARTICLE_PAGE } from '../../../routes/utils/pageTypes';
import ArticleHeadline from '.';
import fixture from './fixture';

type Props = {
  service: Services;
  isLite?: boolean;
  toggleEnabled?: boolean;
};

const ArticleHeadlineComponent = ({
  service,
  isLite,
  toggleEnabled = false,
}: Props) => (
  <ToggleContextProvider
    toggles={{
      liteSiteCTA: {
        enabled: toggleEnabled,
      },
    }}
  >
    <RequestContextProvider
      isLite={isLite}
      pageType={ARTICLE_PAGE}
      pathname="/pathname"
      service={service}
    >
      <ServiceContextProvider service={service}>
        <ArticleHeadline {...fixture} />
      </ServiceContextProvider>
    </RequestContextProvider>
  </ToggleContextProvider>
);

export default {
  title: 'components/ArticleHeadline',
  component: ArticleHeadline,
};

export const ArticleHeadlineWithLiteCTA = () => (
  <ArticleHeadlineComponent service="gahuza" toggleEnabled />
);

export const ArticleHeadlineWithLiteCTARightToLeft = () => (
  <ArticleHeadlineComponent service="arabic" toggleEnabled />
);

export const ArticleHeadlineDefault = () => (
  <ArticleHeadlineComponent service="news" />
);
