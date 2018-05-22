import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Headline from "./Headline";
import Helmet from "react-helmet";

class Article extends React.Component {
  render() {
    const headline = "Standard Article Headline";

    return (
      <Fragment>
        <Helmet htmlAttributes={{ lang: "en-GB" }}>
          <title>{headline}</title>
        </Helmet>
        <NavLink to="/">Home</NavLink>
        <Headline text={headline} />
      </Fragment>
    );
  }
}

export default Article;
