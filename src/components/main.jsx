import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WineCard from "./wine-card";

const Main = () => {
  return (
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1>&#127803; Erika's Bachelorette Party &#127881;</h1>
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
                  facts="Riesling's from the Mosel region of Germany are characterized by stone fruit, green apple, and crisp acidity. These vines grow on steep inclines in slate-based soils. "
                  description="Bright, fresh, and acidic. Classic example of a Riesling from the Mosel region in Germany."
                  pairing="Chinese food, Cajun cuisine, Tex-Mex (with cilantro), roasted pork, roasted duck or goose, seafood, Thai food"
                  wineryInfo="Hermann wine estate is located in the town of Ürzig in the Mosel. The family has been involved in winemaking for several centuries. The vineyards are managed in a sustainable manner and the work is all done by hand. The work in the vineyards is particularly challenging considering that the slopes are close to a 90° slope."
                  link="https://www.vivino.com/US-OH/en/weinkelter-riesling-kabinett-urziger-wurzgarten-white-wine-v-hvcyq/w/4951553"
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
                  link="https://www.vivino.com/US-OH/en/dry-creek-vineyard-dry-chenin-blanc-wilson-ranch/w/75885"
                  additionalInformation="Extremely versatile and food friendly white wine. This one is fermented in 100% stainless steel barrels. At first swirl, aromatics of honeydew, watermelon and mango spring forward from the glass with floral notes of jasmine and orange blossom. On the palate, the wine has refreshing flavors of peach, Meyer lemon and cucumber with hints of geranium, white tea and white pepper."
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
