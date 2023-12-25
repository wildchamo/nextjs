import Link from "next/link";

function SegurosList() {
  const seguros = [
    {
      id: 123,
      seguro: "Todo Riesgo",
      vencimiento: "27 Abr 2025",
    },
    {
      id: 456,
      seguro: "Exequias",
      vencimiento: "30 Ene 2024",
    },
  ];

  return (
    <section>
      <h2 className="text-md uppercase">Seguros</h2>
      <section className="bg-primary py-4 px-4 rounded-2xl">
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
            </div>
          ))}
        </div>
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
