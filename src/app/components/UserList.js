"use client";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch("/api/getusers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        class="block m-0 block w-full min-w-0 flex-auto rounded border py-2 px-4 rounded"
        placeholder="Busque por nombre o documento..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="shadow bg-secundary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/admin/crearUser")}
      >
        Crear un nuevo usuario
      </button>
      <h1 className="text-center">Lista de usuarios</h1>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user._id}>
            <span>{user.nombre}</span>
            <span>{user.identificacion}</span>
            <span>{user.ciudad}</span>
            <span>{user.celular}</span>
            <span>{user.fechaVencimientoLicencia}</span>
            <span>{user.fechaNacimiento}</span>
            <span>{user.direccion}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
