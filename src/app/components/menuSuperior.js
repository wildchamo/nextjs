"use client";
import Link from "next/link";
import logo from "../../../public/logomayaluna.jpg";
import Image from "next/image";
import useUserStore from "../stores/userStore";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const MenuSuperior = () => {
  const { nombre } = useUserStore((state) => ({
    nombre: state.nombre,
  }));

  const [nombreUser, setNombre] = useState("Jose Luis");

  useEffect(() => {
    setNombre(nombre);
  }, []);

  return (
    <div className="flex justify-between mr-8 ml-8 mt-8">
      {usePathname() === "/home" ? (
        <h3>¡Bienvenido {nombreUser} !</h3>
      ) : (
        <Link href="/home">Regresar</Link>
      )}
      <Image
        className=""
        src={logo}
        width={80}
        height={80}
        alt="logoMayaluna"
      />
    </div>
  );
};

export default MenuSuperior;
