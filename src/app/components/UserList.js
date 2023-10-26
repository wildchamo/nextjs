"use client";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/getusers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);


  return (
    <div>

    <input type="text" placeholder="Ingresa el nombre o documento del usuario que quieres buscar" />
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
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
