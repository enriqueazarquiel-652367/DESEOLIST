import { useState } from "react";
import AddDeseo from "./AddDeseo/AddDeseo.jsx";
import DeseoList from "./Listadeseos/DeseoList.jsx";
import "./App.css";

const estadoInicial = [
  { titulo: "ir a a Luna", hecho: false, fecha: Date.now() },
  { titulo: "ir al quiropráctico", hecho: true, fecha: Date.now() },
  { titulo: "unas nike nuevas", hecho: false, fecha: Date.now() },
];

export default function App() {
  const [Deseos, setDeseos] = useState(estadoInicial);

  function onHechoChange(hecho, index) {
    const antDeseos = [...Deseos];
    antDeseos[index].hecho = hecho;
    setDeseos(antDeseos);
  }

  const agregardeseo = (a) => {
    setDeseos((w) => [...w, { titulo: a, hecho: false, fecha: Date.now() }]);
  };

  return (
    <>
      <div>
        <h1>Mi lista de deseos 2025/26</h1>
        <AddDeseo onNewDeseo={agregardeseo} />
        <DeseoList ListaDeseos={Deseos} onHechoChange={onHechoChange} />
        <button
          id="Carlos"
          className="Deseo-clear"
          onClick={() => setDeseos(Deseos.filter((b) => !b.hecho))}
        >
          Limpiar deseos
        </button>
      </div>
    </>
  );
}
