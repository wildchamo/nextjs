import { createMachine, assign } from "xstate";

export const forgotPassowrdMachine = createMachine({
  id: "forgotPass",
  initial: "idSend",
  context: {
    idChangePass: null,
    idUser: null,
  },
  states: {
    idSend: {
      on: {
        START: {
          target: "idVerification",
          actions: assign({
            idChangePass: ({ event }) => event.idChangePass,
            idUser: ({ event }) => event.idUser,
          }),
        },
      },
    },

    idVerification: {
      on: {
        CONTINUE: "changePassword",
      },
    },

    changePassword: {
      on: {
        FINISH: "idSend",
      },
    },
  },
});
