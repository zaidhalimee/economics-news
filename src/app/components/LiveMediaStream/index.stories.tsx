import React from 'react';
import mundoLiveFixture from '#data/mundo/live/c7dkx155e626t.json';
import LiveMediaStream from '.';
import { MediaCollection } from '../MediaLoader/types';

const fixtureData = mundoLiveFixture.data.mediaCollections;

export const Component = () => (
  <LiveMediaStream mediaCollection={fixtureData as MediaCollection[]} />
);

export default { title: 'Components/LiveMediaStream', Component };
