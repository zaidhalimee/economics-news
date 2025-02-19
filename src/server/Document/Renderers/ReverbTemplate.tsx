import React from 'react';

const ReverbTemplate = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__reverb = {};
            window.__reverb.__reverbLoadedPromise = new Promise((resolve, reject) => {
              window.__reverb.__resolveReverbLoaded = resolve;
              window.__reverb.__rejectReverbLoaded = reject;
            });
            window.__reverb.__reverbTimeout = setTimeout(() => {
              window.__reverb.__rejectReverbLoaded();
            }, 5000);`,
        }}
      />
      <script
        async
        src="https://mybbc-analytics.files.bbci.co.uk/reverb-client-js/reverb-3.9.2.js"
      />
    </>
  );
};

export default ReverbTemplate;
