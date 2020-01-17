const getBaseUrl = origin => {
  let base = 'https://www.bbc';
  let tld = '.com';

  if (origin.includes('alistair-simorgh-test.herokuapp.com')) {
    return origin;
  }

  if (origin.includes('.stage.')) {
    base = 'https://www.stage.bbc';
  }

  if (origin.includes('.test.')) {
    base = 'https://www.test.bbc';
  }

  if (origin.includes('.co.uk')) {
    tld = '.co.uk';
  }

  return base + tld;
};

export default getBaseUrl;
