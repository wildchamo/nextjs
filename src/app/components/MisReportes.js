"use client";
import ActionSection from "./ActionSection";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import generarReporte from "../../../public/generarReporte.png";

export default function MisReportes() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  };
  return (
    <section className="pt-6">
      <h2>MIS REPORTES</h2>
      <div className="flex justify-start gap-4 bg-primary h-32 p-6 rounded-2xl text-sm">
        <ActionSection
          src={generarReporte}
          text="Generar reporte"
          onClick={handleModalClick}
        />
      </div>

      {showModal && <ModalTipo onClose={() => setShowModal(false)} />}
    </section>
  );
}

function ModalTipo({ onClose }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home/reportar?tipo=Simple");
  };

  const handleClick2 = () => {
    router.push("/home/reportar?tipo=Agravado");
  };


  return (
    <Modal>
      <div className="flex justify-end">
        <p onClick={onClose}>X</p>
      </div>
      <h2 className="text-lg text-center font-bold mb-4">
        Hay lesionados implicados?
      </h2>

      <div className="flex justify-around">
        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
        onClick={handleClick2}
        >
          Si
        </button>
        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
          onClick={handleClick}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
