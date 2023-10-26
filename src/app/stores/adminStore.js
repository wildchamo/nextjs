import { create } from "zustand";

const useAdminStore = create((set) => {
  return {
    nombre: null,
    identificacion: null,
    rol: null,
    ciudad: null,
    email: null,
    direccion: null,
    celular: null,
    fechaNacimiento: null,
    fechaVencimientoLicencia: null,
    isActive: null,
    _id: null,
    setAdminUser: (user) => {
      set(user);
    },
  };
});

export default useAdminStore;
