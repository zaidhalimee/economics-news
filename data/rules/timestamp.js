/* eslint-disable no-use-before-define */
import deepClone from '../../src/app/helpers/json/deepClone';
import deepGet from '../../src/app/helpers/json/deepGet';

const augmentWithTimestamp = jsonRaw => {
  // safely get deeply nested JSON values
  const firstPublished = deepGet(['metadata', 'firstPublished'], jsonRaw);
  const lastUpdated = deepGet(['metadata', 'lastUpdated'], jsonRaw);
  const hasBlocks = deepGet(['content', 'model', 'blocks'], jsonRaw);
  const canRenderTimestamp = firstPublished && lastUpdated && hasBlocks;

  if (canRenderTimestamp) {
    // construct a new block from the metadata
    const timestampBlock = {
      type: 'timestamp',
      model: {
        published: firstPublished,
        updated: lastUpdated,
      },
    };
    return insertTimestampBlock(jsonRaw, timestampBlock);
  }

  return jsonRaw;
};

export default augmentWithTimestamp;

/**
 * Where the `timestampBlock` is inserted in the payload is dependent on the
 * presence or absence of a `headline` block, and other factors.
 * @param {Object} json
 * @param {Object} timestampBlock
 */
const insertTimestampBlock = (originalJson, timestampBlock) => {
  const json = deepClone(originalJson); // make a copy so we don't corrupt the input
  const { headlineBlocks, mainBlocks } = splitBlocksByHeadline(
    json.content.model.blocks,
  );
  if (headlineBlocks.length > 0) {
    // insert timestamp block immediately after headline
    json.content.model.blocks = [
      ...headlineBlocks,
      timestampBlock,
      ...mainBlocks,
    ];
  } else {
    // put timestamp block in as the first element
    json.content.model.blocks.unshift(timestampBlock);
  }
  return json;
};

const splitBlocksByHeadline = blocks => {
  const headlineIndexPlusOne =
    blocks.findIndex(({ type }) => type === 'headline') + 1;

  const headlineBlocks = blocks.slice(0, headlineIndexPlusOne);
  const mainBlocks = blocks.slice(headlineIndexPlusOne, blocks.length);

  return { headlineBlocks, mainBlocks };
};
