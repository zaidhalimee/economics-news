import { C_METAL, C_EBON } from '#app/legacy/psammead-styles/src/colours';
import styled from '@emotion/styled';

export default styled.a`
  position: static;
  color: ${C_EBON};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:before {
    bottom: 0;
    content: '';
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    white-space: nowrap;
    z-index: 1;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:visited {
    color: ${C_METAL};
  }
`;
