"use client";
import useUserStore from "../stores/userStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import PicoyPlaca from "../components/PicoyPlaca.js";
import MisSeguros from "../components/MisSeguros";
import MisReportes from "../components/MisReportes";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    idVehicle: "",
    city: "",
  });

  const { name, idVehicle, city } = useUserStore((state) => ({
    name: state.name,
    idVehicle: state.idVehicle,
    city: state.city,
  }));

  useEffect(() => {
    setUserData({ name, idVehicle, city });
    if(userData.name === null) router.push("/");
  }, []);

  return (
    <main className="mr-8 ml-8 mt-8">
      <div className="flex justify-between">
        <h3>¡Bienvenido {userData.name} !</h3>
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </div>
      <PicoyPlaca ciudad={userData.city} placa={userData.idVehicle} />
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
