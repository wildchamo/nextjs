import React from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import { servicesInfo } from "./constants";
import Accordion from "../Accordion";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h2 className="text-header text-[2rem] font-bold">Servicios</h2>
      <span className="text-mutedForeground">Ofrecemos:</span>
      <span className="text-mutedForeground text-center">
        Pólizas Tradicionales e Industriales. Pólizas Multirriesgo – Pyme –
        Hogar y Corporativas – Pólizas Sector Comercial e Industria.
      </span>
      <Accordion accordionData={servicesInfo} />
      <button className="py-3 px-6 w-fit font-bold uppercase text-sm text-background rounded-2xl bg-button hover:bg-button/80 transition-all duration-150">
        <a href="#quote">Cotizar</a>
      </button>
    </div>
  );
};

export default SectionWrapper(Services, "services");
