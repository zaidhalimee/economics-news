import { useState, useEffect } from 'react';
import { useDecision } from '@optimizely/react-sdk';

const useClientSideOptimizelyVariation = (
  experimentId,
  overrideAttributes = {},
) => {
  const [decision, isClientReady, didTimeout] = useDecision(
    experimentId,
    {
      autoUpdate: true,
    },
    { overrideAttributes },
  );

  const [variation, setVariation] = useState(null);

  useEffect(() => {
    if (isClientReady && !didTimeout) {
      setVariation(decision.variationKey);
    }
  }, [isClientReady, decision.variationKey, didTimeout]);

  return variation;
};

const useOptimizelyVariation = (
  experimentId,
  overrideAttributes = {},
  isClientSide = false,
) => {
    if(isClientSide){
      return useClientSideOptimizelyVariation(experimentId, overrideAttributes);
    }
    return true;
}


export default useOptimizelyVariation;
