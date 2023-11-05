import React from "react";
import "./Navbar.css";
import icon from "../Assets/adv-aseets/icons/1.svg";
import icon2 from "../Assets/adv-aseets/icons/2.svg";
import icon3 from "../Assets/adv-aseets/icons/3.svg";
import icon4 from "../Assets/adv-aseets/icons/4.svg";
import icon5 from "../Assets/adv-aseets/icons/5.svg";
import icon6 from "../Assets/adv-aseets/icons/6.svg";

function Navbar() {
  return (
    <div>
      <nav className="navbar-content">
        <a href="">
          {" "}
          <img className="icon" src={icon} />
          YENİ! Kore
        </a>

        <a href="">
          <img className="icon" src={icon2} />
          Pizza
        </a>

        <a href="">
          <img className="icon" src={icon3} />
          Burger
        </a>

        <a href="">
          <img className="icon" src={icon4} />
          Kızartmalar
        </a>

        <a href="">
          <img className="icon" src={icon5} />
          Fast Food
        </a>

        <a href="">
          <img className="icon" src={icon6} />
          Gazlı İçecekler
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
