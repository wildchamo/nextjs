"use client";
import { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (!tipo) {
      router.push("/home");
    }
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
    const formData = new FormData(formRef.current);
    const comoOcurrio = formData.get("comoOcurrio");

    console.log(nombre, identificacion, ciudad, comoOcurrio);

    try {
      const res = await axios.post("/api/email", {
        nombre,
        identificacion,
        ciudad,
        comoOcurrio,
        tipo,
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
        <h1 className="text-center">Reporte {tipo}</h1>

        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Cómo ocurrió el accidente?
        </label>
        <textarea
          type="text"
          name="comoOcurrio"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Jose Luis "
        />
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
