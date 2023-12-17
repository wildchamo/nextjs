function IdSend() {
  return (
    <div>
      <h3 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Ingresa el código enviado a su correo{" "}
      </h3>
      <input
        type="text"
        className="block w-80 rounded-md border-0 pt-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button type="submit">Ingresar</button>
    </div>
  );
}

export default IdSend;
