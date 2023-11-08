import React from "react";
import Logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header-style">
        <img src={Logo} alt="" />
        <nav className="nav-style">
          <Link to="/">Anasayfa</Link>
          <Link to= "/order-pizza">
            - <b>Sipariş Oluştur</b>
          </Link>
        </nav>
      </div>
    </div>
  );
}


export default Header;
