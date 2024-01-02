"use client";
import React from "react";
import { useEffect } from "react";
import useUserStore from "../../stores/userStore";
import { useRouter } from "next/navigation";

const InsuranceList = () => {
  const { seguros, getSeguros, _id } = useUserStore((state) => state);
  const router = useRouter();

  useEffect(() => {
    getSeguros(_id);
  }, [_id]);

  const seeIndiviudalSeguro = (id) => {
    router.push(`/home/seguros/${id}`);
  };

  return (
    <section className="bg-primary py-4 px-4 rounded-2xl">
      <div className="grid grid-cols-[2fr,2fr,auto] ">
        <div className="font-bold">Seguro</div>
        <div className="font-bold">Vencimiento</div>
        <div className="font-bold">Ver más</div>
      </div>
      <div>
        {seguros.map((seguro) => (
          <div
            className="grid grid-cols-[2fr,2fr,1fr] pt-3 text-left"
            key={seguro._id}
            onClick={() => seeIndiviudalSeguro(seguro._id)}
          >
            <div>{seguro.tipoPoliza}</div>
            <div>
              {new Date(seguro.fechaVencimiento).toISOString().split("T")[0]}
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center bg-secondary rounded-full h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceList;
