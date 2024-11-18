import React from 'react';
import { Helmet } from 'react-helmet';

const SCRIPT_SRC_REVERB =
  'http://localhost:7080/static/js/reverb/reverb-3.9.2.js';
const SCRIPT_SRC_SMART_TAG =
  'http://localhost:7080/static/js/reverb/reverb-3.9.2.js';

const buildScript = () => (
  <Helmet>
    <script src={SCRIPT_SRC_REVERB} />
    <script src={SCRIPT_SRC_SMART_TAG} />
  </Helmet>
);

const ReverbLoader = Component => {
  const withReverb = props => {
    const ComponentWithReverb = () => {
      const scriptElements = buildScript();

      return (
        <>
          {scriptElements}
          <Component {...props} />
        </>
      );
    };

    return <ComponentWithReverb />;
  };

  return withReverb;
};

export default ReverbLoader;
