import transformAnchorTags from './transformAnchorTags';
import transformClickHandlerOption1 from './transformClickHandlerOption1';

type Fn = (html: string) => string;

const pipe =
  (...fns: Fn[]) =>
  (x: string) =>
    fns.reduce((result, nextFn) => nextFn(result), x);

export default pipe(transformAnchorTags, transformClickHandlerOption1);
