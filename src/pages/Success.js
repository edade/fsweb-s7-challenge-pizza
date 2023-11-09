import React from "react";
import logo from "../Assets/logo.svg";
const Success = () => {
  return (
    <div className="success-div">
     
        <img src={logo} alt="" />
         <div className="success">
            <p className="success-style">TEBRİKLER! </p>
        <p className="success-style">SİPARİŞİNİZ ALINDI!</p>
      </div>
    </div>
  );
};

export default Success;
