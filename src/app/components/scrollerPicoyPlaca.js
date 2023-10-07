export default function ScrollerPicoyPlaca({ picoyPlaca, ciudad, placa }) {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const diahoy = diasSemana[new Date().getDay()];

  let picoyplacahoy = picoyPlaca.find((ciudadArray) => ciudadArray.nombre === ciudad);

  console.log(picoyplacahoy);

  console.log(picoyPlaca);

  return (
    <div className="flex flex-col text-center">
      <select name="" id="">
        <option value="particulares">Vehiculos particulares</option>
        <option value="taxis">Taxis</option>
      </select>
      Prepara tu semana
      <select name="" id="">
        {picoyPlaca.map((ciudadArray) => (
          <option selected={ciudadArray.nombre === ciudad} key={ciudadArray.nombre} value={ciudadArray.nombre}>
            {ciudadArray.nombre} 
          </option>
        ))}
      </select>
      {diahoy}
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
