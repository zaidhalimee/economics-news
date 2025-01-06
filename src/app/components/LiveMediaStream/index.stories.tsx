/** @jsx jsx */
import { css, jsx, Theme } from '@emotion/react';
import mundoLiveFixture from '#data/mundo/live/c7dkx155e626t.json';
import LiveMediaStream from '.';
import { MediaCollection } from '../MediaLoader/types';

const fixtureData = mundoLiveFixture.data.mediaCollections;

export const Component = () => (
  <div css={({ palette }: Theme) => css({ background: palette.BLACK })}>
    <LiveMediaStream mediaCollection={fixtureData as MediaCollection[]} />
  </div>
);

export default { title: 'Components/LiveMediaStream', Component };
