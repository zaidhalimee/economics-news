import {
  C_POSTBOX,
  C_WHITE,
  C_GHOST,
  C_POSTBOX_30,
} from '../../../legacy/psammead/psammead-styles/src/colours';
import noAscendersOrDescenders from '../../../components/ThemeProvider/fontScripts/noAscOrDesc';
import '#psammead/moment-timezone-include/tz/Africa/Addis_Ababa';
import '#psammead/psammead-locales/moment/ti';
import withContext from '../../../contexts/utils/withContext';
import { DefaultServiceConfig } from '../../../models/types/serviceConfig';

export const service: DefaultServiceConfig = {
  default: {
    lang: `ti`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'ዝተመሓየሸ',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-tigrinya',
    atiAnalyticsProducerId: '91',
    chartbeatDomain: 'tigrinya.bbc.co.uk',
    brandName: 'BBC News ትግርኛ',
    product: 'BBC News',
    serviceLocalizedName: 'ትግርኛ',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/tigrinya.png',
    defaultImageAltText: 'BBC News ትግርኛ',
    dir: `ltr`,
    externalLinkText: ', ደጋዊ',
    imageCaptionOffscreenText: 'መግለጺ ስእሊ, ',
    videoCaptionOffscreenText: 'መግለጺ ቪድዮ, ',
    audioCaptionOffscreenText: 'መግለጺ ድምጺ, ',
    defaultCaptionOffscreenText: 'መግለጺ, ',
    imageCopyrightOffscreenText: 'ምንጪ ስእሊ, ',
    locale: `ti-ET`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ti',
    datetimeLocale: `ti`,
    service: 'tigrinya',
    serviceName: 'Tigrinya',
    languageName: 'Tigrinya',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@bbcnews',
    twitterSite: '@bbcnews',
    noBylinesPolicy:
      'https://www.bbc.com/tigrinya/institutional-49283259#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/tigrinya/institutional-49283259',
    isTrustProjectParticipant: true,
    script: noAscendersOrDescenders,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'ዜና',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
      brandForegroundColour: `${C_GHOST}`,
      brandHighlightColour: `${C_WHITE}`,
      brandBorderColour: `${C_POSTBOX_30}`,
    },
    showAdPlaceholder: false,
    showRelatedTopics: true,
    mostRead: {
      header: 'ብብዝሒ ዝተነበ',
      lastUpdated: 'ንመወዳእታ እዋን ዝተመሓየሸሉ:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    mostWatched: {
      header: 'ብብዝሒ ዝተራእየ',
      numberOfItems: 2,
      hasMostWatched: false,
    },
    radioSchedule: {
      hasRadioSchedule: true,
      header: 'ስምዑ',
      durationLabel: 'ዕምሪ ፈነወ %duration%',
    },
    recommendations: {
      hasStoryRecommendations: false,
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/tigrinya/institutional-49283259',
        text: 'ስለምንታይ ንቢቢሲ ክትኣምንዎ ከም እትኽእሉ',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links',
        text: 'ብዛዕባ ምስ ናይ ደገ መርበባት እንገብሮ መላግቦታት ዘለና ኣረኣእያ ንምርዳእ ኣንብቡ።',
      },
      links: [
        {
          href: 'https://www.bbc.co.uk/usingthebbc/terms/',
          text: 'ውዕል ተጠቃምነት',
        },
        {
          href: 'https://www.bbc.co.uk/aboutthebbc',
          text: 'ብዛዕባ ቢቢሲ',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/privacy/',
          text: 'ናይ ስቱርነት ፖሊሲ',
        },
        {
          href: 'https://www.bbc.co.uk/usingthebbc/cookies/',
          text: 'ኩኪስ',
        },
        {
          href: 'https://www.bbc.co.uk/tigrinya/send/u50853819',
          text: 'ንቢቢሲ የዛርቡ',
        },
        {
          id: 'COOKIE_SETTINGS',
          href: 'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
          text: 'AdChoices / Do Not Sell My Info',
          lang: 'en-GB',
        },
      ],
      copyrightText: 'BBC. ቢቢሲ፡ ንትሕዝቶ ካልኦት መርበባት ሓበሬታ ሓላፍነት ኣይወስድን።',
    },
    navigation: [
      {
        title: 'ዜና',
        url: '/tigrinya',
      },
      {
        title: 'ቪድዮ',
        url: '/tigrinya/media/video',
      },
      {
        title: 'ኣመና ፍቱዋት',
        url: '/tigrinya/popular/read',
      },
    ],
    timezone: 'Africa/Addis_Ababa',
  },
};

export default withContext(service);
