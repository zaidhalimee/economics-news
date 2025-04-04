import loadable from '@loadable/component';

const loadableConfig = {
  afaanoromoo: loadable(() => import('./afaanoromoo')),
  afrique: loadable(() => import('./afrique')),
  amharic: loadable(() => import('./amharic')),
  arabic: loadable(() => import('./arabic')),
  archive: loadable(() => import('./archive')),
  azeri: loadable(() => import('./azeri')),
  bengali: loadable(() => import('./bengali')),
  burmese: loadable(() => import('./burmese')),
  cymrufyw: loadable(() => import('./cymrufyw')),
  gahuza: loadable(() => import('./gahuza')),
  gujarati: loadable(() => import('./gujarati')),
  hausa: loadable(() => import('./hausa')),
  hindi: loadable(() => import('./hindi')),
  igbo: loadable(() => import('./igbo')),
  indonesia: loadable(() => import('./indonesia')),
  japanese: loadable(() => import('./japanese')),
  korean: loadable(() => import('./korean')),
  kyrgyz: loadable(() => import('./kyrgyz')),
  marathi: loadable(() => import('./marathi')),
  mundo: loadable(() => import('./mundo')),
  naidheachdan: loadable(() => import('./naidheachdan')),
  nepali: loadable(() => import('./nepali')),
  news: loadable(() => import('./news')),
  newsround: loadable(() => import('./newsround')),
  pashto: loadable(() => import('./pashto')),
  persian: loadable(() => import('./persian')),
  pidgin: loadable(() => import('./pidgin')),
  polska: loadable(() => import('./polska')),
  portuguese: loadable(() => import('./portuguese')),
  punjabi: loadable(() => import('./punjabi')),
  russian: loadable(() => import('./russian')),
  scotland: loadable(() => import('./scotland')),
  serbian: loadable(() => import('./serbian')),
  sinhala: loadable(() => import('./sinhala')),
  somali: loadable(() => import('./somali')),
  sport: loadable(() => import('./sport')),
  swahili: loadable(() => import('./swahili')),
  tamil: loadable(() => import('./tamil')),
  telugu: loadable(() => import('./telugu')),
  thai: loadable(() => import('./thai')),
  tigrinya: loadable(() => import('./tigrinya')),
  turkce: loadable(() => import('./turkce')),
  ukchina: loadable(() => import('./ukchina')),
  ukrainian: loadable(() => import('./ukrainian')),
  urdu: loadable(() => import('./urdu')),
  uzbek: loadable(() => import('./uzbek')),
  vietnamese: loadable(() => import('./vietnamese')),
  ws: loadable(() => import('./ws')),
  yoruba: loadable(() => import('./yoruba')),
  zhongwen: loadable(() => import('./zhongwen')),
};

export default loadableConfig;
