"use client";
import { useRef } from "react";
import axios from "axios";

function FormCrearUser() {
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const nombre = formData.get("nombre");
    const identificacion = formData.get("identificacion");
    const password = formData.get("password");
    const ciudad = formData.get("ciudad");
    const rol = formData.get("rol");
    const isActive = formData.get("isActive") === "true";

    console.log(nombre, identificacion, password, ciudad, rol, isActive);


    try {
      const res = await axios.post("/api/auth/signup", {
        nombre:nombre,
        identificacion:identificacion,
        password: password,
        ciudad: ciudad,
        rol: rol,
        isActive: isActive,
      });

      console.log(res)
    } catch (error) {}
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Jose Luis "
        />
      </div>
      <div>
        <label>Identificación:</label>
        <input
          type="text"
          name="identificacion"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="123456789 "
        />
      </div>
      <div>
        <label>Contraseña:</label>

        <input
          type="password"
          name="password"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="123456789 "
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Ciudad:
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="ciudad"
          >
            <option value="Bogota">Bogota</option>
            <option value="Medellin">Medellin</option>
            <option value="Cali">Cali</option>
          </select>
        </div>

        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Rol:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="rol"
            >
              <option value="Usuario">Usuario</option>
              <option value="Colectivo">Colectivo</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Está activo?
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="isActive"
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>
      <button
        className="shadow bg-secundary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Crear usuario
      </button>
    </form>
  );
}

export default FormCrearUser;
