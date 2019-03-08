import React from 'react';
import { Link } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { ServiceContextConsumer } from '../../contexts/ServiceContext';
import Blocks from '../Blocks';
import fragment from '../Fragment';
import { inlineLinkModelPropTypes } from '../../models/propTypes/inlineLink';
import { articleRegexPath } from '../../routes';

const InternalInlineLink = InlineLink.withComponent(Link);

const componentsToRender = { fragment };

const InlineLinkContainer = ({ locator, isExternal, blocks }) => {
  const regexp = pathToRegexp(articleRegexPath, [], {
    start: false,
    end: false,
  });

  const result = regexp.exec(locator);
  // if URL matches a valid route, use a react-router link
  if (result) {
    // the path is the first item in the array
    const path = result[0];
    return (
      <InternalInlineLink to={path}>
        <Blocks blocks={blocks} componentsToRender={componentsToRender} />
      </InternalInlineLink>
    );
  }

  // else return a normal hyperlink
  return (
    <ServiceContextConsumer>
      {({ externalLinkText }) => (
        <InlineLink href={locator}>
          <Blocks blocks={blocks} componentsToRender={componentsToRender} />
          {isExternal ? (
            <VisuallyHiddenText>{externalLinkText}</VisuallyHiddenText>
          ) : null}
        </InlineLink>
      )}
    </ServiceContextConsumer>
  );
};

InlineLinkContainer.propTypes = inlineLinkModelPropTypes;

export default InlineLinkContainer;
