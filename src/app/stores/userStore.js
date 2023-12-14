import Cookies from "js-cookie";
import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => {
  const userCookie = Cookies.get("user");
  const storedUser = userCookie ? JSON.parse(userCookie) : null;

  return {
    nombre: storedUser ? storedUser.nombre : null,
    identificacion: storedUser ? storedUser.identificacion : 0,
    email: storedUser ? storedUser.email : null,
    celular: storedUser ? storedUser.celular : null,
    direccion: storedUser ? storedUser.direccion : null,
    ciudad: storedUser ? storedUser.ciudad : null,
    //fecha reporte
    //número de heridos en el caspo que sea agrevado
    //como ocurrió listo
    //información testigos, Jalar de los inputs
    rol: storedUser ? storedUser.rol : null,
    fechaNacimiento: storedUser ? storedUser.fechaNacimiento : null,
    fechaVencimientoLicencia: storedUser
      ? storedUser.fechaVencimientoLicencia
      : null,
    isActive: storedUser ? storedUser.isActive : null,
    _id: storedUser ? storedUser._id : null,
    geo: null,
    seguros: [
      {
        id: 123,
        seguro: "Todo Riesgo",
        vencimiento: "27 Abr 2025",
      },
      {
        id: 456,
        seguro: "Exequias",
        vencimiento: "30 Ene 2024",
      },
    ],

    updateUser: (userData) => {
      set((state) => {
        const updatedState = { ...state, ...userData };
        Cookies.set("user", JSON.stringify(updatedState));
        return updatedState;
      });
    },
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

        // // Ahora que el usuario ha iniciado sesión, obtén sus seguros
        // const segurosRes = await axios.get(
        //   `/api/seguros?userId=${res.data._id}`
        // );
        // set({ seguros: segurosRes.data });

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
