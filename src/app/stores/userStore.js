import Cookies from "js-cookie";
import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => {
  const userCookie = Cookies.get("user");
  const storedUser = userCookie ? JSON.parse(userCookie) : null;

  return {
    nombre: storedUser ? storedUser.nombre : null,
    identificacion: storedUser ? storedUser.identificacion : 0,
    rol: storedUser ? storedUser.rol : null,
    ciudad: storedUser ? storedUser.ciudad : null,
    email: storedUser ? storedUser.email : null,
    direccion: storedUser ? storedUser.direccion : null,
    celular: storedUser ? storedUser.celular : null,
    fechaNacimiento: storedUser ? storedUser.fechaNacimiento : null,
    fechaVencimientoLicencia: storedUser
      ? storedUser.fechaVencimientoLicencia
      : null,
    isActive: storedUser ? storedUser.isActive : null,
    _id: storedUser ? storedUser._id : null,
    geo:null,

    login: async (userid, password) => {
      try {
        const res = await axios.post("/api/auth/login", {
          identificacion: userid,
          password: password,
        });

        set({
          nombre: res.data.nombre,
          identificacion: res.data.identificacion,
          rol: res.data.rol,
          ciudad: res.data.ciudad,
          direccion: res.data.direccion,
          celular: res.data.celular,
          fechaNacimiento: res.data.fechaNacimiento,
          fechaVencimientoLicencia: res.data.fechaVencimientoLicencia,
          isActive: res.data.isActive,
          _id: res.data._id,
        });
        Cookies.set("user", JSON.stringify(res.data));
        return res.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    updateGeo: () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          set({
            geo: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    logout: () => {
      set({ nombre: null, identificacion: null, rol: null, ciudad: null });
      Cookies.remove("user");
    },
  };
});

export default useUserStore;
