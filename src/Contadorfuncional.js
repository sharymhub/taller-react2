import React, { useState } from "react";

function Contadorfuncional () {
    const [numero, setnumero] = useState(0);
  return (
    <div>
      <h2>Contador funcional:</h2>
      <p>{numero}</p>
      <button onClick={() => setnumero(numero + 1)}>Aumentar</button>
    </div>
  );
}
export default Contadorfuncional; 