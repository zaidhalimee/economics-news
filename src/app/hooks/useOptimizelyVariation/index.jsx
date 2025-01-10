/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useDecision } from '@optimizely/react-sdk';

const isClientSide = true;

// ALTHOUGH THIS FUNCTION BREAKS REACT RULES BY USING CONDITIONAL HOOKS,
// WE CAN SAFELY DO SO SINCE isClientSide IS A CONSTANT AND THEREFORE GUARANTEES THAT
// EACH HOOK WILL BE CALLED IN THE EXACT SAME ORDER UPON INITAL RENDER.
const useOptimizelyVariation = (
  flagId,
  overrideAttributes = {},
  useClientSide = isClientSide,
) => {
  if (useClientSide) {
    const [decision, isClientReady, didTimeout] = useDecision(
      flagId,
      {
        autoUpdate: true,
      },
      { overrideAttributes },
    );

    const [variation, setVariation] = useState(null);

    useEffect(() => {
      if (isClientReady && !didTimeout) {
        setVariation(decision.variationKey);

        // Exposes the variation key to the window object for use in the global scope
        // Could potentially be moved to a Context and accessed that way
        window.optimizelyVariation = decision.variationKey;
      }
    }, [isClientReady, decision.variationKey, didTimeout]);

    return variation;
  }

  return true;
};

export default useOptimizelyVariation;
