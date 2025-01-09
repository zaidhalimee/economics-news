import { ReverbClient } from '#models/types/eventTracking';
import { BumpType } from '#app/components/MediaLoader/types';

declare global {
  interface Window {
    __reverb: {
      __reverbLoadedPromise: Promise<ReverbClient>;
    };
    requirejs: (
      bumpVersion: string[],
      callback: (Bump: BumpType) => void,
    ) => void;
    dotcom: {
      ads: {
        getAdTag: () => Promise<string>;
        resolves: { enabled: Promise[]; getAdTag: Promise[] };
      };
      bootstrap: () => void;
      cmd: { push: () => void };
    };
  }
}

export {};
