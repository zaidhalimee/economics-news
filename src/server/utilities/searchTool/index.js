/* eslint-disable no-restricted-syntax */
import path from 'path';
import fs from 'fs';
import nodeLogger from '#lib/logger.node';
import commonWords from './utils/regex';

const logger = nodeLogger(__filename);

const ROOT_DIR = path.resolve();

const symbolRegex =
  /\.|,|!|@|#|%|\^|&|\*|\(|\)|-|_|=|\+|\[|\]|\{|\}|;|:|'|"|<|>|\/|\?|\\|\||`|~|\n/g;

function binarySearch(words, target) {
  let start = 0;
  let end = words.length;

  while (start <= end) {
    const midpoint = Math.floor((start + end) / 2);

    if (words[midpoint] === target) {
      return midpoint;
    }
    if (target < words[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }

  return -1;
}

export function searchV2(articleList, target) {
  const formattedText = target
    .toLowerCase()
    .replace(commonWords, '')
    .replace(symbolRegex, '');

  const wordArray = formattedText.split(' ');

  const matches = [];

  for (let i = 0; i < articleList.length; i += 1) {
    const { words, counts, url, thumbnail, headline } = articleList[i];

    let wordMatchCount = 0;
    let totalMatchValue = 0;

    for (let j = 0; j < wordArray.length; j += 1) {
      const hit = binarySearch(words, wordArray[j]);
      // const hit = words.indexOf(target);
      if (hit >= 0) {
        wordMatchCount += 1;
        totalMatchValue += counts[hit];
      }
    }

    if (wordMatchCount > 0) {
      matches.push({
        wordMatchCount,
        totalMatchValue,
        url,
        thumbnail,
        headline,
      });
    }
  }

  const sortedArray = matches.sort((a, b) => {
    const matchCount = b.wordMatchCount - a.wordMatchCount;
    if (matchCount === 0) {
      return b.totalMatchValue - a.totalMatchValue;
    }
    return matchCount;
  });

  return sortedArray.slice(0, 1);
}

function loadIndexV2() {
  const dataDir = path.join(ROOT_DIR, 'OUTPUT_3');

  const yearList = fs.readdirSync(dataDir);
  const index = new Map();
  const yearRegex = /^\d{4}$/;
  let totalRecords = 0;

  for (let i = 0; i < yearList.length; i += 1) {
    const year = yearList[i];
    if (yearRegex.test(year) && parseInt(year, 10) === 2010) {
      const readPath = path.join(ROOT_DIR, 'OUTPUT_3', year, 'News');
      const content = fs.readdirSync(readPath);
      const indexForYear = new Map();
      let totalRecordsForYear = 0;
      for (let j = 0; j < content.length; j += 1) {
        const article = content[j];
        const month = article.split('-')[1];

        const file = fs.readFileSync(path.join(readPath, article), 'utf8');
        const parsed = JSON.parse(file);

        if (indexForYear.has(month)) {
          indexForYear.get(month).push(parsed);
        } else {
          indexForYear.set(month, [parsed]);
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
