import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo"
import Main from "../components/main";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <meta charset="UTF-8"></meta>
    <Main />
  </Layout>
);

export default IndexPage;
