"use client";
import Link from "next/link";
import logo from "../../../public/logomayaluna.jpg";
import Image from "next/image";
import useUserStore from "../stores/userStore";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

const MenuSuperior = () => {
  const router = useRouter();

  const { nombre, updateGeo } = useUserStore((state) => state);

  useEffect(() => {
    updateGeo();
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
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
          priority={true}
          alt="logoMayaluna"
        />
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MenuSuperior), { ssr: false });
