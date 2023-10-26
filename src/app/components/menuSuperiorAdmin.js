import Link from "next/link";
import logo from "../../../public/logomayaluna.jpg";
import Image from "next/image";

const MenuSuperiorAdmin = () => {
  return (
    <div className="flex justify-between">
      <Link href="/admin">Panel Administrador MayaLuna</Link>
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

export default MenuSuperiorAdmin;
