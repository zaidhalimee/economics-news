import React from 'react';
import withOptimizelyProvider from '#app/legacy/containers/PageHandlers/withOptimizelyProvider';
import { Article } from '#app/models/types/optimo';
import useExperimentHook, { Stages } from '#app/hooks/useExperimentHook';
import ArticlePage from './ArticlePage';
import applyBasicPageHandlers from '../utils/applyBasicPageHandlers';

const OptimizelyArticle = withOptimizelyProvider(ArticlePage);

const ExperimentArticle = (props: {
  pageData: Article;
  experimentStage: Stages;
}) => {
  const { experimentStage } = props;
  const stage = useExperimentHook();
  const assignedStage = experimentStage ?? stage;
  return <OptimizelyArticle {...props} experimentStage={assignedStage} />;
};

export default applyBasicPageHandlers(ExperimentArticle);
