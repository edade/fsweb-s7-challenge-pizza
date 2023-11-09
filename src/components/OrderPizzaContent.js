import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { useEffect } from "react";
import OrderSum from "./OrderSum";
import Note from "./Note";
import * as Yup from 'yup';

const OrderPizzaContent = () => {
  const [pizzaFiyat, setPizzaFiyat] = useState(85.5);
  const [pizzaAdet, setPizzaAdet] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(pizzaFiyat);
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [secimler, setSecimler] = useState(0);
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);

// boyut seçimini izleyip değişiklik olunca boyut state'ini günceller
  const inputChangeHandler = (e) => setBoyut(e.target.value);
// hamur seçimini izleyip değişiklik olunca hamur state'ini günceller
  const selectChangeHandler = (e) => setHamur(e.target.value);

// seçili malzemeler listesini izleyip değişiklik olunca malzemelerden biri seçiliyse tiki kaldırır seçili değilse tik koyar ve seçili malzemeler listesine malzemeyi ekler
  const checkboxChangeHandler = (malzeme) => {
    if (seciliMalzemeler.includes(malzeme)) {
      setSeciliMalzemeler(seciliMalzemeler.filter((item) => item !== malzeme));
    } else {
      setSeciliMalzemeler([...seciliMalzemeler, malzeme]);
    }
  };

  // order-pizza sayfasındaki buton ile pizza adedini 1 arttırır
  const sayacArttir = () => {
    setPizzaAdet(pizzaAdet + 1);
  };

  //order pizza sayfasındaki buton ile pizza adedini 1 azaltır
  const sayacAzalt = () => {
    setPizzaAdet(pizzaAdet - 1);
  };


  useEffect(() => {
    // Boyut seçildiğinde ek fiyatı hesaplayalım
    let boyutEkFiyat = 0;
    if (boyut === "küçük") {
      boyutEkFiyat = 0;
    } else if (boyut === "orta") {
      boyutEkFiyat = 10;
    } else if (boyut === "büyük") {
      boyutEkFiyat = 20;
    }
  
    // Hamur seçildiğinde ek fiyatı hesaplayalım
    let hamurEkFiyat = 0;
    if (hamur === "ince") {
      hamurEkFiyat = 0;
    } else if (hamur === "standart") {
      hamurEkFiyat = 30;
    } else if (hamur === "kalın") {
      hamurEkFiyat = 40;
    }
  
    // Seçili malzemelerin toplam fiyatını hesaplayalım
    let malzemeEkFiyat = seciliMalzemeler.length * 5;
  
    // Toplam fiyatı hesaplayıp ve güncelleyelim
    const yeniToplamFiyat = pizzaAdet * (pizzaFiyat + boyutEkFiyat + hamurEkFiyat + malzemeEkFiyat) ;
    setToplamFiyat(yeniToplamFiyat);
    setSecimler(boyutEkFiyat + hamurEkFiyat + seciliMalzemeler.length * 5);
  }, [boyut, hamur, pizzaAdet, pizzaFiyat, seciliMalzemeler]);

  // yup için
  /*
  2 form stateleri
  const [formState, setFormState] = useState({
    seciliMalzemeler: [],
    boyut: "",
    hamur: "",
    pizzaAdet: 1
  });

  const [formErrors, setFormErrors] = useState({
    seciliMalzemeler: "",
    boyut: "",
    hamur: "",
    pizzaAdet: ""

  });
  3.validasyon
  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    productFormSchema
        .isValid(formState)
        .then(valid => setFormValid(valid) );
      }, [formState]);


     1 FORM ŞEMASI
  const productFormSchema = Yup.object().shape({
    seciliMalzemeler: Yup.array().max(10, "En fazla 10 malzeme seçebilirsiniz.").min(3, "En az 3 malzeme seçebilirsiniz"),
    boyut: Yup.string().required("Boyut seçimi yapmalısınız"),
    hamur: Yup.string().required("Hamur seçimi yapmalısınız"),
    pizzaAdet: Yup.number().min(1, "Adet eksi değer alamaz.")

  }); */

  
// Submite basılınca sayfanın rerender olmasını engellemek için preventDefault özelliğinden yararlanıyoruz
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
          <select id="pizza-hamur" value={hamur} onChange={selectChangeHandler}>
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
        <Checkbox checkboxChangeHandler={checkboxChangeHandler} seciliMalzemeler={seciliMalzemeler} />
      </form>
      <Note />
      <OrderSum
        pizzaAdet={pizzaAdet}
        sayacArttir={sayacArttir}
        sayacAzalt={sayacAzalt}
        toplamFiyat={toplamFiyat}
        secimler={secimler}
        boyut={boyut}
        hamur={hamur}
      />
    </div>
  );
};

export default OrderPizzaContent;
