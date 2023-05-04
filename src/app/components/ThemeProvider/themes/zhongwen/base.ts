import { GHOST, WHITE, NEWS_CORE, POSTBOX_30 } from '../../palette';
import noAscOrDescScript from '../../fontScripts/noAscOrDesc';
import chineseFontVariants from '../../fontVariants/chinese';
import brandSVG from '../../chameleonLogos/zhongwen';

const zhongwenTheme = {
  palette: {
    BRAND_BACKGROUND: NEWS_CORE,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: noAscOrDescScript,
    fontVariants: chineseFontVariants,
    fontFaces: [],
  },
  brandSVG,
};

export default zhongwenTheme;
