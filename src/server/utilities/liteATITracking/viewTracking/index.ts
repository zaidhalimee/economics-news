export default () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;
        const atiURL = target.getAttribute('data-lite-ati-view-tracking');
        setTimeout(() => {
          window.processClientAndSend(atiURL as string);
          observer.unobserve(target);
        }, 1000);
      }
    });
  });

  const targets = document.querySelectorAll('[data-lite-ati-view-tracking]');
  targets.forEach(target => observer.observe(target));
};
