import React, { useContext } from 'react';
import styled from '@emotion/styled';
import pick from 'ramda/src/pick';
import path from 'ramda/src/path';
import BulletedList from '@bbc/psammead-bulleted-list';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { arrayOf, shape, oneOf, string } from 'prop-types';
import { ServiceContext } from '#contexts/ServiceContext';
import Blocks from '../Blocks';
import listItem, { ListItemPropTypes } from '../BulletedListItem';
import { GridItemMedium } from '#app/components/Grid';
import useViewTracker from '#hooks/useViewTracker';
import useClickTrackerHandler from '#hooks/useClickTrackerHandler';

const StyledGridItemMedium = styled(GridItemMedium)`
  margin-bottom: ${GEL_SPACING_TRPL};
`;

const getLinkBlock = path([
  'model',
  'blocks',
  0,
  'model',
  'blocks',
  0,
  'model',
  'locator',
]);

const withClickHandler = (Component, clickHandler) => props =>
  <Component {...props} onClick={clickHandler} />;

const BulletedListContainer = ({ blocks, className, ...rest }) => {
  const linkBlock = blocks.find(getLinkBlock);
  const hasLinkBlock = Boolean(linkBlock);

  const blockId = path(['id'], linkBlock);

  const eventTrackingData = {
    componentName: `bullet${blockId}`,
    format: 'CHD=bullet',
  };
  const viewRef = useViewTracker(eventTrackingData);
  const { script, service, dir } = useContext(ServiceContext);
  const handleClickTracking = useClickTrackerHandler(eventTrackingData);

  return (
    <StyledGridItemMedium className={className}>
      <BulletedList
        {...pick(['bulletPointShape', 'bulletPointColour'], rest)}
        script={script}
        service={service}
        dir={dir}
        ref={hasLinkBlock ? viewRef : null}
      >
        <Blocks
          blocks={blocks}
          componentsToRender={{
            listItem: hasLinkBlock
              ? withClickHandler(listItem, handleClickTracking)
              : listItem,
          }}
        />
      </BulletedList>
    </StyledGridItemMedium>
  );
};

export const ListPropTypes = {
  blocks: arrayOf(
    shape({ type: oneOf(['listItem']), model: shape(ListItemPropTypes) }),
  ).isRequired,
  class: string,
};

BulletedListContainer.propTypes = { ...ListPropTypes };

BulletedListContainer.defualtProps = { className: null };

export default BulletedListContainer;
