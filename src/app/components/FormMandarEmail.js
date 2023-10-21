"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import imageLoader from "../../../public/imageLoader.png";
import logo from "../../../public/logomayaluna.jpg";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import useUserStore from "../stores/userStore";
import Link from "next/link";

function FormMandarEmail() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");
  const router = useRouter();

  const [geo, setGeo] = useState({});

  const [images, setImages] = useState([null, null, null, null]);

  const { nombre, identificacion, ciudad } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
  }));



  useEffect(() => {
    if (!tipo) {
      router.push("/home");
    }
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setGeo({ latitude, longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  }),
    [];
    const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData(formRef.current);

    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("identificacion", identificacion);
    formData.append("ciudad", ciudad);
    formData.append("geo", `${geo.latitude},${geo.longitude}`);

    try {
      const res = await axios.post(
        "/api/email",
        formData
        // {
        //   nombre,
        //   identificacion,
        //   ciudad,
        //   comoOcurrio: formData.get("comoOcurrio"),
        //   tipo,
        //   geo: formData.get("geo"),
        //   images,
        // }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const inputRef = useRef(null);

  const handleLoadImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const newImages = [...images];
    const file = e.target.files[0];
    console.log(file);

    newImages[0] = file;
    setImages(newImages);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <Link href="/home">Regresar</Link>
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </div>

      <div>
        <h1 className="text-center uppercase">Reporte {tipo}</h1>

        <h2>Información del accidente</h2>

        <div className="flex flex-col justify-between bg-primary p-6 rounded-2xl text-sm">
          <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
            ¿Cómo sucedió el accidente? *
          </label>
          <textarea
            type="text"
            name="comoOcurrio"
            className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Descipción detallada "
          />
        </div>
      </div>
      <h2>Información de los testigos</h2>

      <div className="bg-primary p-6 rounded-2xl text-sm">
        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Nombre (opcional)
        </label>
        <input
          type="text"
          name=""
          className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Descipción detallada "
        />

        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Número de contacto (opcional)
        </label>
        <input
          type="text"
          name=""
          className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Descipción detallada "
        />
      </div>

      <h2>Evidencias fotográficas:</h2>

      <h3>Adjunte 4 fotografías en cada sección.</h3>

      <div className="bg-primary p-6 rounded-2xl">
        <h4>Ángulos en donde se aprecie el accidente: *</h4>
        <div onClick={handleLoadImage}>
          {images[0] ? (
            <Image
              className="cursor-pointer"
              src={URL.createObjectURL(images[0])}
              width={60}
              height={54}
              alt="logoMayaluna"
            />
          ) : (
            <Image
              className="cursor-pointer"
              src={imageLoader}
              width={60}
              height={54}
              alt="logoMayaluna"
            />
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            accept="image/*;capture=camera"
            className="hidden"
          />
        </div>
      </div>

      <button
        className="shadow bg-secundary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={handleSubmit}
      >
        Reportar caso
      </button>
    </form>
  );
}

export default FormMandarEmail;
