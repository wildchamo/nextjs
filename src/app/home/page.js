"use client";
import useUserStore from "../stores/userStore";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import PicoyPlaca from "../components/PicoyPlaca.js";
import MisSeguros from "../components/MisSeguros";
import MisReportes from "../components/MisReportes";
import { useEffect, useState } from "react";

export default function Home() {
  const { nombre, identificacion, ciudad, rol } = useUserStore((state) => ({
    nombre: state.nombre,
    identificacion: state.identificacion,
    ciudad: state.ciudad,
    rol: state.rol,
  }));

  const [userData, setUserData] = useState({
    nombre: "",
    identificacion: "",
    ciudad: "",
  });

  useEffect(() => {
    setUserData({ nombre, identificacion, ciudad });
  }, []);

  return (
    <main className="mr-8 ml-8 mt-8">
      <div className="flex justify-between">
        <h3>¡Bienvenido {userData.nombre} !</h3>
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </div>
      <PicoyPlaca ciudad={userData.ciudad} />
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
