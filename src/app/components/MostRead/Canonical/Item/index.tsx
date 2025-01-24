/** @jsx jsx */
import React, { PropsWithChildren, useContext } from 'react';
import { jsx } from '@emotion/react';
import useClickTrackerHandler, {
  constructLiteSiteURL,
} from '#hooks/useClickTrackerHandler';
import styles from './index.styles';
import {
  mostReadListGridProps,
  mostReadItemGridProps,
} from '../../utilities/gridProps';
import {
  ColumnLayout,
  MostReadItemProps,
  MostReadLinkProps,
  Size,
} from '../../types';
import { Direction } from '../../../../models/types/global';
import Grid from '../../../../legacy/components/Grid';
import { RequestContext } from '#app/contexts/RequestContext';

export const getParentColumns = (columnLayout: ColumnLayout) => {
  return columnLayout !== 'oneColumn'
    ? mostReadListGridProps(columnLayout).columns
    : null;
};

const getItemCss = ({ dir, size }: { dir: Direction; size: Size }) => {
  const itemCss = [];

  if (size === 'small') {
    itemCss.push(styles.smallPaddingTop);
    itemCss.push(dir === 'ltr' ? styles.smallItemLtr : styles.smallItemRtl);
  } else {
    itemCss.push(styles.defaultPaddingTop);
    itemCss.push(styles.defaultItemPadding);
  }

  itemCss.push(dir === 'ltr' ? styles.gridPaddingLtr : styles.gridPaddingRtl);

  return itemCss;
};

export const MostReadLink = ({
  dir,
  title,
  href,
  children,
  size,
  eventTrackingData,
}: PropsWithChildren<MostReadLinkProps>) => {
  const clickTrackerHandler = useClickTrackerHandler(eventTrackingData);
  const liteUrl = constructLiteSiteURL(eventTrackingData);

  return (
    <div css={getItemCss({ dir, size })} dir={dir}>
      <button
        css={[styles.link, size === 'default' && styles.defaultLink]}
        onClick={clickTrackerHandler}
        add-lite-tracker-params={liteUrl}
      >
        {title}
      </button>
      {children && <div css={styles.timestamp}>{children}</div>}
    </div>
  );
};

export const MostReadItemWrapper = React.forwardRef(
  (
    { dir, children, columnLayout }: PropsWithChildren<MostReadItemProps>,
    ref,
  ) => (
    // @ts-expect-error: Legacy grid expects `children` to be passed as props. However, due to coding best practices, we must nest children between the opening and closing tags
    <Grid
      css={styles.grid}
      {...mostReadItemGridProps(columnLayout)}
      parentColumns={getParentColumns(columnLayout)} // parentColumns is required here because on IE, this component would be rendered before it's parent therefore not receiving the parent's grid columns values so we have to explicitly pass it as a prop here so it works on IE
      dir={dir}
      as="li"
      ref={ref}
      role="listitem"
    >
      <div css={styles.item}>{children}</div>
    </Grid>
  ),
);
