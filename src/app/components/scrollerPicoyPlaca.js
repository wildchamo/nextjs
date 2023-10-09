import { useState } from "react";
import { getDiaHoy, getPicoyPlaca } from "../utils/todayDay";

export default function ScrollerPicoyPlaca({ ciudad }) {
  const [ciudadScroller, setCiudadScroller] = useState(ciudad);

  let picoyPlaca = getPicoyPlaca();
  let diaHoy = getDiaHoy();


  let picoyplacahoy = picoyPlaca.find(
    (ciudadArray) => ciudadArray.nombre === ciudadScroller
  );

  return (
    <div className="flex flex-col text-center">
      <select name="" id="">
        <option value="particulares">Vehiculos particulares</option>
        <option value="taxis">Taxis</option>
      </select>
      Prepara tu semana
      <select
        value={ciudadScroller}
        onChange={(e) => {
          setCiudadScroller(e.target.value);
        }}
      >
        {picoyPlaca.map((ciudadArray) => (
          <option key={ciudadArray.nombre} value={ciudadArray.nombre}>
            {ciudadArray.nombre}
          </option>
        ))}
      </select>
      {diaHoy}
      <div>
        {picoyplacahoy.reglas.map((regla) => (
          <div
            key={regla.dia}
            className={`flex justify-between ${
              regla.dia === diaHoy ? "font-bold" : ""
            }`}
          >
            <span>{regla.dia}</span>
            <span>
              {Array.isArray(regla.placas)
                ? regla.placas.join("-")
                : regla.placas}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
