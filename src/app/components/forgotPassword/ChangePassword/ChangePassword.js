function changePassword({ send }) {
  const sendEmailCode = () => {
    send({ type: "START" });
  };
  return (
    <div className="mx-5">
      <h3 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Ingresa su nueva contraseña y verifiquela
      </h3>
      Nueva contraseña
      <input
        type="text"
        className="block w-80 my-2 rounded-md border-0 pt-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      verificar contraseña
      <input
        type="text"
        className="block w-80 my-2 rounded-md border-0 pt-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        type="submit"
        className="flex w-80 justify-center rounded-2xl bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Ingresar
      </button>
    </div>
  );
}

export default changePassword;
