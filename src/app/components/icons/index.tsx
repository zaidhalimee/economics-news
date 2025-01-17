import React from 'react';

export const Ellipsis = () => (
  <svg
    viewBox="0 0 32 32"
    focusable="false"
    aria-hidden="true"
    width="12"
    height="12"
  >
    <path d="M1.6 18.8h5.8v-5.6H1.6v5.6zm11.5 0h5.8v-5.6h-5.8v5.6zm11.5 0h5.8v-5.6h-5.8v5.6z" />
  </svg>
);
export const LeftChevron = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    focusable="false"
    aria-hidden="true"
    width="12"
    height="12"
    className={className}
  >
    <path d="M10.4 14.3L26.5 31h-6.4L5.5 16 20.1 1h6.4L10.4 17.7v-3.4z" />
  </svg>
);

export const RightChevron = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    focusable="false"
    aria-hidden="true"
    width="12"
    height="12"
    className={className}
  >
    <path d="M21.6 14.3L5.5 31h6.4l14.6-15L11.9 1H5.5l16.1 16.7v-3.4z" />
  </svg>
);

export const RightArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    focusable="false"
    aria-hidden="true"
    width="12"
    height="12"
    className={className}
  >
    <g>
      <path d="M12.6,26.7L23.2,16L12.6,5.3H8.8v21.4H12.6z" />
    </g>
  </svg>
);

export const Close = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="12"
    height="12"
    className={className}
    focusable="false"
    aria-hidden="true"
  >
    <path d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9z" />
  </svg>
);

export const Play = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="12"
    height="12"
    className={className}
    focusable="false"
    aria-hidden="true"
  >
    <path d="M29 16 5.8 1v30z" />
  </svg>
);
