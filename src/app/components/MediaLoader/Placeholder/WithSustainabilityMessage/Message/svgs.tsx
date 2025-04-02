import React from 'react';

export const Fan = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 1.51 1.83"
    focusable="false"
    aria-hidden="true"
    width="4rem"
    height="2rem"
  >
    <path d="M.76,1.51c.42,0,.76-.33.76-.76s-.33-.75-.76-.75-.76.32-.76.75.33.76.76.76M.76,1.34C.43,1.34.17,1.09.17.76S.43.16.76.16s.59.26.59.59-.26.59-.59.59M.76.88s.03,0,.04,0l.05.04c.06.05.05.13.13.18.06.04.16.01.22-.09.05-.09.04-.19-.05-.24-.04-.04-.08-.04-.11-.04h-.15s-.02-.05-.04-.07v-.06c.03-.06.1-.11.1-.2,0-.07-.07-.14-.19-.14-.11,0-.19.06-.19.16,0,.06.02.09.04.12l.07.12s-.04.04-.04.07l-.06.02c-.07.02-.14-.02-.22.02-.06.04-.09.13-.03.24.05.09.14.13.23.08.05-.03.07-.06.09-.09l.07-.12s.02,0,.03,0M.67,1.49v.18h-.26c-.09,0-.13.04-.13.13v.03h.95v-.03c0-.09-.04-.13-.13-.13h-.26v-.18h-.16ZM.76.83s-.07-.03-.07-.07.03-.07.07-.07.07.03.07.07-.03.07-.07.07" />{' '}
  </svg>
);

export const Plus = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 32 32"
    width="0.8rem"
    height="0.8rem"
  >
    <path d="M29.6 13.4H18.7v-11h-5.4v11H2.4v5.3h10.9v11h5.4v-11h10.9z" />
  </svg>
);

export default { Fan, Plus };
