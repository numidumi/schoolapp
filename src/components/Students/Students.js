import React from "react";
import atakan from "./images/atakan.png";
import kris from "./images/kris.png";
import metehan from "./images/metehan.png";
import flo from "./images/flo.png";
import chris from "./images/chris.png";
import kai from "./images/kai.png";
import sebi from "./images/sebi.png";
import numan from "./images/numan.png";
import fabian from "./images/fabian.png";
import matthias from "./images/matthias.png";
import elias from "./images/elias.png";
import mathias from "./images/mathias.png";
import yannik from "./images/yannik.png";
import sven from "./images/sven.png";
import niclas from "./images/niclas.png";
import serbia from "./images/serbia.png";
import turkey from "./images/turkey.png";
import austria from "./images/austria.png";
import Cards from "./Cards.js";
import Grid from "@mui/material/Grid";
import Footer from "./Footer/Footer.js";

const Students = () => {
  return (
    <div className="wrapper">
      <Grid container spacing={1}>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Metehan"
            lastName="Altundal"
            desc="Metehan ist 18 Jahre alt und kommt aus Dornbirn. 
              Die Geschichte ist sein Spezialgebiet."
            colors="blue"
            image={metehan}
            flag={turkey}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Florian"
            lastName="Blum"
            desc="Florian ist 18 und wurde in Dornbirn geboren."
            colors="orange"
            image={flo}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Mathias"
            lastName="Buchwald"
            desc="Mathias ist 18 und wurde in Dornbirn geboren."
            colors="navy"
            image={mathias}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Atakan"
            lastName="Celik"
            desc="Atakan ist 19 und ist gebürtiger Dornbirner. Er ist der beste Kickboxer."
            colors="darkgreen"
            image={atakan}
            flag={turkey}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Christoph"
            lastName="Derigo"
            desc="Christoph ist 19 und wurde in Dornbirn geboren. In seiner Freizeit spielt er gerne Volleyball."
            colors="gold"
            image={chris}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Numan"
            lastName="Erter"
            desc="Numan ist 18 und wurde in Dornbirn geboren."
            colors="brown"
            image={numan}
            flag={turkey}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Yannik"
            lastName="Fischer"
            desc="Yannik ist 19 und wurde in Dornbirn geboren."
            colors="black"
            image={yannik}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Sebastian"
            lastName="Gärtner"
            desc="Sebastian ist 19 und wurde in Dornbirn geboren."
            colors="#ff8009"
            image={sebi}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Sven"
            lastName="Hartmann"
            desc="Sven ist 18 und wurde in Dornbirn geboren."
            colors="cyan"
            image={sven}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Niclas"
            lastName="Kostelac"
            desc="Niclas ist 18 und wurde in Dornbirn geboren."
            colors="pink"
            image={niclas}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Kai"
            lastName="Mayer"
            desc="Kai ist 19 und wurde in Dornbirn geboren."
            colors="brown"
            image={kai}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Kristijan"
            lastName="Mladenovic"
            desc="Kristijan ist 19 und kommt aus Hohenems. Er liebt es zu programmieren."
            colors="purple"
            image={kris}
            flag={serbia}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Matthias"
            lastName="Tschmelitsch"
            desc="Matthias ist 18 und wurde in Dornbirn geboren."
            colors="green"
            image={matthias}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Fabian"
            lastName="Türtscher"
            desc="Fabian ist 18 und wurde in Dornbirn geboren."
            colors="grey"
            image={fabian}
            flag={austria}
          />
        </Grid>
        <Grid item xs={10} md={5} lg={2.8}>
          <Cards
            name="Elias"
            lastName="Wohlgenannt"
            desc="Elias ist 19 und wurde in Dornbirn geboren."
            colors="yellow"
            image={elias}
            flag={austria}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Students;
