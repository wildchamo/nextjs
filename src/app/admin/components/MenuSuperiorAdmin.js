"use client";

import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const MenuSuperiorAdmin = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex justify-between">
      {usePathname() === "/admin" ? (
        <h3>Panel Administrador MayaLuna</h3>
      ) : (
        <div onClick={goBack} className="uppercase">
          Regresar
        </div>
      )}
    <Link href="/admin">
      <Image
        className="w-auto h-auto"
        src="/logomayaluna.jpg"
        width={80}
        height={80}
        alt="logoMayaluna"
        />
        </Link>
    </div>
  );
};

export default MenuSuperiorAdmin;
