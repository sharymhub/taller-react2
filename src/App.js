import React from "react";
import Saludo from "./Saludo";
import Productos from "./Productos";
import Contadorfuncional from "./Contadorfuncional";
import Contadorclase from "./Contadorclase";
import Listadeproductos from "./Listadeproductos";
import Detalleproducto from "./Detalleproducto";

// Punto 1
function App() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <Saludo nombre = "Profe Santiago"/>
    </div>
  );
}
export default App;

// Punto 2
function App2() {
  return (
    <div>
      <h1>Ejercicio 2</h1>
      <Productos nameproduct="Tenis Adidas" precio="$200.000" />
    </div>
  );
}
//export default App2

// Punto 3
function App3() {
  return (
    <div>
      <h1>Ejercicio 3</h1>
      <Contadorfuncional />
      <Contadorclase />
    </div>
  );
}
//export default App3

// Punto 4
const productoslista = [
  { nombreproducto: "Huevos", precioproducto: "18.000" },
  { nombreproducto: "Leche", precioproducto: "4.000" },
  { nombreproducto: "Galletas", precioproducto: "1.500" },
  { nombreproducto: "Mantequilla", precioproducto: "3.000" },
  { nombreproducto: "Arroz", precioproducto: "4.000" },
  { nombreproducto: "Cafe", precioproducto: "20.000" },
];

function App4() {
  return (
    <div>
      <h1>Ejercicio 4</h1>
      <h2>Lista de productos:</h2>
      <Listadeproductos productos={productoslista} />
    </div>
  ); // Se le pasa el array Productoslista como una propiedad "productos"
}
//export default App4;

// Punto 5
function App5() {
  return (
    <div>
      <h1>Ejercicio 5</h1>
      <Detalleproducto
        nombrep="Silla Gamer Ergonomica"
        preciop="544.000"
        descripcion=" Silla Gamer Escritorio Ergonomica Giratoria Ajustable 180° Pc Gaming Tapizado Cuero Femmto"
      />
    </div>
  );
}
//export default App5;
