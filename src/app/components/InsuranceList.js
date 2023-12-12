"use client";
import { useState, useEffect } from "react";
import React from "react";

const InsuranceList = () => {
  const seguros = [
    {
      id: 1,
      seguro: "Tipo Riesgo",
      vencimiento: "27 Abr 2025",
    },
    {
      id: 2,
      seguro: "Exequias ",
      vencimiento: "30 Ene 2024",
    },
  ];

  return (
    <div className="grid grid-cols-[1fr,1fr,auto] gap-4 bg-primary py-4 px-4 rounded-2xl">
      <div className="font-bold">Seguro</div>
      <div className="font-bold">Vencimiento</div>
      <div className="font-bold">Ver más</div>

      {seguros.map((seguro) => (
        <React.Fragment key={seguro.id}>
          <div>{seguro.seguro}</div>
          <div>{seguro.vencimiento}</div>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default InsuranceList;
