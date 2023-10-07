"use client";
import { useState } from "react";

export default function PicoyPlaca() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pt-6">
      <h2>PICO Y PLACA</h2>
      <div className="flex flex-col justify-between bg-primary h-32 p-6 rounded-2xl text-sm">
        <p>
          {" "}
          Hoy en <b className="underline">Cali</b> para{" "}
          <b className="underline">particulares</b> es <b className="">0 y 9</b>
        </p>
        <div className="flex justify-end">
          <button
            className="bg-secundary text-white w-28 h-8 rounded-2xl"
            onClick={() => setShowModal(true)}
          >
            Ver más
          </button>
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </section>
  );
}

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-bold mb-4">PICO Y PLACA</h2>
          <div className="flex flex-col justify-between bg-primary h-40 p-6 rounded-2xl text-sm">
            <div>
              Hoy{" "}
              <select name="" id="">
                <option value="">Lunes</option>
                <option value="">Martes</option>
                <option value="">Miercoles</option>
                <option value="">Jueves</option>
                <option value="">Viernes</option>
                <option value="">Sábado</option>
                <option value="">Domingo</option>
              </select>{" "}
              en
              <select name="" id="">
                <option value="bogota">Bogotá</option>
                <option value="medellin">Medellín</option>
                <option value="armenia">Armenia</option>
                <option value="barbosa">Barbosa</option>
                <option value="barranquilla">Barranquilla</option>
                <option value="bello">Bello</option>
                <option value="bucaramanga">Bucaramanga</option>
                <option value="buenaventura">Buenaventura</option>
                <option value="caldas">Caldas</option>
                <option value="cali">Cali</option>
                <option value="cartagena">Cartagena</option>
                <option value="copacabana">Copacabana</option>
              </select>
              para <select name="" id="">
                <option value="particulares">Vehiculos particulares</option>
                <option value="taxis">Taxis</option>
              </select>
            </div>

            <p className="text-left">
              Restricción para los <b>vehículos particulares</b> con placas
              terminadas en <b>0 y 9</b> dentro del perímetro urbano durante las{" "}
              <b>6:00am y 7:00pm</b>
            </p>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-secundary text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
