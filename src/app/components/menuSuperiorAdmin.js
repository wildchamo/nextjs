import Link from "next/link";
import Image from "next/image";

const MenuSuperiorAdmin = () => {
  return (
    <div className="flex justify-between">
      <Link href="/admin">Panel Administrador MayaLuna</Link>
      <Image
        className="w-auto h-auto"
        src="/logomayaluna.jpg"
        width={80}
        height={80}
        alt="logoMayaluna"
      />
    </div>
  );
};

export default MenuSuperiorAdmin;
