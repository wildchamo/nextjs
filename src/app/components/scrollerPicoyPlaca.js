import { useState } from "react";
import {getDiaHoy, getPicoyPlaca} from "../utils/todayDay"

export default function ScrollerPicoyPlaca({ ciudad, placa }) {

  const [ciudadScroller, setCiudadScroller] = useState(ciudad);

  let picoyPlaca= getPicoyPlaca()

  console.log(picoyPlaca)

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
      <select name="" id="" onChange={(e) => setCiudadScroller(e.target.value)}>
        {picoyPlaca.map((ciudadArray) => (
          <option
            selected={ciudadArray.nombre === ciudad}
            key={ciudadArray.nombre}
            value={ciudadArray.nombre}
          >
            {ciudadArray.nombre}
          </option>
        ))}
      </select>
      {getDiaHoy()}
      <div>
        holaa
        {picoyplacahoy.reglas.map((regla) => (
          <p>
            {regla.dia} | {regla.placas}
          </p>
        ))}
      </div>
    </div>
  );
}
