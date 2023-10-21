import Image from "next/image";
import logomayaluna from "../../../public/logomayaluna.jpg";

export default function EmailTemplate({
  nombre,
  identificacion,
  ciudad,
  comoOcurrio,
  tipo,
  geo,
}) {
  return (
    <div>
      <Image
        src={logomayaluna}
        width={80}
        height={80}
        alt="logoMayaluna"
      ></Image>
      <h2> Tipo: {tipo}</h2>
      <h2> Nombre implicado: {nombre}</h2>
      <h2> Identificacion: {identificacion}</h2>
      <h2> Ciudad: {ciudad}</h2>
      <h2> Cómo ocurrió: {comoOcurrio}</h2>
      <h2>geo {geo}</h2>
    </div>
  );
}
