import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import { LoadingButton } from "./LoadingButton";

const InvitationStep = () => {
  const { hasPartner, spinner, sendEmailToMe } = useInvitation();

  return (
    <div className="invitation grid grid-cols-1 gap-y-4 text-center px-2">
      <h1 className="text-7xl title bubble-font">
        {hasPartner ? "Los" : "Te"} invito a mi cumple
      </h1>
      <h2 className="text-9xl number bubble-font">26</h2>
      <span className="tracking-widest grid justify-items-center grid-cols-1 gap-y-5">
        <p>Todavía no se qué hacer </p>
        <p className="text-4xl date bubble-font">Sabado 7 a las 13 hs</p>
        <div>
          <p className="mb-0">LUGAR: MI CASA</p>
          <p className="mt-0">TRAER: SUSTANCIAS A CONSUMIR</p>
        </div>
        <LoadingButton
          loading={spinner}
          action={sendEmailToMe}
          label="Confirmar"
        />
      </span>
    </div>
  );
};

export default InvitationStep;
