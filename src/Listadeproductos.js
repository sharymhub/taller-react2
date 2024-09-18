import React from "react";
import Producto from "./Producto";

function Listadeproductos({ productos }) {
  return (
    <div>
      <ul>
        {productos.map((producto, index) => (
          <li>
            <Producto
              key={index}
              nombreproducto={producto.nombreproducto}
              precioproducto={producto.precioproducto}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listadeproductos;
