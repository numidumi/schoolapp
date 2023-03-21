import React from "react";
import "./Header.css";
import "./footer.css"

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">HTL</h1>
        <h1 className="dornbirn">Dornbirn</h1>
      </header>
      <footer className="footer">
        <h1 className="footer_title">Schuljahr</h1>
        <h1 className="year">2023</h1>
      </footer>
    </div>
  );
};

export default Header;
