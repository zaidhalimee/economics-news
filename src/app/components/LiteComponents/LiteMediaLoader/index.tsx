/** @jsx jsx */

import { Helmet } from 'react-helmet';
import { jsx } from '@emotion/react';
import Text from '#app/components/Text';
import { PropsWithChildren, useContext } from 'react';
import { mediaIcons } from '#psammead/psammead-assets/src/svgs';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { Translations } from '#app/models/types/translations';
import LiteButton from '../LiteButton';
import styles from './index.styles';

type MediaTypes = 'audio' | 'video' | 'image' | 'embed';

const getFileSize = async (src: string) => {
  const response = await fetch(src, { method: 'HEAD' });

  if (response.ok) {
    const contentLength = response.headers.get('Content-Length');
    if (contentLength) {
      const fileSizeInBytes = parseInt(contentLength, 10);
      const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);

      return { src, fileSizeInKB };
    }
  }
};

function script(this: Element) {
  const parentEl = this.parentElement;

  if (!parentEl) return;

  const templateEl = parentEl.querySelector('template');

  if (!templateEl) return;

  // Browser compatibility may be questionable with 'replaceWith'
  parentEl.replaceWith(templateEl.content.cloneNode(true));

  // parentEl.prepend(templateEl.content.cloneNode(true));
  // parentEl.removeChild(templateEl);
  // parentEl.removeChild(this);
}

type ButtonTextProps = {
  type?: MediaTypes;
  liteSiteTranslations: Translations['liteSite'];
};

const getButtonText = ({ type, liteSiteTranslations }: ButtonTextProps) => {
  const { loadAudio, loadVideo, loadImage, loadMedia, loadEmbed } =
    liteSiteTranslations ?? {};

  switch (type) {
    case 'audio':
      return loadAudio || 'Load Audio';
    case 'video':
      return loadVideo || 'Load Video';
    case 'image':
      return loadImage || 'Load Image';
    case 'embed':
      return loadEmbed || 'Load Embed';
    default:
      return loadMedia || 'Load Media';
  }
};

type Props = {
  type?: MediaTypes;
  width?: number;
  height?: number;
};

const LiteMediaLoader = ({
  type,
  width,
  height,
  src,
  children,
}: PropsWithChildren<Props>) => {
  const {
    translations: { liteSite: liteSiteTranslations },
  } = useContext(ServiceContext);

  const hasFixedAspectRatio = type === 'image' && width && height;

  return (
    <div>
      <Helmet>
        <script>
          {`
            async function getSize(){
              const response = await fetch('${src}', { method: 'HEAD' });

              if (response.ok) {
                const contentLength = response.headers.get('Content-Length');
                if (contentLength) {
                  const fileSizeInBytes = parseInt(contentLength, 10);
                  const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
                  console.log({ src: '${src}', fileSizeInKB });
                  return { src: '${src}', fileSizeInKB };
                }
              }
            }
            getSize();
          `}
        </script>
      </Helmet>
      <LiteButton
        css={[
          styles.liteMediaButtonOverlay,
          hasFixedAspectRatio && { aspectRatio: `${width}/${height}` },
        ]}
        script={script}
      >
        <Text css={styles.liteButtonText} fontVariant="sansBold">
          <div css={styles.iconWrapper}>
            {mediaIcons?.[type as keyof typeof mediaIcons]}
          </div>
          <div>{getButtonText({ type, liteSiteTranslations })}</div>
        </Text>
        <Text as="div" size="brevier" css={styles.liteButtonInfoText}>
          {liteSiteTranslations?.loadMediaMessage ||
            'Loading this content will use more data'}
        </Text>
      </LiteButton>
      <template>{children}</template>
    </div>
  );
};

export default LiteMediaLoader;
