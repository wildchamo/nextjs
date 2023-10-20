"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import useUserStore from "../stores/userStore";
import Link from "next/link";

function FormMandarEmail() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");
  const router = useRouter();

  const [geo, setGeo] = useState({});

  useEffect(() => {
    if (!tipo) {
      router.push("/home");
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setGeo({ latitude, longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  }),
    [];

  const { nombre, identificacion, ciudad } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
  }));

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let geoString = `${geo.latitude},${geo.longitude}`;
    const formData = new FormData(formRef.current);
    const comoOcurrio = formData.get("comoOcurrio");

    console.log(nombre, identificacion, ciudad, comoOcurrio, geo);

    try {
      const res = await axios.post("/api/email", {
        nombre,
        identificacion,
        ciudad,
        comoOcurrio,
        tipo,
        geo: geoString,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <Link href="/home">Regresar</Link>
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </div>

      <div>
        <h1 className="text-center uppercase">Reporte {tipo}</h1>

        <h2>Información del accidente</h2>

        <div className="flex flex-col justify-between bg-primary h-40 p-6 rounded-2xl text-sm">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            ¿Cómo sucedió el accidente? *
          </label>
          <textarea
            type="text"
            name="comoOcurrio"
            className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Descipción detallada "
          />
        </div>
      </div>
      <h2>Información de los testigos</h2>

      <div className="justify-between bg-primary h-40 p-6 rounded-2xl text-sm">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nombre (opcional)
        </label>
        <input
          type="text"
          name="comoOcurrio"
          className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Descipción detallada "
        />

        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Número de contacto (opcional)
        </label>
        <input
          type="text"
          name="comoOcurrio"
          className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Descipción detallada "
        />

      </div>
      <div>
        <div>+</div>
        <input id="myFileInput" type="file" accept="image/*;capture=camera" />
      </div>

      <button
        className="shadow bg-secundary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={handleSubmit}
      >
        Reportar caso
      </button>
    </form>
  );
}

export default FormMandarEmail;
