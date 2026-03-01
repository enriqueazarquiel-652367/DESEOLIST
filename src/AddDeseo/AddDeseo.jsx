import { useState } from "react";
import PropTypes from "prop-types";

export default function AddDeseo({ onNewDeseo }) {
  const [NuevoDeseo, setNuevoDeseo] = useState("");

  return (
    <fieldset id="fieldset" className="Deseo-Input">
      <input
        type="text"
        id="input"
        className="Deseo-input__field"
        placeholder="Escribe tu deseo"
        onChange={(e) => {
          setNuevoDeseo(e.target.value);
        }}
      />
      <button
        id="button"
        className="Deseo-input__button"
        onClick={() => {
          if (!NuevoDeseo.trim() == "") {
            onNewDeseo(NuevoDeseo);
            document.getElementsByTagName("input")[0].value = "";
            setNuevoDeseo("");
          }
        }}
      >
        Agregar Deseo
      </button>
    </fieldset>
  );
}

AddDeseo.propTypes = {
  onNewDeseo: PropTypes.func.isRequired,
};
