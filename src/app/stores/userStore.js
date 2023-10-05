import { create } from 'zustand'

const useUserStore = create((set) => ({
  name: "Jose Luis",
  cc: 0,
  idVehicle: "AWS-123",
}))


export default useUserStore