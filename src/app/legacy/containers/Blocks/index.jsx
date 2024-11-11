import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import path from 'ramda/src/path';
import pathEq from 'ramda/src/pathEq';

const Clearer = styled.div`
  clear: both;
`;

const Blocks = ({ blocks, componentsToRender }) => {
  const hasRelatedContent = blocks.some(
    block => block.type === 'relatedContent',
  );
  return blocks.map((block, index) => {
    const { type, model, id, position, blockGroupType, blockGroupIndex } =
      block;

    if (!componentsToRender || !type) {
      return null;
    }
    if (
      type === 'jumpTo' &&
      hasRelatedContent &&
      !model.jumpToHeadings.some(
        jumpToHeading => jumpToHeading.heading === 'Related Content',
      )
    ) {
      model.jumpToHeadings.push({
        heading: 'Related Content',
      });
    }
    const Block = componentsToRender[type];

    if (!Block) {
      return null;
    }

    const Wrapper = path(['simorghMetadata', 'clear'], block)
      ? Clearer
      : Fragment;

    const { type: typeOfPreviousBlock } = blocks[index - 1] || {};
    console.log('model = ', model);
    return (
      <Wrapper key={id}>
        <Block
          position={position}
          type={type}
          typeOfPreviousBlock={typeOfPreviousBlock}
          blockGroupType={blockGroupType}
          blockGroupIndex={blockGroupIndex}
          {...model}
        />
      </Wrapper>
    );
  });
};

export default Blocks;
