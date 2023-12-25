"use client";
import useUserStore from "../../../stores/userStore";
import { useState, useEffect } from "react";

const SeguroIndividual = ({ params }) => {
  const { seguros } = useUserStore((state) => state);

  const [seguro, setSeguro] = useState({
    seguro: "",
  });

  useEffect(() => {
    setSeguro(seguros.find((seguro) => seguro._id === params.id));
  }, []);

  return (
    <>
      <div className="bg-primary py-4 px-4 rounded-2xl">
        <h2 className="font-bold pb-4 text-xl">Información general</h2>
        <section className="grid grid-cols-2">
          <p className="text-left">Nombre póliza</p>
          <p className="text-right">{seguro.nombrePoliza}</p>
        </section>{" "}
        <section className="grid grid-cols-2">
          <p className="text-left">Tipo póliza</p>
          <p className="text-right">{seguro.tipoPoliza}</p>
        </section>{" "}
        <section className="grid grid-cols-2">
          <p className="text-left">Compañia aseguradora</p>
          <p className="text-right">{seguro.companiaAseguradora}</p>
        </section>{" "}
        <section className="grid grid-cols-2">
          <p className="text-left">Fecha vencimiento</p>
          <p className="text-right">
            {seguro.fechaVencimiento &&
            !isNaN(new Date(seguro.fechaVencimiento))
              ? new Date(seguro.fechaVencimiento).toISOString().split("T")[0]
              : "Fecha no disponible"}
          </p>
        </section>
      </div>

      <div className="bg-primary py-4 px-4 mt-4 rounded-2xl">
        <h2 className="font-bold pb-4 text-xl">Documentos</h2>
        <section className="grid grid-cols-2">
          <p className="text-left">Documento</p>
          <p className="text-right">{seguro.nombrePoliza}</p>
        </section>{" "}
      </div>
    </>
  );
};

export default SeguroIndividual;
