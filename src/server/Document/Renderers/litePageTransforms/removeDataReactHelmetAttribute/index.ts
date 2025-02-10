import { ReactElement } from 'react';

const getPropsExcludingDataReactHelmet = (props: object) => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => key !== 'data-react-helmet'),
  );
};

export default (tags: ReactElement | ReactElement[]) => {
  if (Array.isArray(tags)) {
    return tags.map(tag => {
      return {
        ...tag,
        props: getPropsExcludingDataReactHelmet(tag.props),
      };
    });
  }

  return {
    ...tags,
    props: getPropsExcludingDataReactHelmet(tags.props),
  };
};
