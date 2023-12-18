"use client";
import { useRef, useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logomayaluna.jpg";
import useUserStore from "../stores/userStore";
import { useRouter } from "next/navigation";

export default function LoginBar() {
  const { login } = useUserStore();
  const { nombre } = useUserStore((state) => ({
    nombre: state.nombre,
  }));
  const router = useRouter();

  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (nombre) {
      router.push("/home");
    }
  }, []);

  const handleClick = (e) => {
    setLoading(true);

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
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <Image
        className="mx-auto mb-14 mt-6 w-auto h-auto"
        src={logo}
        width={150}
        height={150}
        priority={true}
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
                className="block w-80 rounded-md border-0 pt-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-80 rounded-md border-0 pt-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <Link href="/home" onClick={handleClick}>
            <button
              type="submit"
              className="flex w-80 justify-center rounded-2xl bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="animate-spin"
                >
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3a9 9 0 1 0 9 9"
                  />
                </svg>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </Link>

          <p className="mt-10 text-center text-sm text-gray-500">
            {error && <span className=" text-sm text-red-500"> {error}</span>}
            <br />
            ¿Olvidaste tu contraseña?{" "}
            <a href="#" className="font-semibold leading-6 text-secondary">
              Reestablecela aquí
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
