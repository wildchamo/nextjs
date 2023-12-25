"use client";
import Link from "next/link";
import axios from "axios";
import useAdminStore from "@/app/stores/adminStore";
import { useEffect, useState } from "react";

function SegurosList() {
  const [seguros, setSeguros] = useState([]);
  const { _id } = useAdminStore((state) => ({
    _id: state._id,
  }));

  useEffect(() => {
    const fetchSeguros = async () => {
      try {
        const response = await axios.post("/api/get-seguros", { idUser: _id });
        console.log(response.data);
        setSeguros(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeguros();
  }, []);

  return (
    <section className="py-5">
      <h2 className="text-md uppercase">Seguros</h2>
      <section className="bg-primary py-4 px-4 rounded-2xl">
        {seguros.length > 1 ? (
          <>
            <div className="grid grid-cols-[2fr,2fr,auto] ">
              <div className="font-bold">Seguro</div>
              <div className="font-bold">Vencimiento</div>
              <div className="font-bold">Ver más</div>
            </div>
            <div>
              {seguros?.map((seguro) => (
                <div
                  className="grid grid-cols-[2fr,2fr,1fr] pt-3 text-left"
                  key={seguro.id}
                  // onClick={() => seeIndiviudalSeguro(seguro.id)}
                >
                  <div>{seguro.tipoPoliza}</div>
                  <div>
                    {
                      new Date(seguro.fechaVencimiento)
                        .toISOString()
                        .split("T")[0]
                    }
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
          </>
        ) : (
          "Este usuario aún no tiene seguros"
        )}
      </section>

      <div className="mt-4 text-end">
        <Link
          className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
          href="user/agregar-seguro"
        >
          Agregar seguro
        </Link>
      </div>
    </section>
  );
}

export default SegurosList;
