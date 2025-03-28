import latinWithDiacritics from '../../../components/ThemeProvider/fontScripts/latinWithDiacritics';
import '#psammead/moment-timezone-include/tz/Europe/Warsaw';
import '#psammead/psammead-locales/moment/pl-pl';
import withContext from '../../../contexts/utils/withContext';
import { DefaultServiceConfig } from '../../../models/types/serviceConfig';

export const service: DefaultServiceConfig = {
  default: {
    lang: `pl-pl`,
    articleAuthor: `https://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Zaktualizowano',
    articleTimestampSuffix: '',
    atiAnalyticsAppName: 'news-polska',
    atiAnalyticsProducerId: '33',
    atiAnalyticsProducerName: 'polska',
    chartbeatDomain: 'polska.bbc.co.uk', // this is meant to be different to the service name
    brandName: 'BBC News Polska',
    product: 'BBC News',
    serviceLocalizedName: 'Polska',
    defaultImage:
      'https://news.files.bbci.co.uk/include/articles/public/polska/images/metadata/poster-1024x576.png',
    defaultImageAltText: 'BBC News Polska',
    dir: `ltr`,
    externalLinkText: ', zewnętrzny',
    imageCaptionOffscreenText: 'Podpis zdjęcia, ',
    videoCaptionOffscreenText: 'Podpis do filmu, ',
    audioCaptionOffscreenText: 'Podpis audio, ',
    defaultCaptionOffscreenText: 'Podpis, ',
    imageCopyrightOffscreenText: 'Źródło, ',
    locale: `pl-pl`,
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'pl',
    datetimeLocale: `pl-pl`,
    service: 'polska',
    serviceName: 'News Polska',
    languageName: 'Polska',
    twitterCreator: '@bbcpolish',
    twitterSite: '@bbcpolish',
    noBylinesPolicy:
      'https://www.bbc.com/polska/articles/c23423423t#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/polska/articles/c23423423t',
    isTrustProjectParticipant: true,
    script: latinWithDiacritics,
    manifestPath: '/polska/manifest.json',
    swPath: '/sw.js',
    homePageTitle:
      'Wiadomości, filmy, analizy i kontekst w języku portugalskim',
    passportHomes: ['polska'],
    showAdPlaceholder: true,
    showRelatedTopics: true,
    translations: {
      pagination: {
        page: 'Strona',
        previousPage: 'Poprzednia',
        nextPage: 'Następna',
        pageXOfY: 'Strona {x} z {y}',
      },
      ads: {
        advertisementLabel: 'Reklama',
      },
      recommendationTitle: 'Polecane tematy',
      splitRecommendationTitle: 'Więcej polecanych artykułów',
      seeAll: 'Zobacz wszystko',
      home: 'Dom',
      currentPage: 'Bieżąca strona',
      skipLinkText: 'Przejdź do treści',
      relatedContent: 'Powiązane historie',
      relatedTopics: 'Powiązane tematy',
      navMenuText: 'Sekcje',
      mediaAssetPage: {
        mediaPlayer: 'Odtwarzacz multimedialny',
        audioPlayer: 'Odtwarzacz audio',
        videoPlayer: 'Odtwarzacz wideo',
      },
      liveExperiencePage: {
        liveLabel: 'Na żywo',
        liveCoverage: 'Relacja na żywo',
        breaking: 'Pilne',
        postedAt: 'Opublikowano w',
        summary: 'Kluczowe punkty',
        shareButtonText: 'Udostępnij',
      },
      gist: 'Kluczowe punkty',
      error: {
        404: {
          statusCode: '404',
          title: 'strona nie znaleziona',
          message:
            'Przepraszamy, ale nie udało nam się odtworzyć żądanej strony. Próbować:',
          solutions: [
            'Sprawdź adres URL',
            'Kliknij przycisk Odśwież w swojej przeglądarce',
            'Wyszukaj żądaną stronę za pomocą paska wyszukiwania BBC',
          ],
          callToActionFirst: 'Albo spróbuj otworzyć',
          callToActionLinkText: 'Strona główna BBC News Polska',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/polska',
        },
        500: {
          statusCode: '500',
          title: 'Wewnętrzny błąd serwera',
          message:
            'Żądana strona nie może zostać w tej chwili odtworzona. Próbować:',
          solutions: [
            'Kliknij przycisk Odśwież w swojej przeglądarce',
            'Wróć później',
          ],
          callToActionFirst: 'Albo spróbuj otworzyć',
          callToActionLinkText: 'Strona główna BBC News Polska',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/polska',
        },
      },
      consentBanner: {
        privacy: {
          title: 'Zaktualizowaliśmy naszą Politykę prywatności i plików cookie',
          description: {
            uk: {
              first:
                'Wprowadziliśmy istotne zmiany w warunkach naszej Polityki prywatności i plików cookie. Chcemy, abyś wiedział, co one oznaczają dla Ciebie i danych osobowych, które nam przekazałeś.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Wprowadziliśmy istotne zmiany w warunkach naszej Polityki prywatności i plików cookie. Chcemy, abyś wiedział, co one oznaczają dla Ciebie i danych osobowych, które nam przekazałeś.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'OK',
          reject: 'Dowiedz się, co się zmieniło',
          rejectUrl: 'https://www.bbc.com/usingthebbc/privacy-policy/',
        },
        cookie: {
          amp: {
            accept: 'Akceptuj zbieranie danych i kontynuuj',
            reject: 'Odrzuć zbieranie danych i kontynuuj',
            initial: {
              title:
                'Powiedz nam, czy wyrażasz zgodę na zbieranie Twoich danych podczas korzystania z AMP',
              description: {
                first:
                  'My i nasi partnerzy wykorzystujemy technologię tego typu',
                linkText: 'cookies',
                last: ' zbieramy dane podczas przeglądania witryny, aby zapewnić Ci najlepsze doświadczenia online oraz personalizować wyświetlane Ci treści i reklamy. Prosimy o poinformowanie nas, czy wyrażasz zgodę na używanie wszystkich tych typów plików cookie.',
                linkUrl:
                  'https://www.bbc.com/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
              manage: 'Zarządzaj moimi ustawieniami',
            },
            manage: {
              title: 'Zarządzaj ustawieniami zgody na stronach AMP',
              description: {
                para1:
                  'Te ustawienia dotyczą tylko stron AMP. Podczas odwiedzania stron niebędących stronami AMP może być konieczna ponowna konfiguracja preferencji.',
                para2:
                  'Najlżejsza strona mobilna, jaką kiedykolwiek odwiedziłeś, została stworzona przy użyciu technologii Google AMP.',
                heading2: 'Wymagane gromadzenie danych',
                para3:
                  'Para que nossas páginas possam funcionar, nós armazenamos em seu dispositivo uma pequena quantidade de informação sem o seu consentimento.',
                para4: {
                  text: 'Leia mais sobre a informação essencial que foi armazenada no seu dispositivo para que nossas páginas possam funcionar.',
                  url: 'https://www.bbc.com/usingthebbc/cookies/strictly-necessary-cookies/',
                },
                para5:
                  'Nós utilizamos capacidade local de armazenamento para guardar no seu dispositivo as preferências de seu consentimento.',
                heading3: 'Coleta de dados opcional',
                para6:
                  'Ao dar seu consentimento para a coleta de dados em páginas AMP você concorda que sejam exibidos anúncios comerciais personalizados relevantes a você ao acessar essas páginas fora do Reino Unido.',
                para7: {
                  text: 'Leia mais sobre como a BBC e seus parceiros comerciais personalisam anúncios comerciais.',
                  url: 'https://www.bbc.com/usingthebbc/cookies/how-does-the-bbc-use-cookies-for-advertising/',
                },
                para8:
                  'Você pode escolher não receber anúncios comerciais personalizados ao clicar abaixo em "Rejeitar coleta de daos e continuar". Os anúncios comerciais ainda serão exibidos mas eles não serão personalizados.',
                para9:
                  'Você pode mudar essas configurações a qualquer momento clicando abaixo em "Escolha de Anúncios / Não venda minha informação".',
              },
            },
          },
          canonical: {
            title:
              'Powiedz nam, czy zgadzasz się na używanie przez nas plików cookie',
            description: {
              uk: {
                first: 'Używamy ',
                linkText: 'cookies',
                last: ' aby zapewnić Ci najlepsze doświadczenia online. Prosimy o poinformowanie nas, czy wyrażasz zgodę na używanie wszystkich tych typów plików cookie.',
                linkUrl:
                  'https://www.bbc.com/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
              international: {
                first: 'Używamy ',
                linkText: 'cookies',
                last: ' aby zapewnić Ci najlepsze doświadczenia online. Prosimy o wyrażenie zgody na wykorzystanie wszystkich typów plików cookie.',
                linkUrl:
                  'https://www.bbc.com/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
              },
            },
            accept: 'Sim, concordo',
            reject: 'Não concordo, volte para Configurações',
            rejectUrl:
              'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
          },
        },
      },
      media: {
        noJs: 'A reprodução deste formato de vídeo não é compatível com seu dispositivo',
        contentExpired: 'Este conteúdo não está mais disponível.',
        contentNotYetAvailable:
          'Este conteúdo ainda não está disponível para ser tocado.',
        audio: 'Áudio',
        photogallery: 'Galeria de fotos',
        video: 'Vídeo',
        listen: 'Listen',
        watch: 'Assista',
        listenLive: 'Ouça ao vivo',
        listenNext: 'Ouça o próximo',
        liveLabel: 'AO VIVO',
        nextLabel: 'NEXT',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
        recentEpisodes: 'Mais',
        podcastExternalLinks: 'O podcast está disponível em',
        download: 'Baixar episódio',
        closeVideo: 'Sair',
      },
      socialEmbed: {
        caption: {
          textPrefixVisuallyHidden: 'Legenda do vídeo, ',
          text: 'Alerta: Conteúdo de terceiros pode conter publicidade',
          articleText:
            'Alerta: A BBC não se responsabiliza pelo conteúdo de sites externos',
          articleAdditionalText:
            '%provider_name% conteúdo pode conter propaganda.',
        },
        fallback: {
          text: 'Conteúdo não disponível',
          linkText: 'Veja mais em %provider_name%',
          linkTextSuffixVisuallyHidden: ', externo',
          warningText:
            'A BBC não se responsabiliza pelo conteúdo de sites externos.',
        },
        skipLink: {
          text: 'Pule %provider_name% post',
          endTextVisuallyHidden: 'Final de %provider_name% post',
        },
        consentBanner: {
          heading: `Aceita conteúdo do [social_media_site]?`,
          body: `Este item inclui conteúdo extraído do [social_media_site]. Pedimos sua autorização antes que algo seja carregado, pois eles podem estar utilizando cookies e outras tecnologias. Você pode consultar a [link] política de uso de cookies [/link] e [link] os termos de privacidade [/link] do [social_media_site] antes de concordar. Para acessar o conteúdo clique em "aceitar e continuar".`,
          button: 'Aceite e continue',
        },
      },
      include: {
        errorMessage:
          'Desculpe, mas não é possível exibir esta parte da história nesta página de acesso resumido de celular.',
        linkText:
          'Acesse a visão integral da página para visualizar todo o conteúdo.',
      },
      topStoriesTitle: 'Principais notícias',
      featuresAnalysisTitle: 'Leia mais',
      latestMediaTitle: 'Mais recentes',
      ugc: {
        // No JavaScript
        noJsHeading: undefined,
        noJsDescription: undefined,

        // Optional
        optional: 'opcional',

        // File upload
        fileUploadLiveRegionText: 'O que você está uploading:',
        fileUploadLiveRegionUpdateText: undefined,
        fileUploadListHeading: 'O que você está uploading:',
        fileUploadButton: 'Selecione um arquivo',
        fileUploadRemoveButton: 'Selecione um arquivo',

        // Submit button
        submitButton: 'Enviar',

        // Validation
        validationRequired: 'Falta alguma coisa.',
        validationInvalidEmail:
          'Algo não está correto. Digite um endereço de email válido.',
        validationInvalidTelephone: undefined,
        validationFilesNotEnough:
          'O número de arquivos não é suficiente. Adicione pelo menos {{minFiles}} arquivos.',
        validationFilesTooMany:
          'Existem muitos arquivos. Você pode adicionar até {{maxFiles}} arquivos.',
        validationFilesInvalidType:
          'Esse tipo de arquivo não pode ser utilizado. Adicionar {{fileTypes}}.',
        validationFilesTooSmall:
          'Este arquivo está corrompido. Tente escolher outro arquivo.',
        validationFilesSizeExceeded:
          'Estes arquivos são muito grandes. Você só pode fazer upload de até 1,2GB de cada vez.',
        validationWordLimit: 'Máximo de {{wordLimit}} palavras',

        // Messaging
        retentionPeriodDays:
          'Nós guardaremos a sua mensagem por até {{days}} dias. Caso não usemos o conteúdo, ele será apagado junto a qualquer outra informação que você nos tenha enviado.',
        referenceNumber: 'Número de referência',
        submissionInfoSignedOutMessage:
          'Você deve anotar esses detalhes para sua referência.',
        privacyInfoHtml:
          'Não se preocupe, nós protegemos seus dados pessoais — para maiores detalhes, leia {{privacyInfoLink}}.',
        emailToHtml:
          'Envie email para {{emailLink}} caso você mude de ideia. Mencione o número de referência e diga apenas que você não quer que o material seja utilizado.',
        removalGuidelineText: undefined,

        // Form Screen
        dataPolicyHeading: 'Nossa política de dados',

        // Uploading Screen
        uploadingHeading: 'Uploading seus arquivos...',
        uploadingDescription: 'Aguarde até finalizar.',

        // Success Screen
        successHeading: 'Mensagem enviada',
        successDescription: 'Obrigado por entrar em contato.',
        privacyPolicyLinkHref:
          'https://www.bbc.com/polska/articles/cw0w9z6p491o',
        privacyPolicyLinkText: 'Política de privacidade',

        // Error Screen
        errorHeading: 'Sua mensagem não foi enviada',
        errorDescription: 'Tente enviar novamente.',

        // Closed Screen
        closedHeading: 'Está encerrado',
        closedDescription: 'Foi encerrado em {{date}}.',
      },
    },
    mostRead: {
      header: 'Mais lidas',
      lastUpdated: 'Última atualização:',
      numberOfItems: 10,
      hasMostRead: true,
    },
    radioSchedule: {
      hasRadioSchedule: false,
    },
    recommendations: {
      hasStoryRecommendations: true,
      skipLink: {
        text: 'Pule %title% e continue lendo',
        endTextVisuallyHidden: 'Fim do %title%',
      },
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/polska/institutional-50054434',
        text: 'Por que você pode confiar na BBC',
      },
      externalLink: {
        href: 'https://www.bbc.com/editorialguidelines/guidance/feeds-and-links',
        text: 'Leia sobre nossa política em relação a links externos.',
      },
      links: [
        {
          href: 'https://www.bbc.com/polska/institutional-36202448',
          text: 'Termos de Uso',
        },
        {
          href: 'https://www.bbc.com/polska/institutional-36202452',
          text: 'Sobre a BBC',
        },
        {
          href: 'https://www.bbc.com/polska/institutional-36202454',
          text: 'Política de privacidade',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/polska/send/u50853599',
          text: 'Contate a BBC',
        },
        {
          href: 'https://www.bbc.com/ws/languages',
          text: 'BBC News em outras línguas',
        },
        {
          id: 'COOKIE_SETTINGS',
          href: '#',
          text: 'Do not share or sell my info',
          lang: 'en-GB',
        },
      ],
      copyrightText:
        'BBC. A BBC não se responsabiliza pelo conteúdo de sites externos.',
    },
    timezone: 'America/Sao_Paulo',
    navigation: [
      {
        title: 'News',
        url: '/polska',
      },
    ],
  },
};

export default withContext(service);
