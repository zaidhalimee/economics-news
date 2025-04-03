import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import path from 'ramda/src/path';

const Clearer = styled.div`
  clear: both;
`;

let mycounter = 0;

// const StyledWrapper = styled.div`
//   &:focus {
//     outline: 3px solid #005ea5; /* Visible focus indicator (e.g., blue outline) */
//     outline-offset: 2px; /* Space between the outline and the element */
//   }
// `;

const Blocks = ({ blocks, componentsToRender, revealedBlockRef }) => {
  mycounter += 1;
  return blocks.map((block, index) => {
    const { type, model, id, position, blockGroupType, blockGroupIndex } =
      block;

    if (!componentsToRender || !type) {
      return null;
    }

    const Block = componentsToRender[type];

    let showFocus = 0;

    if (!Block) {
      return null;
    }

    if (type === 'text' || type === 'paragraph') {
      showFocus += 1;
    }

    // Dynamically choose the Wrapper component
    const Wrapper = path(['simorghMetadata', 'clear'], block)
      ? Clearer
      : Fragment;

    const { type: typeOfPreviousBlock } = blocks[index - 1] || {};

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
