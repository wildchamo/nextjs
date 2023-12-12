"use client";
import ActionSection from "./ActionSection";
import todoriesgo from "../../../public/todoriesgo.png";
import exequias from "../../../public/exequias.png";
import soat from "../../../public/soat.png";
import { useRouter } from "next/navigation";

export default function MisSeguros() {
  const router = useRouter();

  const seeSeguros = () => {
    router.push("/home/seguros");
  };

  return (
    <section className="pt-6">
      <h2>MIS SEGUROS</h2>
      <div className="flex justify-between bg-primary h-32 p-6 rounded-2xl text-sm">
        <ActionSection src={todoriesgo} text="Todo riesgo"></ActionSection>
        <ActionSection src={exequias} text="Exequias"></ActionSection>
        <ActionSection
          src={soat}
          onClick={seeSeguros}
          text="Ver todos"
        ></ActionSection>
      </div>
    </section>
  );
}
