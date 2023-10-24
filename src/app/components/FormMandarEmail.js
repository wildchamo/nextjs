"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import imageLoader from "../../../public/imageLoader.png";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import useUserStore from "../stores/userStore";

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
  }),
    [];

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setGeo({ latitude, longitude });
    };

    navigator.geolocation.getCurrentPosition(successCallback);

    const formData = new FormData(formRef.current);

    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("identificacion", identificacion);
    formData.append("ciudad", ciudad);
    formData.append("geo", `${geo.latitude},${geo.longitude}`);
    formData.append("image1", images[0]);

    try {
      const res = await axios.post("/api/email", formData);

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

  const inputRef1 = useRef(null);


  const handleLoadImage1 = () => {
    inputRef1.current.click();
  };

  const handleImageChange1 = (e) => {
    const newImages = [...images];
    const file = e.target.files[0];
    console.log(file);

    newImages[1] = file;
    setImages(newImages);
  };


  const inputRef2 = useRef(null);


  const handleLoadImage2 = () => {
    inputRef2.current.click();
  };

  const handleImageChange2 = (e) => {
    const newImages = [...images];
    const file = e.target.files[0];
    console.log(file);

    newImages[2] = file;
    setImages(newImages);
  };



  const inputRef3 = useRef(null);

const handleLoadImage3 = () => {
  inputRef3.current.click();
};

const handleImageChange3 = (e) => {
  const newImages = [...images];
  const file = e.target.files[0];
  console.log(file);

  newImages[3] = file;
  setImages(newImages);
};

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
        <div>
          <h4>Ángulos en donde se aprecie el accidente: *</h4>
          <div onClick={handleLoadImage}>
            {images[0] ? (
              <Image
                className="cursor-pointer"
                src={URL.createObjectURL(images[0])}
                width={60}
                height={54}
                alt="imagen accidente"
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

        <div>
          <h4>input2 *</h4>
          <div onClick={handleLoadImage1}>
            {images[1] ? (
              <Image
                className="cursor-pointer"
                src={URL.createObjectURL(images[1])}
                width={60}
                height={54}
                alt="imagen accidente"
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
              ref={inputRef1}
              onChange={handleImageChange1}
              accept="image/*;capture=camera"
              className="hidden"
            />
          </div>
        </div>


        <div>
          <h4>input3 *</h4>
          <div onClick={handleLoadImage2}>
            {images[2] ? (
              <Image
                className="cursor-pointer"
                src={URL.createObjectURL(images[2])}
                width={60}
                height={54}
                alt="imagen accidente"
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
              ref={inputRef2}
              onChange={handleImageChange2}
              accept="image/*;capture=camera"
              className="hidden"
            />
          </div>
        </div>

        <div>
  <h4>input4 *</h4>
  <div onClick={handleLoadImage3}>
    {images[3] ? (
      <Image
        className="cursor-pointer"
        src={URL.createObjectURL(images[3])}
        width={60}
        height={54}
        alt="imagen accidente"
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
      ref={inputRef3}
      onChange={handleImageChange3}
      accept="image/*;capture=camera"
      className="hidden"
    />
  </div>
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
