import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <div className="container my-5">
      <div className="container-lg">
        <h1 className="text-center">Hello World Wine</h1>
        <div className="d-flex justify-content-evenly">
          <div className="container-lg w-100">
            <StaticImage
                src="../images/ale.jpeg"
                width={500}
                quality={95}
                formats={["AUTO", "WEBP"]}
                className="img-fluid w-100"
                alt="Ale!"
            />
          </div>
          <div className="align-self-center container-sm flex-shrink-1">
            <p>
              When learning a new programming language the first thing student's are taught is how to make the computer print out "Hello World!". 
              A tradition started started in the 1970s still widely in use today as a barometer of whether your program is working correctly. It lets us know that our first step is sound, and opens up a world of possibilities!
            </p>
            <p>
              In the vast and intimidating world of wine it can be daunting to try new things, but tastings can open our eyes to new styles and regions we may fall in love with. We are not wine experts, but through simple tastings we can help you say "Hello World!" to the world of wine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
