import React from "react";
import "./App.css";
import Cards from "./components/Cards.js";
import atakan from "./components/images/atakan.png";
import kris from "./components/images/kris.png";
import metehan from "./components/images/metehan.png";
import serbia from "./components/images/serbia.png";
import turkey from "./components/images/turkey.png";

function App() {
  return (
    <div className="App">
      <Cards
        name="Metehan"
        lastName="Altundal"
        desc="Metehan ist 18 Jahre alt und kommt aus Dornbirn. 
              Er liebt es zu programmieren. "
        colors="blue"
        image={metehan}
        flag={turkey}
      />
      <Cards
        name="Kristijan"
        lastName="Mladenovic"
        desc="Krisijan ist 19 und kommt aus Hohenems. Die Geschichte ist sein Spezialgebiet."
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
    </div>
  );
}

export default App;
