import pipe from 'ramda/src/pipe';
import withContexts from '#containers/PageHandlers/withContexts';
import withPageWrapper from '#containers/PageHandlers/withPageWrapper';
import withError from '#containers/PageHandlers/withError';
import withData from '#containers/PageHandlers/withData';
import withHashChangeHandler from '#containers/PageHandlers/withHashChangeHandler';
import withOptimizelyProvider from '#containers/PageHandlers/withOptimizelyProvider';

export default (
  component,
  { handlerBeforeContexts = Component => Component } = {},
) =>
  pipe(
    withData,
    withError,
    withPageWrapper,
    withOptimizelyProvider,
    handlerBeforeContexts,
    withContexts,
    withHashChangeHandler,
  )(component);
