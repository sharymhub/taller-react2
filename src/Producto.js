import React from "react";

function Producto(props) {
  return (
    <div>
      <h3>
        {props.nombreproducto}: ${props.precioproducto}
      </h3>
    </div>
  );
}
export default Producto;
