import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content">
      <div className="font-style">
        <h1 className="h1-font">Teknolojik Yemekler</h1>
        <p className="header2-font">
          KOD ACIKTIRIR,
          <br /> PİZZA DOYURUR
        </p>
        <button className="button1">ACIKTIM</button>
      </div>

      <img src="./banner.png" alt="" width="1363px" height="553px" />
    </div>
  );
};
export default Header;
