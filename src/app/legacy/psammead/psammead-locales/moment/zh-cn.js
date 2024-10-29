const moment = require('moment');
require('moment/locale/zh-cn');

moment.updateLocale('zh-cn', {
  longDateFormat: {
    LLL: 'YYYY年M月D日Ah時mm分',
  },
  relativeTime: {
    // these keys have been overridden with our translations
    // some other keys have been left as set upstream
    // see https://github.com/moment/moment/blob/develop/src/locale/zh-cn.js
    m: '1 分鐘',
    mm: '%d 分鐘',
    h: '1 小時',
    hh: '%d 小時',
  },
});
