import React from "react";
import { cardInfo } from "./constants";

const AboutCard = () => {
  return (
    <>
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-6xl mx-auto relative z-0 justify-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="rounded-xl p-0.5 bg-gradient-to-b from-gradientGreen to-background transition-all duration-250 hover:bg-gradient-to-t hover:from-secondary hover:to-primary hover:scale-105 hover:cursor-pointer"
          >
            <div className="flex flex-col space-y-2 rounded-xl shadow-lg p-6 sm:h-[300px] bg-background">
              <img className="h-10 w-10" src={card.icon} alt={card.title} />
              <span className="text-xl text-header font-bold">
                {card.title}
              </span>
              <p className="text-mutedForeground">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-section-background bg-cover bg-no-repeat bg-center relative mx-auto">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-center relative z-[2] sm:py-16 py-10 max-w-6xl mx-auto">
          <div className="text-background my-10 lg:my-20 px-10 lg:w-[50%]">
            <h2 className="text-2xl md:text-[2rem] xl:text-[3rem] font-extrabold xl:leading-[3.5rem]">
              Prepárate para lo inesperado
            </h2>
            <p className="text-sm xl:text-xl mt-2 mb-5 text-primary">
              Encuentre la póliza de seguro de vida adecuada para usted o su
              negocio.
            </p>
            <div className="w-full rounded-xl bg-background flex flex-col items-center sm:flex-row p-5 space-x-3 md:items-center mb-10">
              <div className="flex items-center justify-center rounded-full bg-secondary p-4 mb-2 sm:mb-0">
                <img
                className="object-cover w-16 sm:w-24 items-center"
                  src="https://mayalunaseguros.com/wp-content/uploads/2021/06/escudo-proteccion.png"
                  alt="check_icon"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <span className="text-foreground text-xl font-bold">
                  Excelente proteccion
                </span>
                <p className="text-mutedForeground">
                  Establezca su cobertura financiera, asegurela incluso si
                  cambia de trabajo o pierde la cobertura.
                </p>
              </div>
            </div>
            <div className="w-full rounded-xl bg-background flex flex-col items-center sm:flex-row p-5 space-x-3 md:items-center">
              <div className="flex items-center justify-center rounded-full bg-secondary w-fit h-fit p-4 mb-2 sm:mb-0">
                <img
                  className="object-cover w-16 sm:w-24 items-center"
                  src="https://mayalunaseguros.com/wp-content/uploads/2021/06/ahorrando-dinero.png"
                  alt="flower_icon"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <span className="text-foreground text-xl font-bold">
                  Alto potencial de ahorro
                </span>
                <p className="text-mutedForeground">
                  Organice sus ingresos para preservar el estilo de vida de su
                  familia.
                </p>
              </div>
            </div>
          </div>
          <div className="px-10 lg:my-20 flex justify-center">
            <img
              className="lg:h-[520px] lg:w-[520px] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[20%]"
              src="https://mayalunaseguros.com/wp-content/uploads/elementor/thumbs/pexels-cottonbro-studio-4569307-scaled-qc6hqrjplbesehne1eva0grshrz5ncwhvj7svijdky.jpg"
              alt="section_image"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-foreground opacity-40"></div>
      </section>
    </>
  );
};

export default AboutCard;
