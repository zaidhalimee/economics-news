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

  if (!scriptLinkEnabled) return null;
  if (!alternateVariant) return null;

  return (
    <a
      css={styles.link}
      href={
        pathname
          .replace(currentVariant as string, alternateVariant)
          .replace('.amp', '') // we don't want to link to AMP pages directly
      }
      data-variant={alternateVariant}
      className="focusIndicatorRemove"
    >
      <span css={styles.container}>{text}</span>
    </a>
  );
};

export default ScriptLink;
