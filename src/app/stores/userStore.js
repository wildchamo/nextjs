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

const useUserStore = create((set) => ({
  name: null,
  cc: 0,
  idVehicle: null,
  city: null,

  login: (login, cc) => {
    const user = users.find((user) => login === cc && user.cc === parseInt(cc));
    set({
      name: user.name,
      cc: user.cc,
      idVehicle: user.idVehicle,
      city: user.city,
    });
  },
  logout: () => set({ name: null, cc: 0, idVehicle: null, city: null }),
  setNameAndCc: (name, cc) => set({ name, cc }),
}));

export default useUserStore;
