import { ForgotPasswordForm } from "../components/forgotPassword";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";

export default function ForgotPasswordPage() {
  return (
    <section className="w-screen h-screen bg-gradient-to-t from-gradientGreen to-white">
      <Image
        className="mx-auto mb-14 mt-6"
        src={logo}
        width={150}
        height={150}
        alt="logoMayaluna"
      />

      <ForgotPasswordForm />
    </section>
  );
}
