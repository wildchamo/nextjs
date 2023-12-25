"use client";
import { useState } from "react";
import axios from "axios";
import useAdminStore from "@/app/stores/adminStore";
import Modal from "../shared/Modal";
import Link from "next/link";

function FormAgregarSeguro() {
  const { _id } = useAdminStore((state) => ({
    _id: state._id,
  }));

  const [formData, setFormData] = useState({
    idUser: _id,
    nombrePoliza: "",
    tipoPoliza: "",
    companiaAseguradora: "",
    fechaVencimiento: "",
    documentos: ["hola"],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const agregarSeguro = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post("/api/crear-seguro", formData);
      console.log(res);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isModalOpen ? <ModalReady /> : ""}
      <form onSubmit={agregarSeguro}>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nombre de la póliza:
          </label>
          <input
            type="text"
            value={formData.nombrePoliza}
            onChange={(e) => {
              setFormData({ ...formData, nombrePoliza: e.target.value });
            }}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder=""
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Tipo de póliza:
          </label>

          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={formData.tipoPoliza}
            onChange={(e) => {
              setFormData({ ...formData, tipoPoliza: e.target.value });
            }}
          >
            <option value="">Seleccione</option>
            <option value="todo riesgo">Todo riesgo</option>
            <option value="vehiculo">Vehiculo</option>
          </select>
        </div>{" "}
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Compañia aseguradora:
          </label>

          <select
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={formData.companiaAseguradora}
            onChange={(e) => {
              setFormData({ ...formData, companiaAseguradora: e.target.value });
            }}
          >
            <option value="">Seleccione</option>
            <option value="liberty">Liberty</option>
          </select>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Fecha de Vencimiento:{" "}
          </label>
          <input
            type="date"
            value={formData.fechaVencimiento}
            onChange={(e) => {
              setFormData({ ...formData, fechaVencimiento: e.target.value });
            }}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder=""
          />
        </div>
        {/* <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Documentos:
          </label>
          <table>
            <thead>
              <th>Tipo</th>
              <th>Documento</th>
            </thead>
            <tbody>
              <tr>
                <td>Póliza</td>
                <td>
                  <input
                    type="file" //Averiguar el tipo para meter documentos
                    className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder=""
                  />
                </td>
              </tr>

              {formData.tipoPoliza === "vehiculo" ? (
                <>
                  <tr>
                    <th>Licencia de conducción</th>

                    <th>
                      {" "}
                      <input
                        type="file" //Averiguar el tipo para meter documentos
                        className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder=""
                      />
                    </th>
                  </tr>
                  <tr>
                    <th>Extintor</th>

                    <th>
                      {" "}
                      <input
                        type="file" //Averiguar el tipo para meter documentos
                        className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder=""
                      />
                    </th>
                  </tr>
                </>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div> */}
        <div className="mt-4 text-end">
          <button
            className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
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
              "Agregar Seguro"
            )}
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
        Has agregado correctamente el seguro!
      </h3>
      <div className="text-right mt-5">
        <Link href="/admin/user">
          <button className="bg-secondary w-24 text-white px-4 py-2 rounded-lg">
            Aceptar
          </button>
        </Link>
      </div>
    </Modal>
  );
}

export default FormAgregarSeguro;
