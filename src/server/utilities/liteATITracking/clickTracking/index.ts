export const LITE_ATI_CLICK_TRACKING = 'data-lite-ati-click';

export default () => {
  document.addEventListener('click', (event: MouseEvent) => {
    let targetElement;
    const clickedElement = event.target as HTMLElement;

    let currentElement = clickedElement;
    while (currentElement) {
      if (currentElement.tagName === 'A') {
        targetElement = currentElement;
        break;
      }
      currentElement = currentElement.parentElement as HTMLElement;
    }

    if (targetElement?.tagName === 'A') {
      event.stopPropagation();
      event.preventDefault();

      const atiURL = targetElement.getAttribute(LITE_ATI_CLICK_TRACKING);
      const anchorElement = targetElement as HTMLAnchorElement;
      const nextPageUrl = anchorElement?.href;

      window.processClientDeviceAndSendLite(atiURL as string);
      window.location.assign(nextPageUrl);
    }
  });
};
