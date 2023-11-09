import React from "react";
import Logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header-content">
      <div className="font-style">
        <img src={Logo} alt="" />
        <p className="firsat-font"> fırsatı kaçırma</p>
        <p className="header2-font">KOD ACIKTIRIR </p>
        <p className="header3-font">PİZZA, DOYURUR</p>
        <Link to="/order-pizza" id="order-pizza" className="button1" type="button" >ACIKTIM </Link>
      </div>
    </div>
  );
};
export default Home;
