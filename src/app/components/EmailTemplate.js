export default function EmailTemplate({
  nombre,
  identificacion,
  ciudad,
  comoOcurrio,
  tipo
}) {
  return (
    <div>
      <h2> Tipo: {tipo}</h2>
      <h2> Nombre implicado: {nombre}</h2>
      <h2> Identificacion: {identificacion}</h2>
      <h2> Ciudad: {ciudad}</h2>
      <h2> Cómo ocurrió: {comoOcurrio}</h2>
    </div>
  );
}
