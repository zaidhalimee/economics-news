export default () => {
  describe('Lite Site Cta', () => {
    const liteSiteCta = document.querySelector("section[data-e2e='lite-cta']");

    it('should be in the document', () => {
      expect(liteSiteCta).toBeInTheDocument();
    });

    it('should match snapshot', () => {
      expect(liteSiteCta).toMatchSnapshot();
    });
  });

  describe('data-react-helmet attribute', () => {
    const tagsWithDataReactHelmet = document.querySelectorAll(
      '[data-react-helmet="true"]',
    );

    it('should not be in the document', () => {
      expect(tagsWithDataReactHelmet).toHaveLength(0);
    });
  });
};
