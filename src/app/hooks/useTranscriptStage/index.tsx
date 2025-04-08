import useOperaMiniDetection from '#app/hooks/useOperaMiniDetection';
import { Services } from '#app/models/types/global';
import { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../contexts/ServiceContext';

// Disabled due to bug in ts lint
// eslint-disable-next-line no-shadow
export enum Stages {
  STAGE_1 = `No js stage`,
  STAGE_2 = `Qualifies for transcript`,
  STAGE_3 = `Does not qualify for transcript`,
}

type ExperimentCriteria = Partial<{
  service: Services;
  isOperaMini: boolean;
  dataSaver: boolean;
  lowPower: boolean;
  noJs: boolean;
  hasTranscript: boolean;
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
  hasTranscript,
}: ExperimentCriteria) => {
  if (noJs) {
    return Stages.STAGE_1;
  }

  if (
    (service === 'mundo' || dataSaver || isOperaMini || lowPower) &&
    hasTranscript
  ) {
    return Stages.STAGE_2;
  }

  return Stages.STAGE_3;
};

const useTranscriptStage = (hasTranscript: boolean) => {
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
    hasTranscript,
  });

  return stage;
};

export default useTranscriptStage;
