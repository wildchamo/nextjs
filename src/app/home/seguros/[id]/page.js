"use client";
import useUserStore from "../../../stores/userStore";
import { useState, useEffect } from "react";

const SeguroIndividual = ({ params }) => {
  const { seguros } = useUserStore((state) => state);

  const [seguro, setSeguro] = useState({
    seguro: "",
  });

  useEffect(() => {
    setSeguro(seguros.find((seguro) => seguro.id === Number(params.id)));
  }, []);

  console.log(seguro);

  return (
    <div className="bg-primary py-4 px-4 rounded-2xl">
      <h2 className="font-bold pb-4 text-xl">{seguro.seguro}</h2>
      <section className="grid grid-cols-2">
        <p className="text-left">Vencimiento</p>
        <p className="text-right">{seguro.vencimiento}</p>
      </section>
      <div className="text-end mt-4">
        <button className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Ver póliza</button>
      </div>
    </div>
  );
};

export default SeguroIndividual;
