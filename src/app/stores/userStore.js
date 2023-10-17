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
        });
        Cookies.set("user", JSON.stringify(res.data));
        return res.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    logout: () => {
      set({ nombre: null, identificacion: null, rol: null, ciudad: null });
      Cookies.remove("user");
    },
  };
});

export default useUserStore;
