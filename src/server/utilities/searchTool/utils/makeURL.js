import Url from "url-parse";

const makePhobosURL = ({
  testEnv,
  metadataID,
  lastPublishedFrom,
  lastPublishedTo,
  lastUpdatedFrom,
  lastUpdatedTo,
  status,
  metadataType,
  offset,
  limit,
  sectionUri,
  sectionName,
  sortByLastPublished,
}) => {
  const queryParameters = {
    ...(metadataID && { "metadata.id": metadataID }),
    ...(lastPublishedFrom && { lastPublishedFrom: lastPublishedFrom }),
    ...(lastPublishedTo && { lastPublishedTo: lastPublishedTo }),
    ...(lastUpdatedFrom && { lastUpdatedFrom: lastUpdatedFrom }),
    ...(lastUpdatedTo && { lastUpdatedTo: lastUpdatedTo }),
    ...(status && { status: status }),
    ...(metadataType && { "metadata.type": metadataType }),
    ...(offset && { offset: offset }),
    ...(limit && { limit: limit }),
    ...(sectionUri && { "section.uri": sectionUri }),
    ...(sectionName && { "section.name": sectionName }),
    ...(sortByLastPublished && { sortByLastPublished: sortByLastPublished }),
    responseType: "aresUrl",
  };

  const url = Url(
    `https://phobos-api${testEnv ? ".test" : ""}.api.bbci.co.uk/api/search/site`
  ).set("query", queryParameters);

  return url.href;
};

export default makePhobosURL;
