"use client";
import useAdminStore from "@/app/stores/adminStore";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Modal from "./Modal";

function FormModificarUser() {
  const {
    nombre,
    identificacion,
    ciudad,
    email,
    direccion,
    celular,
    fechaNacimiento,
    fechaVencimientoLicencia,
    isActive,
    _id,
    rol,
  } = useAdminStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
    celular: state.celular,
    fechaVencimientoLicencia: state.fechaVencimientoLicencia,
    fechaNacimiento: state.fechaNacimiento,
    direccion: state.direccion,
    email: state.email,
    rol: state.rol,
    isActive: state.isActive,
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
    isActive: "",
    _id: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorOnInput, setErrorOnInput] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

    if (
      !nombre ||
      !identificacion ||
      !ciudad ||
      !celular ||
      !vencimientoLicencia ||
      !fechaNacimiento ||
      !direccion ||
      !email
    ) {
      setErrorOnInput(true);
      return;
    }
    setLoading(true);

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
      updateUser({
        nombre,
        identificacion,
        ciudad,
        celular,
        vencimientoLicencia,
        fechaNacimiento,
        direccion,
        email,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen && <ModalReady />}
      {errorOnInput && <ModalError onClose={() => setErrorOnInput(false)} />}

      <form ref={formRef} onSubmit={handleSubmit} className="pb-28">
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
              type="number"
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
            type="tel"
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

        <div className="flex gap-10">
          <div>
            <label>Está activo?</label>

            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="isActive"
              value={userData.isActive}
              onChange={(e) => {
                setUserData({ ...userData, isActive: e.target.value });
              }}
            >
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div>
            <label>Rol:</label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="rol"
                value={userData.rol}
                onChange={(e) => {
                  setUserData({ ...userData, rol: e.target.value });
                }}
              >
                <option value="Usuario">Usuario</option>
                <option value="Colectivo">Colectivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            className="shadow w-60 bg-secondary flex justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded"
            type="submit"
          >
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="animate-spin"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3a9 9 0 1 0 9 9"
                />
              </svg>
            ) : (
              "Editar Información Personal"
            )}
          </button>
        </div>
      </form>
    </>
  );
}

function ModalReady() {
  const router = useRouter();

  const sendBack = () => {
    router.push("/home");
  };

  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Has modificado tu usuario exitosamente! Gracias por confiar en seguros
        Mayaluna
      </h3>
      <div className="text-right mt-5">
        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
          onClick={sendBack}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

function ModalError({ onClose }) {
  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Es necesario que llenes todos los campos
      </h3>
      <div className="text-right mt-5">
        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

export default dynamic(() => Promise.resolve(FormModificarUser), {
  ssr: false,
});
