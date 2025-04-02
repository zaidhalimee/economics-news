export type Recommendation = {
  title: string;
  image: {
    width: number;
    height: number;
    altText: string;
    copyrightHolder: string;
    originCode: string;
    locator: string;
  };
  href: string;
};
