"use client";
import { useRef } from "react";
import useUserStore from "../stores/userStore";
import { useEffect, useState } from "react";
import axios from "axios";

function FormModificarUser() {
  const {
    nombre,
    identificacion,
    ciudad,
    celular,
    fechaVencimientoLicencia,
    fechaNacimiento,
    direccion,
    email,
    rol,
    _id,
  } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
    celular: state.celular,
    fechaVencimientoLicencia: state.fechaVencimientoLicencia,
    fechaNacimiento: state.fechaNacimiento,
    direccion: state.direccion,
    email: state.email,
    rol: state.rol,
    _id: state._id,
  }));

  const [userData, setUserData] = useState({
    nombre: "",
    identificacion: "",
    ciudad: "",
    celular: "",
    fechaVencimientoLicencia: "",
    fechaNacimiento: "",
    direccion: "",
    email: "",
    rol: "",
    _id: "",
  });

  useEffect(() => {
    setUserData({
      nombre,
      identificacion,
      ciudad,
      celular,
      fechaVencimientoLicencia,
      fechaNacimiento,
      direccion,
      email,
      rol,
      _id,
    });
  }, []);

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const nombre = formData.get("nombre");
    const identificacion = formData.get("identificacion");
    const ciudad = formData.get("ciudad");
    const celular = formData.get("celular");
    const vencimientoLicencia = formData.get("vencimientoLicencia");
    const fechaNacimiento = formData.get("fechaNacimiento");
    const direccion = formData.get("direccion");
    const email = formData.get("email");

    try {
      const res = await axios.post("/api/auth/modifyUserF", {
        _id,
        nombre,
        identificacion,
        ciudad,
        celular,
        vencimientoLicencia,
        fechaNacimiento,
        direccion,
        email,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="pb-20">
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nombre Completo:
        </label>
        <input
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={(e) => {
            setUserData({ ...userData, nombre: e.target.value });
          }}
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
            value={userData.identificacion}
            onChange={(e) => {
              setUserData({ ...userData, identificacion: e.target.value });
            }}
            className="appearance-none bg-gray-200 text-gray-700 border  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="123456789"
          />
        </div>

        <div>
          <label>Ciudad:</label>
          <select
            className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="ciudad"
            value={userData.ciudad}
            onChange={(e) => {
              setUserData({ ...userData, ciudad: e.target.value });
            }}
          >
            <option value="Bogotá">Bogotá</option>
            <option value="Medellín">Medellín</option>
            <option value="Cali">Cali</option>
          </select>
        </div>
      </div>
      <div>
        <label>Número de Celular:</label>
        <input
          type="text"
          name="celular"
          value={userData.celular}
          onChange={(e) => {
            setUserData({ ...userData, celular: e.target.value });
          }}
          className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="123456789"
        />
      </div>
      <div>
        <div className="flex">
          <div>
            <label>Vencimiento Licencia:</label>
            <input
              type="date"
              name="vencimientoLicencia"
              value={userData.fechaVencimientoLicencia?.split("T")[0] || ""}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  fechaVencimientoLicencia: e.target.value,
                });
              }}
              className="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123456789"
            />
          </div>
          <div>
            <label>Fecha Nacimiento:</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={userData.fechaNacimiento?.split("T")[0] || ""}
              onChange={(e) => {
                setUserData({ ...userData, fechaNacimiento: e.target.value });
              }}
              className="appearance-none bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123456789"
            />
          </div>
        </div>
        <label>Dirección de Residencia:</label>
        <input
          type="text"
          name="direccion"
          value={userData.direccion}
          onChange={(e) => {
            setUserData({ ...userData, direccion: e.target.value });
          }}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Calle 5 N° 38 - 25 "
        />
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="emaya@mayalunaseguros.com"
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Editar Información Personal
        </button>
      </div>
    </form>
  );
}

export default FormModificarUser;
