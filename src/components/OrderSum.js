import React from "react";
import { Link } from "react-router-dom";


const OrderSum = ({
  pizzaAdet,
  sayacArttir,
  sayacAzalt,
  malzemeFiyat,
  toplamFiyat,
  secimler,
}) => {
  return (
    <div className="order-sum">
      <div className="button-adet-group">
        <button className="button-adet" id="adet-azalt" onClick={sayacAzalt}>
          <i className="fa-solid fa-minus" />
        </button>

        <input className="input-adet" value={pizzaAdet} />
        <button className="button-adet" id="adet-arttir" onClick={sayacArttir}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    <form onSubmit={(e) => e.preventDefault()} >
           <div className="sipariş-toplam">
        <h3>Sipariş Toplamı</h3>
        <div className="div-group" >
          <label htmlFor="secim-toplam">Seçimler</label>
          <span id="secim-toplam">{secimler}₺</span>
        </div>
        <div className="div-group" id="toplam-style">
          <label htmlFor="toplam-fiyat">Toplam</label>
          <span id="toplam-fiyat">{toplamFiyat}₺</span>
        </div>
        <Link id="order-button"  to="/order-button">
        <button className="siparis-ver-button" type="submit">SİPARİŞ VER</button>
        </Link>
        
      </div>
    </form>
   
    </div>
  );
};

export default OrderSum;
