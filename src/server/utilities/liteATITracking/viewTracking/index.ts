export default async () => {
  if (typeof window.IntersectionObserver === 'undefined') {
    console.log('OBSERVER POLYFILL ME OUT!!!!');
    // Polyfill IntersectionObserver, e.g. for IE11
    await import('intersection-observer');
  }

  const observer = new IntersectionObserver(entries => {
    console.log('CHECK ME OUT!!!!');
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;
        const atiURL = target.getAttribute('data-lite-ati-view-tracking');
        setTimeout(() => {
          window.processClientDeviceAndSendLite(atiURL as string);
          observer.unobserve(target);
        }, 1000);
      }
    });
  });

  const targets = document.querySelectorAll('[data-lite-ati-view-tracking]');
  targets.forEach(target => observer.observe(target));
};
