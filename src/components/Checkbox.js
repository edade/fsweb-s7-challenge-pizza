import React from "react";
import OrderPizzaContent from "./OrderPizzaContent";
import { useState } from "react";

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
        <div className="checkbox">
           {malzemeler.map((malzeme) => (<label key={malzeme.label}>
            <input type="checkbox"
            name={malzeme.value}
            checked={seciliMalzemeler.includes(malzeme.value)} 
            onChange={() => checkboxChangeHandler(malzeme.value)}/>
            
            {malzeme.label}
           </label>) )} 
        </div>
    )
}
export default Checkbox;