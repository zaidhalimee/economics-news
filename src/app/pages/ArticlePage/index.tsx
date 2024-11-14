import ArticlePage from './ArticlePage';
import applyBasicPageHandlers from '../utils/applyBasicPageHandlers';
import withOptimizelyProvider from '#app/legacy/containers/PageHandlers/withOptimizelyProvider';

const OptimizelyArticle = withOptimizelyProvider(ArticlePage);

export default applyBasicPageHandlers(OptimizelyArticle);
