export default function ScrollerPicoyPlaca({picoyPlaca, ciudad, placa }) {

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    console.log(picoyPlaca)

  return (
    <div className="flex flex-col text-center">
      <select name="" id="">
        <option value="particulares">Vehiculos particulares</option>
        <option value="taxis">Taxis</option>
      </select>
      Prepara tu semana
      <select name="" id="">
        {picoyPlaca.map((ciudad) => (
          <option key={ciudad.nombre} value={ciudad.nombre}>{ciudad.nombre}</option>
        ))}
      </select>
        {diasSemana[new Date().getDay()]}
      <h1>
        {ciudad}, {placa}
      </h1>
    </div>
  );
}
