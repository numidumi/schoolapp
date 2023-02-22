import React from "react";
import "./App.css";
import Cards from "./components/Cards.js";
import atakan from "./components/images/atakan.png";
import kris from "./components/images/kris.png";
import metehan from "./components/images/metehan.png";
import chris from "./components/images/chris.png";
import serbia from "./components/images/serbia.png";
import turkey from "./components/images/turkey.png";
import austria from "./components/images/austria.png";
import Header from "./components/Header/Header.js";
import Home from "./components/subpages/Home.js";
import Teachers from "./components/subpages/Teachers.js";
import Students from "./components/subpages/Students.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
        name="Kristijan"
        lastName="Mladenovic"
        desc="Kristijan ist 19 und kommt aus Hohenems. Er liebt es zu programmieren."
        colors="red"
        image={kris}
        flag={serbia}
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
      <Footer />
    </div>
  );
}

export default App;
