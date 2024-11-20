/* eslint-disable no-restricted-syntax */
export default () => {
  describe('Analytics', () => {
    const noscriptImage = document.querySelector('noscript');

    const parser = new DOMParser();
    const [img] = parser.parseFromString(
      noscriptImage.innerHTML,
      'text/html',
    ).images;
    const src = img.getAttribute('src');
    const srcUrl = new URL(src);

    img.removeAttribute('src');

    describe('ATI', () => {
      describe('noscript image', () => {
        it('exists', () => {
          expect(noscriptImage).toBeInTheDocument();
          expect(noscriptImage.innerHTML).toMatch('x8=[simorgh-nojs]');
        });

        it('has attributes excluding src', () => {
          expect(img).toMatchSnapshot();
        });

        it('has src with host', () => {
          expect(`${srcUrl.origin}${srcUrl.pathname}`).toMatchSnapshot();
        });

        it('has src with search params', () => {
          const searchParams = [];
          for (const [key, value] of srcUrl.searchParams.entries()) {
            searchParams.push({ [key]: value });
          }

          expect(searchParams).toMatchSnapshot();
        });
      });
    });
  });
};
