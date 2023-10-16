"use client";
import { useRef } from "react";

function FormCrearUser() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const nombre = formData.get("nombre");
    const identificacion = formData.get("identificacion");
    const password = formData.get("password");
    const ciudad = formData.get("ciudad");
    const rol = formData.get("rol");
    const isActive = formData.get("isActive") === "true";

    // Muestra la información en la consola
    console.log("Nombre:", nombre);
    console.log("Identificación:", identificacion);
    console.log("Password:", password);
    console.log("Ciudad:", ciudad);
    console.log("Rol:", rol);
    console.log("isActive:", isActive);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" />
      </div>
      <div>
        <label>Identificación:</label>
        <input type="text" name="identificacion" />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="text" name="password" placeholder="Igual al número de identificación si no se especifica" />
      </div>
      <div>
        <label>Ciudad:</label>
        <select name="ciudad">
          <option value="Bogota">Bogota</option>
          <option value="Medellin">Medellin</option>
          <option value="Cali">Cali</option>
        </select>
      </div>
      <div>
        <label>Rol:</label>
        <input type="text" name="rol" />
      </div>
      <div>
        <label>isActive:</label>
        <select name="isActive">
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormCrearUser;
