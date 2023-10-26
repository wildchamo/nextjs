"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAdminStore from "../stores/adminStore";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const setAdminUser = useAdminStore((state) => state.setAdminUser);

  useEffect(() => {
    fetch("/api/getusers")
      .then((res) => res.json())
      .then((data) => {
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
        className="block m-0 block w-full min-w-0 flex-auto rounded border py-2 px-4 rounded"
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
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left">
            <th>Nombre Usuario</th>
            <th>Documento</th>
            <th>Más información</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.nombre}</td>
              <td>{user.identificacion}</td>
              <td>
                <button
                  className="shadow bg-secundary px-1 py-1 focus:shadow-outline focus:outline-none text-white rounded"
                  onClick={() => {
                    setAdminUser(user);
                    router.push("/admin/User");
                  }}
                >
                  ????
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
