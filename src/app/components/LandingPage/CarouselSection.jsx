"use client"
import React, { useState, useEffect } from "react";
import { carouselImages } from "./constants";

const CarouselSection = () => {
  return (
    <section className="bg-section-background bg-cover bg-no-repeat bg-center relative mx-auto">
      <div className="flex flex-col items-center lg:flex-row relative z-[2] sm:py-16 py-10 max-w-6xl mx-auto">
        <div className="text-background my-10 lg:my-20 px-10 w-full">
          <h2 className="text-2xl md:text-[2rem] xl:text-[3rem] font-extrabold xl:leading-[3.5rem]">
            Alianzas estratégicas
          </h2>
          <p className="text-sm xl:text-xl mt-2 mb-5 text-primary">
            A través de nuestras alianzas corporativas las cuales han
            desarrollado un programa de servicios y beneficios.
          </p>
          <div className="lg:my-10">
            <img
              className="lg:h-[300px] lg:w-full rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[20%] object-cover"
              src="https://mayalunaseguros.com/wp-content/uploads/2023/07/gente-negocios-dandose-mano-1024x683.jpg"
              alt="section_image"
            />
          </div>
        </div>
        <div className="px-10 lg:my-20 flex justify-center w-screen">
          <Carousel />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </section>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + carouselImages.length) % carouselImages.length
  //   );
  // };

  useEffect(() => {
    const container = document.getElementById("carouselContainer");

    const handleTransitionEnd = () => {
      nextSlide();
      container.removeEventListener("transitionend", handleTransitionEnd);
    };

    const intervalId = setInterval(() => {
      container.addEventListener("transitionend", handleTransitionEnd);
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = `translateX(${-currentIndex * 25}%)`;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="bg-background rounded-2xl overflow-hidden">
      <div className="relative flex items-center overflow-hidden">
        {/* <button
          className="hidden sm:block absolute top-1/2 left-3 transform -translate-y-1/2 bg-header text-background font-bold z-10 px-5 text-2xl rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          &lt;
        </button> */}
        <div
          id="carouselContainer"
          className="w-full flex transition-transform duration-00 ease-in-out transform p-5"
        >
          {carouselImages.map((image, index) => (
            <img
              key={index}
              className="h-24 sm:h-[12rem] rounded-lg mx-4"
              src={image}
              alt={`carousel-${index}`}
            />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-2/12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-2/12 bg-gradient-to-r from-transparent to-white"></div>
        {/* <button
          className="hidden sm:block absolute top-1/2 right-3 transform -translate-y-1/2 bg-header text-background font-bold z-10 px-5 text-2xl rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default CarouselSection;
