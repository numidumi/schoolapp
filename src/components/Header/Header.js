import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">HTL</h1>
        <h1 className="dornbirn">Dornbirn</h1>
        <h1 className="home">Home</h1>
        <h1 className="students">Students</h1>
        <h1 className="aboutus">About us</h1>
      </header>
    </div>
  );
};

export default Header;
