import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Brand from '@bbc/psammead-brand';
import { bool, node, oneOfType, func, shape, any } from 'prop-types';
import { RequestContext } from '#contexts/RequestContext';
import { ServiceContext } from '#contexts/ServiceContext';

const StyledBrand = styled(Brand)`
  position: relative;
  z-index: 1;
  svg {
    fill: currentColor;
    @media screen and (forced-colors: active) {
      fill: linkText;
    }
  }

  ${({ isLow }) =>
    isLow &&
    `
      > div:first-of-type {
        margin: unset;
      }
    `}
`;

const BrandContainer = ({ skipLink, scriptLink, brandRef, ...props }) => {
  const { isLow } = useContext(RequestContext);
  const { product, serviceLocalizedName, brandSVG, service, theming } =
    useContext(ServiceContext);

  const { brandBackgroundColour, brandLogoColour } = theming;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const svgRatio = brandSVG && brandSVG.ratio;
  const minWidth = svgRatio * svgMinHeight;
  const maxWidth = svgRatio * svgMaxHeight;

  return (
    <StyledBrand
      backgroundColour={brandBackgroundColour}
      logoColour={brandLogoColour}
      product={product}
      serviceLocalisedName={serviceLocalizedName}
      svgHeight={svgMaxHeight}
      minWidth={minWidth}
      maxWidth={maxWidth}
      svg={brandSVG}
      url={`/${service}`}
      skipLink={skipLink}
      scriptLink={scriptLink}
      ref={brandRef}
      isLow={isLow}
      {...props}
    />
  );
};

BrandContainer.propTypes = {
  borderTop: bool,
  borderBottom: bool,
  skipLink: node,
  scriptLink: node,
  // eslint-disable-next-line react/forbid-prop-types
  brandRef: oneOfType([func, shape({ current: any })]),
};

BrandContainer.defaultProps = {
  borderTop: false,
  borderBottom: false,
  skipLink: null,
  scriptLink: null,
  brandRef: null,
};

export default BrandContainer;
