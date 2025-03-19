import lensPath from 'ramda/src/lensPath';
import view from 'ramda/src/view';
import set from 'ramda/src/set';
import getUUID from '#app/lib/utilities/getUUID';

const addIdsToItem =
  ({ lens, customKeyName, recursive }) =>
  item => {
    const [shortId] = getUUID().split('-');
    const newItem = { [customKeyName || 'id']: shortId, ...item };

    if (recursive) {
      const nestedItems = view(lens, newItem);

      if (nestedItems) {
        return set(
          lens,
          nestedItems.map(addIdsToItem({ lens, recursive })),
          newItem,
        );
      }
    }

    return newItem;
  };

export default ({ pathToItems, customKeyName, recursive }) =>
  json => {
    const lens = lensPath(pathToItems);
    const items = view(lens, json);

    if (items) {
      const newItems = items.map(
        addIdsToItem({ lens, customKeyName, recursive }),
      );

      return set(lens, newItems, json);
    }

    return json;
  };
