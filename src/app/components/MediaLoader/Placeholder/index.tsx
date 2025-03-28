/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Stages } from '#app/hooks/useExperimentHook';
import WithTranscriptSignPost from './WithTranscript/SignPost';
import WithTranscriptNoJsSignPost from './WithTranscript/SignPostNoJs';
import Image from '../../Image';
import styles from './index.styles';
import PlayButton from './PlayButton';
import Guidance from './Guidance';
import { MediaInfo } from '../types';
import WithTransciptMediaIndicator from './WithTranscript/MediaIndicator';

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  src?: string;
  srcSet?: string;
  mediaInfo?: MediaInfo;
  noJsMessage?: string;
  experimentStage?: Stages;
}

const MediaPlayerPlaceholder = ({
  onClick,
  src = '',
  srcSet,
  mediaInfo,
  noJsMessage = '',
  experimentStage = Stages.STAGE_3,
}: Props) => {
  const {
    title,
    datetime,
    duration,
    durationSpoken,
    type = 'video',
    guidanceMessage,
  } = mediaInfo ?? {};

  const playButton = (
    <PlayButton
      css={styles.playButton}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClick={() => {}}
      title={title}
      datetime={datetime}
      duration={duration}
      durationSpoken={durationSpoken}
      type={type}
      guidanceMessage={guidanceMessage}
      className="focusIndicatorRemove"
    />
  );

  const playButtonWithTranscript = (
    <WithTransciptMediaIndicator
      title={title}
      datetime={datetime}
      duration={duration}
      durationSpoken={durationSpoken}
      type={type}
      guidanceMessage={guidanceMessage}
    />
  );

  const guideComponent = (
    <Guidance
      css={styles.guidance}
      guidanceMessage={guidanceMessage}
      noJsMessage={noJsMessage}
    />
  );

  const withTranscriptMessage = <WithTranscriptSignPost title={title} />;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      css={styles.placeholder}
      data-e2e="media-loader__placeholder"
      className="placeholder"
    >
      {experimentStage === Stages.STAGE_3 ? guideComponent : null}
      {experimentStage === Stages.STAGE_2
        ? playButtonWithTranscript
        : playButton}
      {experimentStage === Stages.STAGE_2 ? withTranscriptMessage : null}
      <WithTranscriptNoJsSignPost noJsMessage={noJsMessage} />
      <Image alt="" src={src} srcSet={srcSet} />
    </div>
  );
};

export default MediaPlayerPlaceholder;
