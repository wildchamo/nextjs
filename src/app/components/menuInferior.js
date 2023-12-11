"use client";
import Image from "next/image";
import NavAction from "./navAction";
import call from "../../../public/call.png";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import useUserStore from "../stores/userStore";

export default function MenuInferior() {
  const router = useRouter();
  const pathname = usePathname();

  const { logout } = useUserStore();
  const [isActiveArray, setIsActiveArray] = useState([true, false, false]);

  const { nombre } = useUserStore((state) => ({
    nombre: state.nombre,
  }));

  const cerrarSesion = (e) => {
    e.preventDefault();
    logout();
    router.push("/login");
  };

  useEffect(() => {
    if (!nombre) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/home":
        setIsActiveArray([true, false, false]);
        break;
      case "/home/user":
        setIsActiveArray([false, true, false]);
        break;
      // case "/ruta3":
      //   setIsActiveArray([false, false, true]);
      //   break;
      default:
        setIsActiveArray([true, false, false]);
        break;
    }
  }, [pathname]);

  return (
    <footer className="bg-secondary flex gap-4 mr-12 items-center pl-4 ml-8 h-20 rounded-2xl fixed inset-x-0 bottom-2">
      <NavAction
        type="home"
        isActive={isActiveArray[0]}
        onButtonClick={() => {
          router.push("/home");
          setIsActiveArray([true, false, false]);
        }}
      />
      <NavAction
        type="user"
        onButtonClick={() => {
          setIsActiveArray([false, true, false]);
          router.push("/home/user");
        }}
        isActive={isActiveArray[1]}
      />
      <NavAction type="logout" onButtonClick={cerrarSesion} isActive={false} />

      <div className="circulo rounded-full flex flex-col items-center justify-center">
        <a
          href="tel:123"
          className="bg-yellowCall w-20 h-20 rounded-full flex items-center justify-center"
        >
          <Image
            alt="Llamada emergencia"
            src={call}
            width={40}
            height={40}
          ></Image>
        </a>
      </div>
    </footer>
  );
}
