"use client";
import { useMachine } from "@xstate/react";
import { forgotPassowrdMachine } from "./forgotPasswordMachine";
import IdSend from "./IdSend/IdSend";
import IdVerificaction from "./IdVerification/IdVerificaction";
import ChangePassword from "./ChangePassword/ChangePassword";

export const ForgotPasswordForm = () => {
  const [state, send] = useMachine(forgotPassowrdMachine);


  const renderContent = () => {
    if (state.matches("idSend")) return <IdSend send={send} />;
    if (state.matches("idVerification")) return <IdVerificaction send={send} context={state.context}/>;
    if (state.matches("changePassword")) return <ChangePassword send={send} />;
    return null;
  };

  return <section>{renderContent()}</section>;
};
