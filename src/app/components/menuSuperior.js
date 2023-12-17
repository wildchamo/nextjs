"use client";
import Link from "next/link";
import logo from "../../../public/logomayaluna.jpg";
import Image from "next/image";
import useUserStore from "../stores/userStore";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Modal from "./Modal";
import { usePathname, useRouter } from "next/navigation";

const MenuSuperior = () => {
  const router = useRouter();

  const { nombre, error, updateGeo } = useUserStore((state) => state);

  useEffect(() => {
    if (!nombre) {
      router.push("/");
    }
    updateGeo();
  }, []);


  const goBack = () => {
    router.back();
  };

  return (
    <>
      <div className="flex justify-between mr-8 ml-8 mt-8">
        {usePathname() === "/home" ? (
          <h3>¡Bienvenido {nombre} !</h3>
        ) : (
          <div onClick={goBack} className="uppercase">
            Regresar
          </div>
        )}

        <Link href="/home">
          <Image
            className="w-auto h-auto"
            src={logo}
            width={80}
            height={80}
            alt="logoMayaluna"
          />
        </Link>
      </div>
      {error ? <ModalError /> : ""}
    </>
  );
};

function ModalError() {
  const { updateGeo } = useUserStore();

  useEffect(() => {
    console.log("HOLAA");
    updateGeo();
  }, []);

  return (
    <Modal>
      <h3 className="text-md text-left font-bold mb-4">
        Es que actives la ubicación para poder continuar
      </h3>
      <p>
        Si has denegado el acceso a la ubicación, por favor ve a la
        configuración de tu navegador y permite el acceso a la ubicación para
        este sitio.
      </p>
    </Modal>
  );
}

export default dynamic(() => Promise.resolve(MenuSuperior), { ssr: false });
