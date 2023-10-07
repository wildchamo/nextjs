import { create } from 'zustand'


const useUserStore = create((set) => ({
  name: null,
  cc: 0,
  idVehicle: "AWS-123",
  login: (login, cc) => {
    
    // if(login === cc && login === "13011033"){
        set({name: "Eduardo"}) 
    // }
  },
  setNameAndCc: (name, cc) => set({ name, cc }),

}))


export default useUserStore