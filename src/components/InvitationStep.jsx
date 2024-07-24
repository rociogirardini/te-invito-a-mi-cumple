import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import { LoadingButton } from "./LoadingButton";

const InvitationStep = () => {
  const {
    name,
    hasPartner,
    spinner,
    sendEmailToMe,
    emailSent,
    emailTo,
    setEmailTo,
    sendDetailsEmail,
    detailsSent,
  } = useInvitation();

  return (
    <div className="invitation grid grid-cols-1 gap-y-4 text-center px-2">
      <h1 className="text-7xl title bubble-font">
        {hasPartner ? "Los" : "Te"} invito a mi cumple
      </h1>
      <h2 className="text-9xl number bubble-font">26</h2>
      <span className="tracking-widest grid justify-items-center grid-cols-1 gap-y-5">
        <p>Todavía no se qué hacer </p>
        <p className="text-4xl date bubble-font">Sabado 7 a las 13 hs</p>
        <p>LUGAR: MI CASA</p>
        {emailSent ? (
          !detailsSent ? (
            <>
              <p>
                {hasPartner ? "Los" : "Te"} espero, {name}!
              </p>
              <p>Sacale captura de pantalla o recibilo por mail:</p>
              <input
                type="text"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                placeholder="Tu email"
                className=" mt-2 bg-slate-200 rounded-full w-50 py-2 px-3 text-black focus:outline-fuchsia-800"
              />
              <LoadingButton
                loading={spinner}
                action={sendDetailsEmail}
                label="Enviar"
              />
            </>
          ) : ( <p>¡Gracias!</p>)
        ) : (
          <LoadingButton
            loading={spinner}
            action={sendEmailToMe}
            label="Confirmar"
          />
        )}
      </span>
    </div>
  );
};

export default InvitationStep;
