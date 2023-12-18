import { createMachine, assign } from "xstate";

export const forgotPassowrdMachine = createMachine({
  id: "forgotPass",
  initial: "idSend",
  context: {
    idChangePass: null,
  },
  states: {
    idSend: {
      on: {
        START: {
          target: "idVerification",
          actions: assign({
            idChangePass: ({ event }) => event.idChangePass,
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
