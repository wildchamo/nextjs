import ActionSection from "./ActionSection";
import { useState } from "react";
import Modal from "../shared/Modal";
import Link from "next/link";

export default function MisReportes({ seguros }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const hasAutoInsurance = seguros.some((seguro) =>
    seguro.tipoPoliza.includes("Autos")
  );

  const handleModalClick = () => {
    if (hasAutoInsurance) {
      setShowModal(true);
    } else {
      setShowModal2(true);
    }
  };

  return (
    <section className="py-6">
      <h2 className="mb-1">MIS REPORTES</h2>
      <div className="flex justify-start gap-4 bg-primary h-32 p-6 rounded-2xl text-sm">
        <ActionSection
          src="reportar"
          text="Generar reporte"
          onClick={handleModalClick}
        />
      </div>

      {showModal && <ModalTipo onClose={() => setShowModal(false)} />}
      {showModal2 && (
        <ModalNoAutoInsurance onClose={() => setShowModal2(false)} />
      )}
    </section>
  );
}

function ModalTipo({ onClose }) {
  return (
    <Modal>
      <div className="flex justify-end">
        <p onClick={onClose}>X</p>
      </div>
      <h2 className="text-md text-center font-bold mb-2">
        ¿Qué tipo de reporte desea generar?
      </h2>
      <p className="text-sm text-center mb-2 text-lighttext">
        Los accidentes gravados tienen lesionados implicados, los simples son
        solo daños materiales.
      </p>

      <div className="flex justify-around">
        <Link
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg text-center"
          href={`/home/reportar?tipo=Agravado`}
        >
          Agravado
        </Link>
        <Link
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg text-center"
          href={`/home/reportar?tipo=Simple`}
        >
          Simple
        </Link>
      </div>
    </Modal>
  );
}

function ModalNoAutoInsurance({ onClose }) {
  return (
    <Modal>
      <div className="modal-content">
        <h2>No tienes seguros de vehículo, contacta con nuestros asesores</h2>
        <div className="text-end mt-4">

        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg text-center"
          onClick={onClose}
          >
          Cerrar
        </button>
          </div>
      </div>
    </Modal>
  );
}
