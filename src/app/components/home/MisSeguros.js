"use client";
import ActionSection from "./ActionSection";
import useUserStore from "@/app/stores/userStore";
import InsuranceButton from "./InsuranceButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MisSeguros() {
  const router = useRouter();
  const { seguros, getSeguros, _id } = useUserStore((state) => state);

  useEffect(() => {
    getSeguros(_id);
  }, []);

  const seeSeguros = () => {
    router.push("/home/seguros");
  };

  const seeIndiviudalSeguro = (id) => {
    router.push(`/home/seguros/${id}`);
  };

  return (
    <section className="pt-6">
      <h2 className="mb-1">MIS SEGUROS</h2>

      <div className="flex justify-between bg-primary p-6 rounded-2xl text-sm">
        {seguros.length > 0 ? (
          <>
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
            ></ActionSection>
          </>
        ) : (
          <p className="text-md">
            Aún no tienes seguros! Comunicate con nuestro equipo para adquirir
            uno.
          </p>
        )}
      </div>
    </section>
  );
}
