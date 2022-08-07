import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Rioja = () => (
  <Layout>
    <Seo title="Rioja" />
    <div className="container my-5">
      <h1 className="text-center">Viña Ardanza</h1>
      <div className="container"></div> 
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default Rioja;
