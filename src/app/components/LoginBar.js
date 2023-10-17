"use client";
import { useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import useUserStore from "../stores/userStore";
import { useRouter } from "next/navigation";

export default function LoginBar() {
  const { login } = useUserStore();
  const { name } = useUserStore((state) => ({
    name: state.name,
  }));
  const router = useRouter();

  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (name) {
      // router.push("/home");
    }
  }, []);

  const handleClick = (e) => {
    const userid = userIdRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();

    login(userid, password)
      .then((res) => {
        console.log(res);
        if (res != undefined) {
          router.push("/home");
        }
      })
      .catch((error) => {
        //TODO HANDLE ERROR
        console.log(error);
      });
  };

  return (
    <main className="">
      <Image
        className="mx-auto mb-14 mt-6"
        src={logo}
        width={150}
        height={150}
        alt="logoMayaluna"
      />

      <h3 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        ¡Bienvenido de Nuevo!
      </h3>

      <div className="mt-10	justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6 flex flex-col items-center"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No de Identificación
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="text"
                name="email"
                autoComplete="email"
                ref={userIdRef}
                required
                className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  ref={passwordRef}
                  required
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <Link href="/home" onClick={handleClick}>
            <button
              type="submit"
              className="flex w-80 justify-center rounded-2xl bg-secundary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Iniciar sesión
            </button>
          </Link>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Olvidaste tu contraseña?{" "}
            <a href="#" className="font-semibold leading-6 text-secundary">
              Reestablecela aquí
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
