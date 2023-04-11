import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
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
