"use client";
import useUserStore from "../stores/userStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import PicoyPlaca from "../components/PicoyPlaca.js";
import MisSeguros from "../components/MisSeguros";
import MisReportes from "../components/MisReportes";

export default function Home() {
  const router = useRouter();

  const { name, idVehicle, city } = useUserStore((state) => ({
    name: state.name,
    idVehicle: state.idVehicle,
    city: state.city,
  }));

  return (
    <main className="mr-8 ml-8 mt-8">
      <div className="flex justify-between">
        <h3>¡Bienvenido {name} !</h3>
        <Image
          className=""
          src={logo}
          width={80}
          height={80}
          alt="logoMayaluna"
        />
      </div>
      <PicoyPlaca ciudad={city} placa={idVehicle} />
      <MisSeguros />
      <MisReportes />
    </main>
  );
}
