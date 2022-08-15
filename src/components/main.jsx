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
                  description="Bright, fresh, and acidic. Classic example of a Riesling from the Mosel region in Germany."
                  facts="Rieslings from the Mosel region of Germany are characterized by stone fruit, green apple, and crisp acidity. These vines grow on steep inclines in slate-based soils. "
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
                  facts="Fermented in 100% stainless steel barrels. This chenin blanc is characterized by aromas of honeydew, watermelon, and mango. Tastes of peach, lemon and cucumber."
                  pairing="Ham, Roast Pork, Chicken Kiev, Grouper, Fish & Chips, Shrimp Scampi. Also a great pick for Thanksgiving dinner!"
                  wineryInfo="Family owned and one of the older Sonoma County wineries. Dry Creek certifies that 100% of their estate vineyards are sustainably farmed."
                  link="https://www.vivino.com/US-OH/en/dry-creek-vineyard-dry-chenin-blanc-wilson-ranch/w/75885"
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
                  facts="Incredibly fruit forward for an “old world” wine, Albariño sings the song of relaxed and fulfilling Spanish coastal life."
                  pairing="Lean fish and shellfish. A great pairing for Spanish Paella!"
                  wineryInfo="Burgans is a custom blend made for European Cellars by Martin Codax, the largest cooperative in Rías-Baixas. Cooperatives source their grapes from many vineyards, and then are blended to form the perfect mix."
                  link="https://www.vivino.com/US-OH/en/burgans-rias-baixas-albarino/w/18113"
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
                  description="Introductory Burgundy Pinot Noir. Not the peasant's grape!"
                  facts="Burgundy is world renowned as the premier region for Pinot Noir. Some wines can cost tens of thousands of dollars. They are charactized by red fruit, and earthiness (think mushrooms)."
                  pairing="Steak, Lamb, Veal. Also works with tomato based sauces."
                  wineryInfo="Wineries in burgundy work a little differently than traditional wineries. Domaines source their grapes from all over Burgundy, and then make the different styles under the same label. Maison Joseph Drouhin owns parcels in about 90 different appelations. The name 'Côte de Nuits' comes from the town of Nuits-Saint-Georges, like Beaune, the capital of its own Côte (or slope)."
                  link="https://www.vivino.com/US-OH/en/joseph-drouhin-cote-de-nuits-villages/w/24106"
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
                  description="Introductory Rioja Reserva from a legendary winery."
                  facts="This wine is a blend of 78% tempranillo, and 22% garnacha. Rioja wines are known for aromas of leather paired with plums."
                  pairing="Red meats, strong cheeses like manchego, hearty vegetable stews."
                  wineryInfo="Founded in 1890 La Rioja Alta is one of the only wineries in the rioja region to be able to produce Gran Reserva level wines. Gran Reserva classified wines need to be stored in barrels for 2+ years then stored in bottles for 2 more years. La Rioja Alta has a firm commitment to honor the traditional way of making wine while still incorporating new technologies in the wine making process."
                  link="https://www.vivino.com/US-OH/en/la-rioja-alta-vina-ardanza-reserva/w/7973"
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
                  facts="Barbera D'Asti is the go to wine for college kids in Italy. It is easy drinking and relatively cheap but still has great high quality."
                  pairing="Anything italian! Goes great with pizza, red sauces, and lasagna."
                  wineryInfo="Spinetta makes multiple different types of wines including: Moscato, Barbaresco, and Barolo. They emphasize low yields in order to concentrate flavor on the remaining grapes. The rhinoceros on its label is an ode to a sketch of a rhino by German artist, Albrecht Durer. Durer sketched the rhino off of description in 1515 without ever seeing one. He used clever imagination and creativity to make a masterpiece – just like a winemaker."
                  link="https://www.vivino.com/US-OH/en/la-spinetta-ca-di-pian-barbera-d-asti/w/15167"
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
