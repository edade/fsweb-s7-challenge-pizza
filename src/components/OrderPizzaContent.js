import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { useEffect } from "react";
import OrderSum from "./OrderSum";
import Note from "./Note";

const OrderPizzaContent = () => {
  const [pizzaFiyat, setPizzaFiyat] = useState(85.5);
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);
  const [pizzaAdet, setPizzaAdet] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(pizzaFiyat);
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [secimler, setSecimler] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);

  const inputChangeHandler = (e) => setBoyut(e.target.value);

  const selectChangeHandler = (e) => setHamur(e.target.value);

  const checkboxChangeHandler = (malzeme) => {
    if (seciliMalzemeler.includes(malzeme)) {
      setSeciliMalzemeler(seciliMalzemeler.filter((item) => item !== malzeme));
    } else {
      setSeciliMalzemeler([...seciliMalzemeler, malzeme]);
    }
  };

  const sayacArttir = () => {
    setPizzaAdet(pizzaAdet + 1);
  };

  const sayacAzalt = () => {
    setPizzaAdet(pizzaAdet - 1);
  };

  useEffect(() => {
    if (boyut === "küçük") {
      setToplamFiyat(pizzaAdet * pizzaFiyat + 5);
    } else if (boyut === "orta") {
      setToplamFiyat(pizzaAdet * pizzaFiyat + 15);
    } else if (boyut === "büyük") {
      setToplamFiyat(pizzaAdet * pizzaFiyat + 25);
    }
  }, [pizzaAdet, pizzaFiyat, boyut]);

  useEffect(() => {
    setToplamFiyat(pizzaAdet * pizzaFiyat);
  }, [pizzaAdet]);

  useEffect(() => {
    if (hamur === "ince") {
      setToplamFiyat(toplamFiyat + 25);
    }
    else if (hamur === "standart") {
      setToplamFiyat(toplamFiyat + 50);
    }
    else if (hamur === "kalın") {
      setToplamFiyat(toplamFiyat + 70);
    }
  }, [hamur]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <div>
        <h1>Position Absolute Acı Pizza</h1>
        <p className="fiyat-style">
          {pizzaFiyat}
          <span>₺</span>
        </p>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <form className="same-row" onSubmit={handleSubmit}>
        <div className="boyutSec" id="size-dropdown">
          <h2>
            Boyut Seç <span className="star-style">*</span>{" "}
          </h2>
          <div>
            <input
              type="radio"
              id="small"
              value={"küçük"}
              name="boyut"
              onChange={inputChangeHandler}
            />
            <label htmlFor="small">Küçük</label>
          </div>
          <div>
            <input
              type="radio"
              id="medium"
              value={"orta"}
              name="boyut"
              onChange={inputChangeHandler}
            />
            <label htmlFor="medium">Orta</label>
          </div>
          <div>
            <input
              type="radio"
              id="large"
              value={"büyük"}
              name="boyut"
              onChange={inputChangeHandler }
            />
            <label htmlFor="large">Büyük</label>
          </div>
        </div>
        <div className="hamurSec">
          <h2>
            Hamur Seç <span className="star-style">*</span>{" "}
          </h2>
          <select id="pizza" value={hamur} onChange={selectChangeHandler}>
            <option value={"hamur-kalınlığı"}>Hamur Kalınlığı</option>
            <option value={"ince"}>İnce</option>
            <option value={"standart"}>Standart</option>
            <option value={"kalın"}>Kalın</option>
          </select>
        </div>
      </form>

      <form>
        <div>
          <h2>Ek malzemeler</h2>

          <p>En fazla 10 Malzeme seçebilirsiniz 5₺</p>
        </div>
        <Checkbox checkbox= {checkbox} checkboxChangeHandler={checkboxChangeHandler} seciliMalzemeler={seciliMalzemeler} />
      </form>
      <Note />
      <OrderSum
        pizzaAdet={pizzaAdet}
        sayacArttir={sayacArttir}
        sayacAzalt={sayacAzalt}
        malzemeFiyat={malzemeFiyat}
        toplamFiyat={toplamFiyat}
        secimler={secimler}
      />
    </div>
  );
};

export default OrderPizzaContent;
