import React from "react";
import "./App.css";
import Cards from "./components/Students/Cards.js";
import Header from "./components/Header/Header.js";
import Home from "./components/subpages/Home.js";
import Teachers from "./components/subpages/Teachers.js";
import Students from "./components/Students/Students.js";
import Footer from "./components/Students/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
