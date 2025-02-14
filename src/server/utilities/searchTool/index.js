/* eslint-disable no-restricted-syntax */
import path from 'path';
import fs from 'fs';
import nodeLogger from '#lib/logger.node';
import commonWords from './utils/regex';

const logger = nodeLogger(__filename);

const ROOT_DIR = path.resolve();

const symbolRegex =
  /\.|,|!|@|#|%|\^|&|\*|\(|\)|-|_|=|\+|\[|\]|\{|\}|;|:|'|"|<|>|\/|\?|\\|\||`|~|\n/g;

export function searchV2(index, target) {
  const formattedText = target
    .toLowerCase()
    .replace(commonWords, '')
    .replace(symbolRegex, '');
  const wordArray = formattedText.split(' ');
  const results = {};
  for (let i = 0; i < wordArray.length; i += 1) {
    const word = wordArray[i];
    const matches = index.get(word);
    if (matches) {
      for (let j = 0; j < matches.length; j += 1) {
        const { id, count } = matches[j];
        if (results[id]) {
          results[id].wordsMatched += 1;
          results[id].totalCount += count;
        } else {
          results[id] = {
            wordsMatched: 1,
            totalCount: count,
            url: `https://www.bbc.co.uk/news/articles/${id}`,
          };
        }
      }
    }
  }
  const sortedArray = Object.values(results).sort((a, b) => {
    const matchCount = b.wordsMatched - a.wordsMatched;
    if (matchCount === 0) {
      return b.totalCount - a.totalCount;
    }
    return matchCount;
  });
  return sortedArray.slice(0, 1);
}

function addPath(map, slugs) {
  let root = map;
  slugs.forEach((slug, index) => {
    if (!root.has(slug)) {
      if (index === slugs.length - 1) {
        root.set(slug, []);
      } else {
        root.set(slug, new Map());
      }
    }
    root = root.get(slug);
  });
}

function loadIndexV2() {
  const dataDir = path.join(ROOT_DIR, 'OUTPUT_2');

  const yearList = fs.readdirSync(dataDir);
  const index = new Map();
  const yearRegex = /^\d{4}$/;
  let totalRecords = 0;

  for (let i = 0; i < yearList.length; i += 1) {
    const year = yearList[i];
    if (yearRegex.test(year)) {
      const readPath = path.join(ROOT_DIR, 'OUTPUT_2', year, 'News');
      const content = fs.readdirSync(readPath);
      const indexForYear = new Map();
      let totalRecordsForYear = 0;

      for (let j = 0; j < content.length; j += 1) {
        const article = content[j];
        const month = article.split('-')[1];

        const file = fs.readFileSync(path.join(readPath, article), 'utf8');
        const { words, counts } = JSON.parse(file);

        for (let k = 0; k < words.length; k += 1) {
          const word = words[k];
          const id = article;
          addPath(indexForYear, [month, word]);

          try {
            indexForYear.get(month).get(word).push({ id, count: counts[k] });
          } catch (error) {
            logger.error(
              'Error on initialising',
              year,
              month,
              word,
              indexForYear.get(month).get(word),
            );
          }
        }

        totalRecordsForYear += 1;
      }
      index.set(year, indexForYear);
      totalRecords += totalRecordsForYear;
      logger.info(`Initialised ${year}, ${totalRecordsForYear} records.`);
    }
  }

  return { index, totalRecords };
}

export const processInput = (index, input) => {
  if (typeof input !== 'string') {
    return { msg: 'bad input' };
  }

  const startTime = performance.now();

  const decodedInput = decodeURIComponent(input);

  const results = {};
  for (const year of index.keys()) {
    if (!results[year]) {
      results[year] = {};
    }
    for (const month of index.get(year).keys()) {
      const monthIndex = index.get(year).get(month);
      const monthSearchResult = searchV2(monthIndex, decodedInput);
      if (monthSearchResult.length > 0) {
        results[year][month] = monthSearchResult;
      }
    }
  }

  const endTime = performance.now();
  return {
    results,
    decodedInput,
    processingTime: (endTime - startTime) / 1000,
  };
};

export default () => {
  logger.info('Storing Search v2.');
  logger.info('Initialising index...');
  const startTime = performance.now();
  const initialiser = loadIndexV2();
  const endTime = performance.now();
  logger.info(`Initialising took ${(endTime - startTime) / 1000} seconds. \n`);

  return initialiser;
};
