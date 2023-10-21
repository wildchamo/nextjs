export default function EmailTemplate({
  nombre,
  identificacion,
  ciudad,
  comoOcurrio,
  tipo,
  geo,
}) {
  console.log(logomayaluna);
  return (
    <div>
      <h2> Nombre implicado: {nombre}</h2>
      <h2> Identificacion: {identificacion}</h2>
      <h2> Ciudad: {ciudad}</h2>
      <h2> Cómo ocurrió: {comoOcurrio}</h2>
      <h2>geo {geo}</h2>
    </div>
  );
}
