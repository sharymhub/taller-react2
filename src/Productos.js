import React from "react";

function Productos(props) {
  return (
    <div>
      <h2>Producto: {props.nameproduct}</h2>
      <h4>Precio: {props.precio}</h4>
    </div>
  );
}

export default Productos;
