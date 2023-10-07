import Image from "next/image";
import NavAction from "./navAction";
import homePage from "../../../public/homepage.png";
import doorbell from "../../../public/doorbell.png";
import user from "../../../public/user.png";
import call from "../../../public/call.png";

export default function MenuInferior() {
  return (
    <footer className="bg-secundary flex gap-8 mr-12 items-center pl-4 ml-8 h-20 rounded-2xl fixed inset-x-0 bottom-2">
        <NavAction src={homePage} />
        <NavAction src={doorbell} />
        <NavAction src={user} />

      <div className="circulo rounded-full flex flex-col items-center justify-center">
        <a
          href="tel:3142758675"
          className="bg-yellowCall w-20 h-20 rounded-full flex items-center justify-center"
        >
          <Image src={call} width={40} height={40}></Image>
        </a>
      </div>
    </footer>
  );
}
