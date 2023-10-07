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
      <h1></h1>
    </div>
  );
}
