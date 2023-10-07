"use client";
import ActionSection from "./ActionSection";
import generarReporte from "../../../public/generarReporte.png";
import historial from "../../../public/historial.png";

export default function MisReportes() {
  return (
    <section className="pt-6">
      <h2>MIS REPORTES</h2>
      <div className="flex justify-start gap-4 bg-primary h-32 p-6 rounded-2xl text-sm">
        <ActionSection src={generarReporte} text="Generar reporte"></ActionSection>
        <ActionSection src={historial} text="Historial"></ActionSection>
      </div>
    </section>
  );
}
