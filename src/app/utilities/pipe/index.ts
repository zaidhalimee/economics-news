const pipe =
  <T>(...fns: Array<(args: T) => T>) =>
  (x: T) =>
    fns.reduce((result, nextFn) => nextFn(result), x);

export default pipe;
