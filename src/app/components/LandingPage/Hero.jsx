import React from "react";

const Hero = () => {
  return (
    <section className="mt-[5rem] overflow-hidden relative w-full h-[50vh] md:h-screen mx-auto">
      <div className="sm:px-16 px-6 bg-background/70 absolute inset-0 w-full sm:w-[50%] flex flex-row items-center justify-end gap-5">
        <div className="z-[2] xl:w-[55%]">
          <h1 className="text-header text-2xl md:text-[2rem] xl:text-[3rem] font-extrabold xl:leading-[3.5rem]">
            Protegiéndote a ti y a los que más quieres
          </h1>
          <p className="text-md xl:text-xl mt-2 mb-5">
            Conoce lo que puedes hacer para estar seguro(a).
          </p>
          <button className="py-3 px-6 font-bold uppercase text-sm text-background rounded-2xl bg-button hover:bg-button/80 transition-all duration-150">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=573244924827&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios"
            >
              Agendar Llamada
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
