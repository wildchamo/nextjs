import { createMachine } from "xstate";

export const forgotPassowrdMachine = createMachine({
  id: "forgotPass",
  initial: "idSend",
  context: {
    idChangePass: 0,
  },
  states: {
    idSend: {
      on: {
        START: {
          target: "idVerification",
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
