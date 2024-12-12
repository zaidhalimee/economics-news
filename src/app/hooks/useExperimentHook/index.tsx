import useOperaMiniDetection from '#app/hooks/useOperaMiniDetection';
import { Services } from '#app/models/types/global';
import { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../contexts/ServiceContext';

// Disabled due to bug in ts lint
// eslint-disable-next-line no-shadow
export enum Stages {
  STAGE_1 = 'stage_1',
  STAGE_2 = 'stage_2',
  STAGE_3 = 'stage_3',
  DEFAULT = 'default',
}

type ExperimentCriteria = Partial<{
  service: Services;
  isOperaMini: boolean;
  dataSaver: boolean;
  lowPower: boolean;
  noJs: boolean;
}>;

export type Navigator = {
  connection: { saveData: boolean };
  getBattery?: () => Promise<{ level: number }>;
};

const LOW_POWER_THRESHOLD = 0.2;

const determineStage = ({
  service,
  isOperaMini,
  dataSaver,
  lowPower,
  noJs,
}: ExperimentCriteria) => {
  if (noJs) {
    return Stages.STAGE_1;
  }

  if (service !== 'mundo' && !lowPower && !dataSaver && !isOperaMini) {
    return Stages.STAGE_3;
  }

  if (service === 'mundo' || dataSaver || isOperaMini || lowPower) {
    return Stages.STAGE_2;
  }

  return Stages.DEFAULT;
};

const useExperimentHook = () => {
  const [lowPower, setLowPower] = useState(false);
  const [dataSaver, setSaveDataMode] = useState(false);
  const [noJs, setNoJs] = useState(true);
  const isOperaMini = useOperaMiniDetection();
  const { service } = useContext(ServiceContext);

  useEffect(() => {
    const initialiseDeviceStates = async () => {
      const nav = navigator as unknown as Navigator;
      const saveDataMode = nav.connection?.saveData;
      if (nav.getBattery) {
        const manager = await nav.getBattery();
        const { level } = manager;
        const isLowPower = level <= LOW_POWER_THRESHOLD;
        setLowPower(isLowPower);
      }
      setSaveDataMode(saveDataMode);
    };
    initialiseDeviceStates();
    setNoJs(false);
  }, []);

  const stage = determineStage({
    isOperaMini,
    service,
    dataSaver,
    lowPower,
    noJs,
  });

  return stage;
};

export default useExperimentHook;
