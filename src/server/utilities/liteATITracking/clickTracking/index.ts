export default () => {
  const clicktrackingFiredUrls: string[] = [];

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

      const atiURL = targetElement.getAttribute('data-lite-ati-tracking');
      const anchorElement = targetElement as HTMLAnchorElement;
      const nextPageUrl = anchorElement?.href;

      if (atiURL && !clicktrackingFiredUrls.includes(atiURL)) {
        window.processClientDeviceAndSendLite(atiURL as string);
        clicktrackingFiredUrls.push(atiURL);
      }

      window.location.assign(nextPageUrl);
    }
  });
};
