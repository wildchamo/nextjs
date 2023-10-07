import { create } from 'zustand'

const useUserStore = create((set) => ({
  name: null,
  cc: 0,
  idVehicle: "AWS-123",
  setNameAndCc: (name, cc) => set({ name, cc }),

}))


export default useUserStore