import React from "react";
import "./OrderPizzaContent";
import { useState } from "react";

const OrderPizzaContent = () => {
  const [pizzaFiyat, setPizzaFiyat] = useState(85.5);
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);
  const [pizzaAdet, setPizzaAdet] = useState(1);

  const changeHandler = (e) => {};

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <div>
        <h1>Position Absolute Acı Pizza</h1>
        <p>{(pizzaFiyat + malzemeFiyat) * pizzaAdet}</p>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="BoyutSec">
            <div className="boyut">
              <h2>Boyut Seç *</h2>
              <input
                type="radio"
                id="small"
                value={"small"}
                onChange={changeHandler}
              />
              <label htmlFor="small">Küçük</label>
              <input
                type="radio"
                id="medium"
                value={"medium"}
                onChange={changeHandler}
              />
              <label htmlFor="medium">Orta</label>
              <input
                type="radio"
                id="large"
                value={"large"}
                onChange={changeHandler}
              />
              <label htmlFor="large">Büçük</label>
            </div>
            <div className="column">
              <h2>Hamur Seç *</h2>
              <select
                id="pizza"
                name="hamur"
                defaultValue="none"
                onChange={changeHandler}
              >
                <option value="none" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderPizzaContent;
