export default (html: string) => {
  let modifiedHtml = html;

  try {
    const tags = modifiedHtml.match(/<[^>]*>/g) || [];

    tags.forEach(tag => {
      const dataReactHelmetAttribute = tag?.includes(
        'data-react-helmet="true"',
      );

      if (dataReactHelmetAttribute) {
        modifiedHtml = modifiedHtml.replace(
          tag,
          tag.replace(' data-react-helmet="true"', ''),
        );
      }
    });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (() => {})();
  }

  return modifiedHtml;
};
