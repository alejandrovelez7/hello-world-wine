import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WineCard from "./wine-card";

const Main = () => {
  return (
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <StaticImage
            src="../images/erika-1.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            className="img-fluid"
            alt="Rocky!"
          />
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/riesling.jpeg"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  className="img-fluid"
                  alt="Riesling Kabinett"
                />
                <WineCard
                  name="Weinkelter Reisling"
                  description="Bright, fresh, and acidic. Classic example of a Riesling from the Mosel region in Germany."
                  link=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/dry-creek.png"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  alt="Chenin Blanc"
                />
                <WineCard
                  name="Dry Creek Chenin"
                  description="Crisp, dry white from Sonoma County. Made in the style of the Loire valley."
                  link=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/albarino.png"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  className="img-fluid"
                  alt="albarino"
                />
                <WineCard
                  name="Burgans Albariño"
                  description="Citrus and minerals come together! Albariño wines are known for their peculiar salinity."
                  link=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/burg.png"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  className="img-fluid"
                  alt="Cote de Nuits-Villages"
                />
                <WineCard
                  name="Cote de Nuits-Villages"
                  description="Introductory Burgundy Pinot Noir. (Not the peasant's grape!). Dry cherries, and mushrooms."
                  link=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/rioja.png"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  className="img-fluid"
                  alt="Rioja Alta"
                />
                <WineCard
                  name="Viña Ardanza"
                  description="Value Rioja Alta tempranillo. Leather and plums make a great pairing with meats and strong cheeses."
                  link=""
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <StaticImage
                  src="../images/barbera.png"
                  width={300}
                  height={225}
                  transformOptions={{fit: "contain", cropFocus: "entropy", background: { r: 0, g: 0, b: 0, alpha: 0.5 }}}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  className="img-fluid"
                  alt="Barbera D'Asti"
                />
                <WineCard
                  name="La Spinetta Barbera D'Asti"
                  description="Barbera from Italy. Easy drinking red, perfect for pizza!"
                  link=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
