"use client";
import { useState } from "react";
import useAdminStore from "@/app/stores/adminStore";


function FormAgregarSeguro() {
  const { _id } = useAdminStore((state) => ({
    _id: state._id,
  }));

  console.log(_id)
    
  const [formData, setFormData] = useState({});

  const agregarSeguro = (e) => {
    e.preventDefault();

    console.log(formData);
    console.log("hola");
  };

  return (
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
          <option value="">Todo riesgo</option>
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
          <option value="">Liberty</option>
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
      <div>
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
              <th>Póliza</th>
              <th>
                <input
                  type="file" //Averiguar el tipo para meter documentos
                  className="appearance-none block bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder=""
                />
              </th>
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
      </div>
      <div className="mt-4 text-end">
        <button
          className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
          type="submit"
        >
          Agregar Seguro
        </button>
      </div>
    </form>
  );
}

export default FormAgregarSeguro;
