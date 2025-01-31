import { ReactElement } from 'react';

const getPropsExcludingDataReactHelmet = (props: object) => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => key !== 'data-react-helmet'),
  );
};

export default (tags: ReactElement | ReactElement[]) => {
  if (Array.isArray(tags)) {
    const modifiedTags = Array.from(tags).map(tag => {
      const modifiedTag = {
        ...tag,
        props: getPropsExcludingDataReactHelmet(tag.props),
      };

      return modifiedTag;
    });

    return modifiedTags;
  }

  return {
    ...tags,
    props: getPropsExcludingDataReactHelmet(tags.props),
  };
};
