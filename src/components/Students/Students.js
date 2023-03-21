import React from "react";
import atakan from "./images/atakan.png";
import kris from "./images/kris.png";
import metehan from "./images/metehan.png";
import flo from "./images/flo.png";
import chris from "./images/chris.png";
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
        colors="blue"
        image={flo}
        flag={austria}
      />
      <Cards
        name="Mathias"
        lastName="Buchwald"
        desc="Mathias ist 18 und wurde in Dornbirn geboren."
        colors="yellow"
        image={flo}
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
        colors="orange"
        image={chris}
        flag={austria}
      />
      <Cards
        name="Numan"
        lastName="Erter"
        desc="Numan ist 18 und wurde in Dornbirn geboren."
        colors="brown"
        image={flo}
        flag={austria}
      />
      <Cards
        name="Yannik"
        lastName="Fischer"
        desc="Christoph ist 19 und wurde in Dornbirn geboren. In seiner Freizeit spielt er gerne Volleyball."
        colors="orange"
        image={chris}
        flag={austria}
      />
      <Cards
        name="Kristijan"
        lastName="Mladenovic"
        desc="Kristijan ist 19 und kommt aus Hohenems. Er liebt es zu programmieren."
        colors="red"
        image={kris}
        flag={serbia}
      />
    </div>
  );
};

export default Students;
