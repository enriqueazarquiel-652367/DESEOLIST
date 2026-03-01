import PropTypes from "prop-types";
import DeseoItem from "./DeseoItem.jsx";
import "../App.css";

export default function DeseoList({ ListaDeseos, onHechoChange }) {
  return (
    <>
      <h1>
        Lista deseos{" "}
        {ListaDeseos.reduce((acc, deseo) => acc + (!deseo.hecho ? 1 : 0), 0) ==
          0
          ? "realizados"
          : ""}
      </h1>
      <ul className="Deseo-lista">
        {ListaDeseos.map((deseo, index) => (
          <DeseoItem
            onHechoChange={(hecho) => onHechoChange(hecho, index)}
            Deseo={deseo}
            key={index}
          />
        ))}
      </ul>
      <h3>fin</h3>
    </>
  );
}

DeseoList.propTypes = {
  onHechoChange: PropTypes.func.isRequired,
};

DeseoList.defaultProps = {
  ListaDeseos: [],
};
