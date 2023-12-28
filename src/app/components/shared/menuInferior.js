import NavAction from "./navAction";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import call from "../../../../public/call.png";

export default function MenuInferior() {


  return (
    <footer className="bg-secondary flex gap-1 mr-12 items-center pl-2 ml-8 h-20 rounded-2xl fixed inset-x-0 bottom-2">
      <NavAction href="/home"></NavAction>
      <NavAction href="/home/user"></NavAction>
      <LogoutButton/>

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
