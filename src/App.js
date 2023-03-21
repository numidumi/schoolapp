import React from "react";
import "./App.css";
import Cards from "./components/Students/Cards.js";
import Header from "./components/Header/Header.js";
import Home from "./components/subpages/Home.js";
import Teachers from "./components/subpages/Teachers.js";
import Students from "./components/Students/Students.js";

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
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
=======
      <Students />
>>>>>>> 0fb798f1d1cdec8cef5e1a61f06c006a6842f06e
    </div>
  );
}

export default App;
