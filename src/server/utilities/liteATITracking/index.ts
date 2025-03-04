export default () => {
  window.processClientDeviceAndSendLite = atiURL => {
    const myConsole = document.getElementById('DEV_CONSOLE');
    console.log('CHECK POINT', atiURL);
    myConsole!.innerHTML += `CHECK POINT ${atiURL} <br>`;

    if (atiURL) {
      console.log('CHECK POINT 2', atiURL);
      myConsole!.innerHTML += `CHECK POINT 2 ${atiURL} <br>`;
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

      const params: Record<string, string> = {
        r: screenResolutionColourDepth,
        re: browserViewportResolution,
        hl: timestamp,
        ...(navigator.language && { lng: navigator.language }),
        app_type: 'lite',
        ...(user.val && { idclient: user.val }),
        ...(document.referrer && { ref: document.referrer }),
      };

      const formattedParams = [];
      const keys = Object.keys(params);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        formattedParams.push(`${key}=${params[key]}`);
      }
      const paramValues = formattedParams.join('&');
      console.log('CHECK POINT 3', `${atiURL}&${paramValues}`);
      myConsole!.innerHTML += `CHECK POINT 3 ${atiURL}&${paramValues} <br>`;
      window.sendBeaconLite(`${atiURL}&${paramValues}`);
    }
  };
};
