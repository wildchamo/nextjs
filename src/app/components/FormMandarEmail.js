"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import imageLoader from "../../../public/imageLoader.png";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import useUserStore from "../stores/userStore";
import { imageToBuffer } from "../utils/buffer";
import Modal from "./Modal";

import { jsPDF } from "jspdf";

function FormMandarEmail() {
  const doc = new jsPDF();

  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [images, setImages] = useState([null, null, null, null]);

  const { nombre, identificacion, ciudad, geo } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
    geo: state.geo,
  }));

  useEffect(() => {
    if (!tipo) {
      router.push("/home");
    }
  }),
    [];

  const formRef = useRef();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    async function generatePDF() {
      const doc = new jsPDF();

      // Itera sobre las imágenes y las agrega al PDF
      for (let i = 0; i < 2; i++) {
        await addImageToPDF(doc, images[i], i);
      }

      doc.text("Nombre: " + nombre, 10, 10);
      doc.text("Tipo: " + tipo, 10, 20);
      doc.text("Identificación: " + identificacion, 10, 30);
      doc.text("Ciudad: " + ciudad, 10, 40);
      doc.text("Geo: " + `${geo.latitude},${geo.longitude}`, 10, 50);
      doc.save("reporte.pdf");

      const blob = new Blob([doc.output("blob")], { type: "application/pdf" });

      const formData = new FormData();
      formData.append("pdf", blob);

      // Envía el FormData al backend
      try {
        // const res = await axios.post("/api/email", formData);
        const res = await axios.post("/api/email2", formData);
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsOpen(true);
      }
    }

    generatePDF().catch((error) => console.error(error));

    async function addImageToPDF(doc, file, index) {
      const base64String = await convertImageToBase64(file);
      doc.addImage(base64String, "JPEG", 10, 60 + index * 50, 100, 100);
    }

    function convertImageToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    // try {
    //   // const res = await axios.post("/api/email", formData);
    //   const res = await axios.post("/api/email2", formData2);
    //   setId(res.data.id);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    //   setIsOpen(true);
    // }
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
    <>
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
              required
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

        <h3>Adjunte 1 fotografía en cada sección.</h3>

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
          className="shadow bg-secondary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Reportar caso
        </button>
      </form>

      {/* {isOpen && <ModalTipo id={123123123} onClose={() => setIsOpen(false)} />} */}
      {isLoading && <ModalLoading />}
    </>
  );
}

function ModalTipo({ id }) {
  const router = useRouter();

  const sendBack = () => {
    router.push("/home");
  };

  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Reporte enviado exitosamente. Gracias por confiar en seguros Mayaluna
      </h3>
      A tu correo electronico llegara un mensaje con el reporte de tu caso.
      Radicado Número:
      <p>{id}</p>
      <div className="text-right mt-5">
        <button
          className="bg-secondary w-24 text-white px-4 py-2 rounded-lg"
          onClick={sendBack}
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

function ModalLoading() {
  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">Cargando</h3>A tu correo
      electronico llegara un mensaje con el reporte de tu caso.
    </Modal>
  );
}

export default FormMandarEmail;
