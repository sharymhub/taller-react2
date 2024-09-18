import React from "react";

function Detalleproducto(props) {
  return (
    <div>
      <h2>{props.nombrep}</h2>
      <p>${props.preciop}</p>
      <p>{props.descripcion}</p>
    </div>
  );
}
export default Detalleproducto;
