export default pathname => {
  describe('canonical Lite Site CTA', () => {
    it('should have an inline link', () => {
      const liteSiteCTA = document.querySelector(`a[href="${pathname}.lite"]`);
      expect(liteSiteCTA).toBeInTheDocument();
    });
  });
};
