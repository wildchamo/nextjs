"use client";
import Link from "next/link";
import logo from "../../../public/logomayaluna.jpg";
import Image from "next/image";
import useUserStore from "../stores/userStore";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const MenuSuperior = () => {
  const { nombre, updateGeo } = useUserStore((state) => ({
    nombre: state.nombre,
    updateGeo: state.updateGeo,
  }));

  const [nombreUser, setNombre] = useState("");

  useEffect(() => {
    setNombre(nombre);
    updateGeo();
  }, []);

  return (
    <div className="flex justify-between mr-8 ml-8 mt-8">
      {usePathname() === "/home" ? (
        <h3>¡Bienvenido {nombreUser} !</h3>
      ) : (
        <Link href="/home">Regresar</Link>
      )}

      <Link href="/home">
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </Link>
    </div>
  );
};

export default MenuSuperior;
