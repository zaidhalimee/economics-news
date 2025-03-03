export default () => {
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver(entries => {
    console.log('INTERSECTION OBSERVER LOADED');
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('IS INTERSECTING');
        const { target } = entry;
        const atiURL = target.getAttribute('data-lite-ati-view-tracking');
        setTimeout(() => {
          window.processClientDeviceAndSendLite(atiURL as string);
          observer.unobserve(target);
        }, 1000);
      }
    });
  }, options);

  const targets = document.querySelectorAll('[data-lite-ati-view-tracking]');
  targets.forEach(target => observer.observe(target));
};
