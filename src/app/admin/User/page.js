"use client";
import { useRef } from "react";
import axios from "axios";
import useAdminStore from "../../stores/adminStore";
import dynamic from "next/dynamic";

function FormCrearUser() {
  const formRef = useRef();

  const {
    nombre,
    identificacion,
    rol,
    ciudad,
    email,
    direccion,
    celular,
    fechaNacimiento,
    fechaVencimientoLicencia,
    isActive,
    _id,
  } = useAdminStore();



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const nombre = formData.get("nombre");
    const identificacion = formData.get("identificacion");
    const ciudad = formData.get("ciudad");
    const celular = formData.get("celular");
    const isActive = formData.get("isActive") === "true";
    const vencimientoLicencia = formData.get("vencimientoLicencia");
    const fechaNacimiento = formData.get("fechaNacimiento");
    const direccion = formData.get("direccion");
    const email = formData.get("email");
    const password = formData.get("password");
    const rol = formData.get("rol");

    try {
      const res = await axios.post("/api/auth/signup", {
        nombre,
        identificacion,
        ciudad,
        celular,
        isActive,
        vencimientoLicencia,
        fechaNacimiento,
        direccion,
        email,
        password,
        rol,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nombre Completo:
        </label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Jose Luis "
        />
      </div>

      <div className="flex w-full ">
        <div>
          <label>Número de Identificación:</label>
          <input
            type="text"
            name="identificacion"
            value={identificacion}
            className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="123456789"
          />
        </div>

        <div>
          <label>Ciudad:</label>
          <select
            className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="ciudad"
            value={ciudad}
          >
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </div>
      </div>
      <div className="flex w-full">
        <div>
          <label>Número de Celular:</label>
          <input
            type="text"
            name="celular"
            value={celular}
            className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="123456789"
          />
        </div>

        <div>
          <label>Está activo?</label>
          <div className="relative">
            <select
              required
              className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="isActive"
              value={isActive}
            >
              <option>Seleccione</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <label>Vencimiento Licencia:</label>
            <input
              type="date"
              name="vencimientoLicencia"
              value={fechaVencimientoLicencia}
              className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123456789"
            />
          </div>
          <div>
            <label>Fecha Nacimiento:</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={fechaNacimiento}
              className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123456789"
            />
          </div>
        </div>
        <label>Dirección de Residencia:</label>
        <input
          type="text"
          name="direccion"
          value={direccion}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Calle 5 N° 38 - 25 "
        />
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={email}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="emaya@mayalunaseguros.com"
        />
      </div>

      <div className="flex gap-10">
        <div>
          <label>Rol:</label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="rol"
              value={rol}
            >
              <option value="Usuario">Usuario</option>
              <option value="Colectivo">Colectivo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Modificar usuario
        </button>
      </div>
    </form>
  );
}

export default dynamic(() => Promise.resolve(FormCrearUser), { ssr: false });
