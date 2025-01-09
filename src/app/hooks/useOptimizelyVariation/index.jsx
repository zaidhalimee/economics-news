/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useContext } from 'react';
import { useDecision, OptimizelyContext } from '@optimizely/react-sdk';

const isClientSide = true;

// ALTHOUGH THIS FUNCTION BREAKS REACT RULES BY USING CONDITIONAL HOOKS,
// WE CAN SAFELY DO SO SINCE isClientSide IS A CONSTANT AND THEREFORE GUARANTEES THAT
// EACH HOOK WILL BE CALLED IN THE EXACT SAME ORDER UPON INITAL RENDER.
const useOptimizelyVariation = (
  flagId,
  overrideAttributes = {},
  useClientSide = isClientSide,
) => {
  const { optimizely } = useContext(OptimizelyContext);

  if (!optimizely) return null;

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
      }
    }, [isClientReady, decision.variationKey, didTimeout]);

    return variation;
  }

  return true;
};

export default useOptimizelyVariation;
