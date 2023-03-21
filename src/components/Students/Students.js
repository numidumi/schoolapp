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

const Students = () => {
  return (
    <div className="main">
      <Cards
        name="Metehan"
        lastName="Altundal"
        desc="Metehan ist 18 Jahre alt und kommt aus Dornbirn. 
              Die Geschichte ist sein Spezialgebiet."
        colors="blue"
        image={metehan}
        flag={turkey}
      />
      <Cards
        name="Florian"
        lastName="Blum"
        desc="Florian ist 18 und wurde in Dornbirn geboren."
        colors="orange"
        image={flo}
        flag={austria}
      />
      <Cards
        name="Mathias"
        lastName="Buchwald"
        desc="Mathias ist 18 und wurde in Dornbirn geboren."
        colors="brown"
        image={mathias}
        flag={austria}
      />
      <Cards
        name="Atakan"
        lastName="Celik"
        desc="Atakan ist 19 und ist gebürtiger Dornbirner. Er ist der beste Kickboxer."
        colors="green"
        image={atakan}
        flag={turkey}
      />
      <Cards
        name="Christoph"
        lastName="Derigo"
        desc="Christoph ist 19 und wurde in Dornbirn geboren. In seiner Freizeit spielt er gerne Volleyball."
        colors="green"
        image={chris}
        flag={austria}
      />
      <Cards
        name="Numan"
        lastName="Erter"
        desc="Numan ist 18 und wurde in Dornbirn geboren."
        colors="brown"
        image={numan}
        flag={turkey}
      />
      <Cards
        name="Yannik"
        lastName="Fischer"
        desc="Yannik ist 19 und wurde in Dornbirn geboren."
        colors="orange"
        image={yannik}
        flag={austria}
      />
      <Cards
        name="Sebastian"
        lastName="Gärtner"
        desc="Sebastian ist 19 und wurde in Dornbirn geboren."
        colors="blue"
        image={sebi}
        flag={austria}
      />
      <Cards
        name="Sven"
        lastName="Hartmann"
        desc="Sven ist 18 und wurde in Dornbirn geboren."
        colors="blue"
        image={sven}
        flag={austria}
      />
      <Cards
        name="Niclas"
        lastName="Kostelac"
        desc="Niclas ist 18 und wurde in Dornbirn geboren."
        colors="orange"
        image={niclas}
        flag={austria}
      />
      <Cards
        name="Kai"
        lastName="Mayer"
        desc="Kai ist 19 und wurde in Dornbirn geboren."
        colors="brown"
        image={kai}
        flag={austria}
      />
      <Cards
        name="Kristijan"
        lastName="Mladenovic"
        desc="Kristijan ist 19 und kommt aus Hohenems. Er liebt es zu programmieren."
        colors="green"
        image={kris}
        flag={serbia}
      />
      <Cards
        name="Matthias"
        lastName="Tschmelitsch"
        desc="Matthias ist 18 und wurde in Dornbirn geboren."
        colors="green"
        image={matthias}
        flag={austria}
      />
      <Cards
        name="Fabian"
        lastName="Türtscher"
        desc="Fabian ist 18 und wurde in Dornbirn geboren."
        colors="brown"
        image={fabian}
        flag={austria}
      />
      <Cards
        name="Elias"
        lastName="Wohlgenannt"
        desc="Elias ist 19 und wurde in Dornbirn geboren."
        colors="orange"
        image={elias}
        flag={austria}
      />
    </div>
  );
};

export default Students;
