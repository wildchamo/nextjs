import Cookies from "js-cookie";
import { create } from "zustand";

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
  const storedUser = JSON.parse(Cookies.get("user"));
  
  return {
    name: storedUser ? storedUser.name : null,
    cc: storedUser ? storedUser.cc : 0,
    idVehicle: storedUser ? storedUser.idVehicle : null,
    city: storedUser ? storedUser.city : null,

    login: (login, cc) => {
      const user = users.find(
        (user) => login === cc && user.cc === parseInt(cc)
      );
      if (!user) return false;
      else {
        set({
          name: user.name,
          cc: user.cc,
          idVehicle: user.idVehicle,
          city: user.city,
        });
        console.log(user);
        Cookies.set("user", JSON.stringify(user));
        return user;
      }
    },
    logout: () => {
      set({ name: null, cc: 0, idVehicle: null, city: null });
      Cookies.remove("user");
    },
  };
});

export default useUserStore;
