import { LITE_TRACKER_FUNCTION } from '#app/hooks/useClickTrackerHandler';

export default (html: string) => {
  let modifiedHtml = html;

  try {
    const tagsWithLiteTracker =
      modifiedHtml.match(/<[^>]*\badd-lite-tracker-params[^>]*>/g) || [];

    tagsWithLiteTracker.forEach(tag => {
      const matches = tag?.match(/add-lite-tracker-params="([^"]*)"/);
      const toReplace = matches?.[0];
      const atiURL = matches?.[1];

      if (toReplace && atiURL) {
        modifiedHtml = modifiedHtml.replace(
          tag,
          tag.replace(
            toReplace,
            `onclick='${LITE_TRACKER_FUNCTION}("${atiURL}")'`,
          ),
        );
      }
    });
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (() => {})();
  }

  return modifiedHtml;
};
