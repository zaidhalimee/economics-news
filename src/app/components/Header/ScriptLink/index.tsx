/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import useToggle from '#hooks/useToggle';
import { RequestContext } from '#app/contexts/RequestContext';
import { ServiceContext } from '../../../contexts/ServiceContext';
import styles from './index.styles';

const ScriptLink = () => {
  const { scriptLink } = useContext(ServiceContext);
  const { pathname, variant: currentVariant } = useContext(RequestContext);
  const { enabled: scriptLinkEnabled } = useToggle('scriptLink');

  const { text, variant: alternateVariant } = scriptLink || {};

  if (!pathname) return null;
  if (!scriptLinkEnabled) return null;
  if (!alternateVariant) return null;

  const pathPartsWithoutExtension = pathname
    .replace(/\.[^/.]+$/, '') // remove any extensions
    .split('/');

  const currentVariantIndex = pathPartsWithoutExtension.indexOf(
    currentVariant as string,
  );

  pathPartsWithoutExtension[currentVariantIndex] = alternateVariant;
  const newPath = pathPartsWithoutExtension.join('/').replace('.amp', ''); // we don't want to link to AMP pages directly;

  return (
    <a
      css={styles.link}
      href={newPath}
      data-variant={alternateVariant}
      className="focusIndicatorRemove"
    >
      <span css={styles.container}>{text}</span>
    </a>
  );
};

export default ScriptLink;
