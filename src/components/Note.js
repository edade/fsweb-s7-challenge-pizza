import React from "react";
const Note = () => {
  return (
    <div id="special-text">
      <h2>Sipariş Notu</h2>
      <label htmlFor="not-part"></label>
      <input
        type="text"
        id="not-part"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
      <br/>
      <hr/>

    </div>
  );
};
export default Note;
