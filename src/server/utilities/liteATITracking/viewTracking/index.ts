export default () => {
  const MIN_VIEWED_PERCENT = 0.5;
  const VIEWED_DURATION_MS = 1000;

  const options = { threshold: MIN_VIEWED_PERCENT };

  const observer = new IntersectionObserver(entries => {
    console.log('INTERSECTION OBSERVER LOADED', entries.length);
    for (let i = 0; i < entries.length; i += 1) {
      const entry = entries[i];
      console.log('ENTRY', entry);
      if (entry.isIntersecting) {
        console.log('IS INTERSECTING');
        const { target } = entry;
        const atiURL = target.getAttribute('data-lite-ati-view-tracking');

        const startTime = new Date().getTime();
        let currTime = startTime;
        while (currTime - startTime < VIEWED_DURATION_MS) {
          currTime = new Date().getTime();
        }

        console.log('SENDING INTERSECTION');
        window.processClientDeviceAndSendLite(atiURL as string);
        observer.unobserve(target);
      }
    }
  }, options);

  // const targets = document.querySelectorAll('[data-lite-ati-view-tracking]');
  const targets = [];
  const allElements = document.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i += 1) {
    const element = allElements[i];
    const hasLiteViewTrackerUrl = element.getAttribute(
      'data-lite-ati-view-tracking',
    );
    if (hasLiteViewTrackerUrl) {
      targets.push(element);
    }
  }

  console.log('TARGETS', targets.length);
  for (let i = 0; i < targets.length; i += 1) {
    observer.observe(targets[i]);
  }
};
