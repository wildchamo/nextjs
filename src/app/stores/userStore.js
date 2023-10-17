import Cookies from "js-cookie";
import { create } from "zustand";
import axios from "axios";

const users = [
  {
    name: "Jose Luis",
    cc: 123,
    idVehicle: "AWS123",
    city: "Bogotá",
  },
  {
    name: "Eduardo",
    cc: 13011033,
    idVehicle: "DEF456",
    city: "Cali",
  },
  {
    name: "Pedro",
    cc: 987654321,
    idVehicle: "GHI789",
    city: "Cali",
  },
  {
    name: "Moche",
    cc: 10048384290,
    idVehicle: "OCH189",
    city: "Medellín",
  },
];

const useUserStore = create((set) => {
  const userCookie = Cookies.get("user");
  const storedUser = userCookie ? JSON.parse(userCookie) : null;

  return {
    name: storedUser ? storedUser.name : null,
    cc: storedUser ? storedUser.cc : 0,
    idVehicle: storedUser ? storedUser.idVehicle : null,
    city: storedUser ? storedUser.city : null,

    login: async (userid, password) => {
      try {
        const res = await axios.post("/api/auth/login", {
          identificacion: userid,
          password: password,
        });
        return res.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    logout: () => {
      set({ name: null, cc: 0, idVehicle: null, city: null });
      Cookies.remove("user");
    },
  };
});

export default useUserStore;
