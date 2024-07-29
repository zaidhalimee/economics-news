import services from '#lib/config/services/loadableConfig';
import { Services, Variants } from '#app/models/types/global';

type Query = string[];
type Platform = 'cps' | 'optimo' | 'tipo';

// Asset ID regexes
const CPS_ID_REGEX = /([0-9]{5,9}|[a-z0-9\-_]+-[0-9]{5,9})$/;
const OPTIMO_ID_REGEX = /^c[a-zA-Z0-9]{10}o$/;
const TIPO_ID_REGEX =
  /^(c[a-zA-Z0-9]{10,11}t)|([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})$/;

const EMBED_ID_REGEX = /^p[0-9a-z]{7,}/;

// Language codes
const LANGS = [
  'am',
  'ar',
  'az',
  'bn',
  'cy',
  'en',
  'en-gb',
  'es',
  'fa',
  'fr',
  'gd',
  'gu',
  'ha',
  'hi',
  'id',
  'ig',
  'ja',
  'ko',
  'ky',
  'mr',
  'my',
  'ne',
  'om',
  'pa',
  'pcm',
  'ps',
  'pt',
  'pt-br',
  'ru',
  'ru-uk',
  'ru-ua',
  'rw',
  'si',
  'so',
  'sr-cyrl',
  'sr-latn',
  'sw',
  'ta',
  'te',
  'tg',
  'th',
  'ti',
  'tr',
  'uk',
  'ur',
  'uz',
  'uz-cyrl',
  'vi',
  'yo',
  'zh-hans',
  'zh-hant',
];

const LANGS_REGEX = new RegExp(`^(${LANGS.join('|')})$`);

const SERVICES = Object.keys(services) as Services[];
const VARIANTS = ['lat', 'cyr', 'trad', 'simp'] as Variants[];

const extractService = (query: Query): Services | null => {
  const service = SERVICES.find(s => s !== 'ws' && query?.includes(s));

  return service ?? null;
};

const extractVariant = (query: Query): Variants | null => {
  const variant = VARIANTS.find(v => query?.includes(v));

  return variant ?? null;
};

const extractPlatform = (query: Query): Platform | null => {
  let platform: Platform | null = null;

  // eslint-disable-next-line no-restricted-syntax
  for (const id of query ?? []) {
    if (CPS_ID_REGEX.test(id)) {
      platform = 'cps';
      break;
    }
    if (OPTIMO_ID_REGEX.test(id)) {
      platform = 'optimo';
      break;
    }
    if (TIPO_ID_REGEX.test(id)) {
      platform = 'tipo';
      break;
    }
  }

  return platform;
};

const extractAssetId = (query: Query) => {
  const assetId = query?.find((id: string) => {
    return (
      CPS_ID_REGEX.test(id) ||
      OPTIMO_ID_REGEX.test(id) ||
      TIPO_ID_REGEX.test(id)
    );
  });

  return assetId ?? null;
};

const extractEmbedId = (query: Query) => {
  const embedId = query?.find((id: string) => EMBED_ID_REGEX.test(id));

  return embedId ?? null;
};

const extractLang = (query: Query) => {
  const lang = query?.find((l: string) => LANGS_REGEX.test(l));

  return lang ?? null;
};

const extractAmp = (query: Query) => {
  const amp = query?.includes('amp');

  return amp ?? null;
};

/**
 *  Syndication route patterns:
 *  -/:service/av-embeds/:asset_id
 *  -/:service/av-embeds/:asset_uri_wo_service
 *  -/:service/av-embeds/:asset_id/vpid/:vpid
 *  -/:service/av-embeds/:asset_uri_wo_service/pid/:pid
 *
 *  Syndication route examples:
 *  -/news/av-embeds/67303123
 *  -/serbian/cyr/av-embeds/srbija-68707945
 *  -/russian/av-embeds/38886884/vpid/p04s97g7
 *  -/news/av-embeds/58228280/pid/p09s9t1j
 */
export default function parseAvRoute(resolvedUrl: string) {
  const query = resolvedUrl.split('/').filter(Boolean);

  // Assumes /ws/ routes are purely for Simorgh AMP pages
  // - only for testing
  const isSyndicationRoute = !query.includes('ws');

  const service = extractService(query);
  const variant = extractVariant(query);
  const platform = extractPlatform(query);
  const assetId = extractAssetId(query);
  const embedId = extractEmbedId(query);
  const lang = extractLang(query);
  const amp = extractAmp(query);

  return {
    isSyndicationRoute,
    service,
    variant,
    platform,
    assetId,
    embedId,
    lang,
    isAmp: amp,
  };
}
