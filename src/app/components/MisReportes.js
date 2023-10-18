"use client";
import ActionSection from "./ActionSection";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import generarReporte from "../../../public/generarReporte.png";

export default function MisReportes() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    console.log("hola");
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
          onClick={() => router.push("/home/reportar")}
          className="bg-secundary w-24 text-white px-4 py-2 rounded-lg"
        >
          Si
        </button>
        <button
          className="bg-secundary w-24 text-white px-4 py-2 rounded-lg"
          onClick={() => router.push("/home/reportar")}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
