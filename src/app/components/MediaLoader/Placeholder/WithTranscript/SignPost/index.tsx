/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useContext, useId } from 'react';
import { ServiceContext } from '#app/contexts/ServiceContext';
import Text from '#app/components/Text';
import VisuallyHiddenText from '#app/components/VisuallyHiddenText';
import styles from './index.styles';
import SVGs from './svgs';

const DEFAULT_MESSAGE =
  'Help reduce your power and data usage by not playing video content.';
const DEFAULT_LOAD_TITLE = 'Load Video';

type Props = {
  title?: string;
};

const SignPost = ({ title = '' }: Props) => {
  const {
    translations: {
      media: { signPost, loadVideo },
    },
  } = useContext(ServiceContext);
  const idRef = useId();

  const message = signPost ?? DEFAULT_MESSAGE;
  const buttonLabel = loadVideo ?? DEFAULT_LOAD_TITLE;

  return (
    <div css={styles.container}>
      <SVGs.FanSvg css={[styles.icon, styles.fanIcon, styles.collapsable]} />
      <div>
        <div>
          <Text id={idRef} css={styles.message} as="p" size="bodyCopy">
            {message}
          </Text>
        </div>
        <div css={[styles.loadVideoContainer]}>
          <button
            type="button"
            css={[styles.loadVideo]}
            aria-describedby={idRef}
            className="focusIndicatorInvert"
          >
            <span>
              <SVGs.PlusSvg css={[styles.icon, styles.plusIcon]} />
            </span>
            <Text
              css={[styles.message, styles.underline]}
              as="span"
              size="bodyCopy"
            >
              {buttonLabel}
              <VisuallyHiddenText>, {title}</VisuallyHiddenText>
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignPost;
