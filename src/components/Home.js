import React from "react";
import "./Home.css";
import Logo from "../Assets/logo.svg";

const Home = () => {
  return (
    <div className="header-content">
      <div className="font-style">
        <img src={Logo} alt="" />
        <p className="firsat-font"> fıratı kaçırma</p>
        <p className="header2-font">KOD ACIKTIRIR,</p>
        <p className="header3-font">PİZZA, DOYURUR</p>
        <a className="button1" type="button" href="/order-pizza">ACIKTIM </a>
      </div>
    </div>
  );
};
export default Home;
