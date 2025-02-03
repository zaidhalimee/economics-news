export default function trackingScript() {
  window.addEventListener('load', () => {
    document.addEventListener('click', (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      // eslint-disable-next-line no-undef
      if (targetElement?.tagName === 'A') {
        event.stopPropagation();
        event.preventDefault();

        const atiURL = targetElement.getAttribute('data-ati-tracking');

        if (atiURL == null) {
          return;
        }

        const currentAnchorElement = event.currentTarget as HTMLAnchorElement;
        const nextPageUrl = currentAnchorElement?.href;

        const {
          screen: { width, height, colorDepth, pixelDepth },
          innerWidth,
          innerHeight,
        } = window;
        const now = new Date();
        const hours = now.getHours();
        const mins = now.getMinutes();
        const secs = now.getSeconds();

        // COOKIE SETTINGS
        const cookieName = 'atuserid';
        const expires = 397; // expires in 13 months
        const cookiesForPage = `; ${document.cookie}`;
        const atUserIdCookie = cookiesForPage.split(`; ${cookieName}=`);
        let atUserIdValue = null;

        if (atUserIdCookie.length === 2) {
          const cookieInfo = atUserIdCookie.pop()?.split(';').shift();

          if (cookieInfo) {
            const decodedCookie = decodeURI(cookieInfo);
            const user = JSON.parse(decodedCookie);
            atUserIdValue = user.val;
          }
        }

        if (!atUserIdValue && crypto.randomUUID) {
          atUserIdValue = crypto.randomUUID();
        }

        const stringifiedCookieValue = JSON.stringify({ val: atUserIdValue });
        if (atUserIdValue) {
          document.cookie = `${cookieName}=${stringifiedCookieValue}; path=/; max-age=${expires};`;
        }

        const rValue = [
          width || 0,
          height || 0,
          colorDepth || 0,
          pixelDepth || 0,
        ].join('x');

        const reValue = [innerWidth || 0, innerHeight || 0].join('x');

        const hlValue = [hours, mins, secs].join('x');

        let clientSideAtiURL = atiURL
          .concat('&', 'r=', rValue)
          .concat('&', 're=', reValue)
          .concat('&', 'hl=', hlValue);

        if (navigator.language) {
          clientSideAtiURL = clientSideAtiURL.concat(
            '&',
            'lng=',
            navigator.language,
          );
        }

        if (atUserIdValue) {
          clientSideAtiURL = clientSideAtiURL.concat(
            '&',
            'idclient=',
            atUserIdValue,
          );
        }

        // eslint-disable-next-line no-undef -- This is provided in a helmet script
        window.sendBeaconLite(clientSideAtiURL);

        window.location.assign(nextPageUrl);
      }
    });
  });
}
