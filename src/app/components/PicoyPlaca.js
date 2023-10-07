"use client";
import { useState } from "react";
import Modal from "./Modal";
import usePicoyPlacaStore from "../stores/picoyPlacaStore";
import ScrollerPicoyPlaca from "./scrollerPicoyPlaca";

export default function PicoyPlaca({ ciudad, placa }) {
  const [showModal, setShowModal] = useState(false);
  
  const picoyPlaca = usePicoyPlacaStore((state) => state.ciudades);

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
      {showModal && <ModalPico ciudad={ciudad} picoyPlaca={picoyPlaca} placa={placa} onClose={() => setShowModal(false)} />}
    </section>
  );
}

function ModalPico({ onClose, ciudad, placa, picoyPlaca }) {
  return (
    <Modal>
      <h2 className="text-lg font-bold mb-4">PICO Y PLACA</h2>
      <ScrollerPicoyPlaca ciudad={ciudad}  picoyPlaca={picoyPlaca} placa={placa}/>

      {/* <div className="flex flex-col justify-between bg-primary h-40 p-6 rounded-2xl text-sm">


        <p className="text-left">
          Restricción para los <b>vehículos particulares</b> con placas
          terminadas en <b>0 y 9</b> dentro del perímetro urbano durante las{" "}
          <b>6:00am y 7:00pm</b>
        </p>
      </div>

      <div className="flex flex-col justify-between bg-primary h-40 p-6 rounded-2xl text-sm">
        <p>Sabías que...</p>
        Una multa por infringir la restricción horaria del pico y placa podría
        llegar a costar 20 SMMLV
      </div> */}

      <div className="flex justify-end">
        <button
          className="bg-secundary text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Regresar
        </button>
      </div>
    </Modal>
  );
}
