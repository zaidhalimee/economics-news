/* eslint-disable no-useless-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const version = 'v0.2.1a';
const cacheName = 'simorghCache_v1';

const service = self.location.pathname.split('/')[1];
const has_offline_page_functionality = false;
const OFFLINE_PAGE = `/${service}/offline`;

self.addEventListener('install', event => {
  event.waitUntil(async () => {
    const cache = await caches.open(cacheName);
    if (has_offline_page_functionality) await cache.add(OFFLINE_PAGE);
  });
});

self.addEventListener('periodicsync', event => {
  if (event.tag === 'get-latest-news') {
    event.waitUntil(showNotification());
  }
});

async function showNotification() {
  const title = "What's happened this week on BBC Mundo";
  const options = {
    body: 'Check out these stories',
    actions: [
      {
        action: 'story-1',
        type: 'button',
        title:
          '"Llené de cicatrices a mis 6 hijos al utilizar cremas para aclarar sus pieles": la epidemia de "decoloración" que llevó a Nigeria a declarar el estado de emergencia',
      },
      {
        action: 'story-2',
        type: 'button',
        title:
          'El gabinete de Defensa de Trump compartió sus planes de atacar Yemen con un periodista en un chat grupal sin darse cuenta',
      },
      {
        action: 'story-3',
        type: 'button',
        title:
          '"Sobreviviendo a lo imposible": la fotógrafa mexicana que muestra los desafíos diarios que enfrentan los cubanos por el colapso económico de su país',
      },
    ],
  };

  self.registration.showNotification(title, options);
}

const fetchEventHandler = async event => {
  if (
    /^https:\/\/ichef(\.test)?\.bbci\.co\.uk\/(news|images|ace\/(standard|ws))\/.+.webp$/.test(
      event.request.url,
    )
  ) {
    const req = event.request.clone();

    // Inspect the accept header for WebP support

    const supportsWebp =
      req.headers.has('accept') && req.headers.get('accept').includes('webp');

    // if supports webp is false in request header then don't use it
    // if accept header doesn't indicate support for webp remove .webp extension

    if (!supportsWebp) {
      const imageUrlWithoutWebp = req.url.replace('.webp', '');
      event.respondWith(
        fetch(imageUrlWithoutWebp, {
          mode: 'no-cors',
        }),
      );
    }
  } else if (
    /((\/cwr\.js$)|(\.woff2$)|(modern\.frosted_promo+.*?\.js$)|(\/moment-lib+.*?\.js$))/.test(
      event.request.url,
    )
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(cacheName);
        let response = await cache.match(event.request);
        if (!response) {
          response = await fetch(event.request.url);
          cache.put(event.request, response.clone());
        }
        return response;
      })(),
    );
  } else if (
    has_offline_page_functionality &&
    event.request.mode === 'navigate'
  ) {
    event.respondWith(async () => {
      try {
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }
        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        const cache = await caches.open(cacheName);
        const cachedResponse = await cache.match(OFFLINE_PAGE);
        return cachedResponse;
      }
    });
  }
  return;
};

onfetch = fetchEventHandler;
