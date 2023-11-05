import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <div className="font-style">
        <h1 className="h1-font">Teknolojik Yemekler</h1>
        <p className="firsat-font"> fıratı kaçırma</p>
        <p className="header2-font">
          KOD ACIKTIRIR,</p>
        <p className="header2-font">PİZZA, DOYURUR</p>
        <button className="button1">ACIKTIM</button>
      </div>
    </div>
  );
};
export default Header;
