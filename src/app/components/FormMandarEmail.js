"use client";
import { useRef } from "react";
import axios from "axios";
import useUserStore from "../stores/userStore";

function FormMandarEmail() {
  const { nombre, identificacion, ciudad } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
  }));
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    try {
      const res = await axios.post("/api/auth/signup", {
        nombre: nombre,
        identificacion: identificacion,
        ciudad: ciudad,
      });

      console.log(res);
    } catch (error) {}
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Cómo ocurrió el accidente?
        </label>
        <textarea
          type="text"
          name="nombre"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Jose Luis "
        />
      </div>

      <button
        className="shadow bg-secundary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Reportar caso
      </button>
    </form>
  );
}

export default FormMandarEmail;
