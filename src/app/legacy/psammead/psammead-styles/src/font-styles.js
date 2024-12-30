import { useContext } from 'react';
import { RequestContext } from '#contexts/RequestContext';
import * as fonts from './font-families';

const getFontFromObject = (service) => {
    const { saveData } = useContext(RequestContext);
    if (fonts[service] && !saveData) {
        return service;
    }
    return 'helmetDefault';
}

export const getSansRegular = service => {
  return fonts[getFontFromObject(service)].sansRegular;
};

export const getSansRegularItalic = service => {
  const { sansRegularItalic, sansRegular } = fonts[getFontFromObject(service)];
  return sansRegularItalic || sansRegular;
};

export const getSansBold = service => {
  const { sansBold, sansRegular } = fonts[getFontFromObject(service)];
  return sansBold || sansRegular;
};

export const getSansBoldItalic = service => {
  const { sansBoldItalic } = fonts[getFontFromObject(service)];
  return sansBoldItalic || getSansBold(service);
};

export const getSansLight = service => {
  const { sansLight } = fonts[getFontFromObject(service)];
  return sansLight || getSansRegular(service);
};

export const getSerifRegular = service => {
  const { serifRegular } = fonts[getFontFromObject(service)];
  return serifRegular || getSansRegular(service);
};

export const getSerifMedium = service => {
  const { serifMedium } = fonts[getFontFromObject(service)];
  return serifMedium || getSansBold(service);
};

export const getSerifMediumItalic = service => {
  const { serifMediumItalic } = fonts[getFontFromObject(service)];
  return serifMediumItalic || getSansBoldItalic(service);
};

export const getSerifBold = service => {
  const { serifBold } = fonts[getFontFromObject(service)];
  return serifBold || getSansBold(service);
};

export const getSerifLight = service => {
  const { serifLight } = fonts[getFontFromObject(service)];
  return serifLight || getSerifRegular(service);
};
