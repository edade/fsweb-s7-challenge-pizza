import React from "react";

const Checkbox =({  seciliMalzemeler, checkboxChangeHandler } ) => {

   

    const malzemeler = [
        { value: "pepperoni", label: "Pepperoni" },
        { value: "tavuk ızgara", label: "Tavuk Izgara" },
        { value: "mısır", label: "Mısır" },
        { value: "sarımsak", label: "Sarımsak" },
        { value: "ananas", label: "Ananas" },
        { value: "sosis", label: "Sosis" },
        { value: "soğan", label: "Soğan" },
         { value: "sucuk", label: "Sucuk" },
         { value: "biber", label: "Biber" }, 
         { value: "kabak", label: "Kabak" },
         { value: "kanada jambonu", label: "Kanada Jambonu" },
        { value: "domates", label: "Domates" }, 
        { value: "jalepeno", label: "Jalepeno" },
      ];
    return (
        //malzemeler listesi map ile her malzeme için bir label oluşturur
        <div className="checkbox">
           {malzemeler.map((malzeme) => (<label key={malzeme.label}>
            <input type="checkbox"
            id="malzemeler-checkbox"
            name={malzeme.value}
            //eğer malzeme seçili malzemeler listesi içindeyse checked attr ile o malzemeye tik atılır
            checked={seciliMalzemeler.includes(malzeme.value)} 
            onChange={() => checkboxChangeHandler(malzeme.value)}/>
            
            {malzeme.label}
           </label>) )} 
        </div>
    )
}
export default Checkbox;