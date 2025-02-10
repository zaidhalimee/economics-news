import onClient from '../../utilities/onClient';
import nodeLogger from '../../logger.node';
import { ATI_LOGGING_ERROR } from '../../logger.const';

const logger = nodeLogger(__filename);

const sendBeacon = async url => {
  if (onClient()) {
    try {
      if (reverbBeaconConfig) {
        const {
          params: { page, user },
          eventDetails,
        } = reverbBeaconConfig;

        await setReverbPageValues({ pageVars: page, userVars: user });

        await callReverb(eventDetails);
      } else {
        await fetch(url, { credentials: 'include' }).then(res => res.text());
      }
    } catch (error) {
      logger.error(ATI_LOGGING_ERROR, {
        error,
      });
    }
  }
};

export default sendBeacon;
