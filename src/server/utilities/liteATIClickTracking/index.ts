export default () => {
  window.addEventListener('load', () => {
    document.addEventListener('click', (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (targetElement?.tagName === 'A') {
        event.stopPropagation();
        event.preventDefault();

        const atiURL = targetElement.getAttribute('data-lite-ati-tracking');
        const currentAnchorElement = event.target as HTMLAnchorElement;
        const nextPageUrl = currentAnchorElement?.href;

        if (atiURL) {
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
          let user: { val: null | string } = { val: null };

          if (atUserIdCookie.length === 2) {
            const cookieInfo = atUserIdCookie.pop()?.split(';').shift();

            if (cookieInfo) {
              const decodedCookie = decodeURIComponent(cookieInfo);
              user = JSON.parse(decodedCookie);
            }
          }

          if (!user.val && window.crypto && crypto.randomUUID) {
            user.val = crypto.randomUUID();
          }

          const stringifiedCookieValue = JSON.stringify(user);
          const encodedCookieValue = encodeURIComponent(stringifiedCookieValue);

          if (user.val) {
            document.cookie = `${cookieName}=${encodedCookieValue}; path=/; max-age=${expires}; Secure;`;
          }

          const screenResolutionColourDepth = [
            width || 0,
            height || 0,
            colorDepth || 0,
            pixelDepth || 0,
          ].join('x');

          const browserViewportResolution = [
            innerWidth || 0,
            innerHeight || 0,
          ].join('x');

          const timestamp = [hours, mins, secs].join('x');

          const params = {
            r: screenResolutionColourDepth,
            re: browserViewportResolution,
            hl: timestamp,
            ...(navigator.language && { lng: navigator.language }),
            app_type: 'lite',
            ...(user.val && { idclient: user.val }),
          };

          const paramValues = Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
          window.sendBeaconLite(`${atiURL}&${paramValues}`);
        }

        window.location.assign(nextPageUrl);
      }
    });
  });
};
