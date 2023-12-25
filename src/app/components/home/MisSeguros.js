"use client";
import ActionSection from "./ActionSection";
import useUserStore from "@/app/stores/userStore";
import InsuranceButton from "./InsuranceButton";
import { useRouter } from "next/navigation";

export default function MisSeguros() {
  const router = useRouter();
  const { seguros } = useUserStore((state) => state);

  const seeSeguros = () => {
    router.push("/home/seguros");
  };

  const seeIndiviudalSeguro = (id) => {
    router.push(`/home/seguros/${id}`);
  };
  console.log(seguros);

  return (
    <section className="pt-6">
      <h2>MIS SEGUROS</h2>
      <div className="flex justify-between bg-primary h-32 p-6 rounded-2xl text-sm">
        {seguros.slice(0, 2).map((seguro) => (
          <InsuranceButton
            key={seguro._id}
            text={seguro.tipoPoliza}
            onClick={() => seeIndiviudalSeguro(seguro._id)}
          />
        ))}

        <ActionSection
          src="todos"
          onClick={seeSeguros}
          text="Ver todos"
        >

        
        </ActionSection>
      </div>
    </section>
  );
}
