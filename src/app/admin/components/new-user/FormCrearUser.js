"use client";
import { useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Modal from "../shared/Modal";

function FormCrearUser() {
  const formRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
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
      setIsModalOpen(true);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      {isModalOpen && <ModalReady />}
      {error && <ModalError closeModal={() => setError(false)} />}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nombre Completo:
          </label>
          <input
            required
            type="text"
            name="nombre"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Jose Luis "
          />
        </div>

        <div className="flex w-full ">
          <div>
            <label>Número de Identificación:</label>
            <input
              required
              type="text"
              name="identificacion"
              className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="123456789"
            />
          </div>

          <div>
            <label>Ciudad:</label>
            <select
              required
              className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="ciudad"
            >
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
            </select>
          </div>
        </div>
        <div className="flex w-full gap-1">
          <div>
            <label>Número de Celular:</label>
            <input
              required
              type="text"
              name="celular"
              className="appearance-none max-w-64 bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
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
              >
                <option>Selecccione</option>
                <option value={true}>Sí</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <label>Vencimiento Licencia:</label>
              <input
                required
                type="date"
                name="vencimientoLicencia"
                className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="123456789"
              />
            </div>
            <div>
              <label>Fecha Nacimiento:</label>
              <input
                required
                type="date"
                name="fechaNacimiento"
                className="appearance-none bg-gray-200 text-gray-700  rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="123456789"
              />
            </div>
          </div>
          <label>Dirección de Residencia:</label>
          <input
            required
            type="text"
            name="direccion"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Calle 5 N° 38 - 25 "
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            required
            type="email"
            name="email"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="emaya@mayalunaseguros.com"
          />
        </div>

        <div className="flex gap-10">
          <div>
            <label>Contraseña:</label>

            <input
              type="password"
              name="password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="********"
            />
          </div>
          <div>
            <label>Rol:</label>
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
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Crear usuario
          </button>
        </div>
      </form>
    </>
  );
}

function ModalReady() {
  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Usuario creado correctamente
      </h3>
      <div className="text-right mt-5">
        <Link href="/admin">
          <button className="bg-secondary w-24 text-white px-4 py-2 rounded-lg">
            Aceptar
          </button>
        </Link>
      </div>
    </Modal>
  );
}

function ModalError({ closeModal }) {
  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Ya existe un usuario con este número de idetificación
      </h3>
      <div className="text-right mt-5">
        <button
          onClick={closeModal}
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

export default FormCrearUser;
