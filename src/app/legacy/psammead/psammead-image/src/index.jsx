import React, { useContext } from 'react';
import { number, oneOfType, string, bool, func } from 'prop-types';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { ServiceContext } from '#contexts/ServiceContext';
import { RequestContext } from '#contexts/RequestContext';
import { FRONT_PAGE } from '#app/routes/utils/pageTypes';

export { default as AmpImg } from './index.amp';

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeIn = css`
  animation: ${fadeInKeyframes} 0.2s linear;
  transition: visibility 0.2s linear;
`;

const StyledPicture = styled.picture`
  display: block;
  width: 100%;
  visibility: visible;
  ${props => props.fade && fadeIn};
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
`;

export const Img = props => {
  const {
    src,
    srcset,
    sizes,
    fallbackSrcset,
    primaryMimeType,
    fallbackMimeType,
    onLoad,
    ...otherProps
  } = props;

  const { service } = useContext(ServiceContext);
  const requestContext = useContext(RequestContext);

  return (
    <StyledPicture onLoad={onLoad}>
      {!(service === 'hindi' && requestContext.pageType !== FRONT_PAGE) && srcset && (
         <source srcSet={srcset} type={primaryMimeType} sizes={sizes} />
       )}
      {fallbackSrcset && (
        <source srcSet={fallbackSrcset} type={fallbackMimeType} sizes={sizes} />
      )}
      <StyledImg src={src} {...otherProps} />
    </StyledPicture>
  );
};

Img.propTypes = {
  alt: string.isRequired,
  fade: bool,
  height: oneOfType([string, number]),
  sizes: string,
  src: string.isRequired,
  srcset: string,
  fallbackSrcset: string,
  primaryMimeType: string,
  fallbackMimeType: string,
  width: oneOfType([string, number]),
  onLoad: func,
};

Img.defaultProps = {
  fade: false,
  height: null,
  sizes: null,
  srcset: null,
  fallbackSrcset: null,
  primaryMimeType: 'image/jpeg',
  fallbackMimeType: 'image/jpeg',
  width: null,
  onLoad: () => {},
};

export default Img;
