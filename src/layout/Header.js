import React from "react";
import Logo from "../Assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-style">
        <img src={Logo} alt="" />
        <nav className="nav-style">
          <a href="/">Anasayfa</a>
          <a href="/order-pizza">
            {" "}
            - <b>Sipariş Oluştur</b>
          </a>
        </nav>
      </div>
      <div className="container">
        <p>Position Absolute Acı Pizza</p>
        <p>85.50t</p>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
    </div>
  );
}

export default Header;
