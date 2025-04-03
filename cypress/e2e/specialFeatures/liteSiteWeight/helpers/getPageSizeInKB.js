export default url => {
  const getSize = `curl -s '${url}' | gzip | wc -c`;
  return cy
    .exec(getSize)
    .then(({ stderr }) => {
      if (stderr) {
        throw new Error(stderr);
      }
    })
    .then(({ stdout: size }) => {
      return Number.isNaN(size) ? 0 : parseFloat(size) / 1024;
    });
};
