export default request => {
  const getSize = `echo ${JSON.stringify(request)} | gzip | wc -c`;
  return cy.exec(getSize).then(result => {
    return Number.isNaN(result.stdout) ? 0 : parseFloat(result.stdout) / 1024;
  });
};
