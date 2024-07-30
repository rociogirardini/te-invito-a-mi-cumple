import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import { LoadingButton } from "./LoadingButton";
import confirmacion from "../images/confirmacion.jpeg"

const ConfirmationStep = () => {
  const {
    name,
    hasPartner,
    spinner,
    emailTo,
    setEmailTo,
    detailsSent,
    sendDetailsEmail,
  } = useInvitation();
  return (
    <div className="invitation grid grid-cols-1 gap-y-4 text-center px-2">
      <img alt="grax" src={confirmacion} style={{ padding: "15px", maxHeight: '500px' }} />
      {!detailsSent ? (
         <span className="tracking-widest grid justify-items-center grid-cols-1 gap-y-5">
          <p>
            {hasPartner ? "Los" : "Te"} espero, {name} :)
          </p>
          <p>Te lo mando por mail:</p>
          <input
            type="text"
            value={emailTo}
            onChange={(e) => setEmailTo(e.target.value)}
            placeholder="Tu email"
            className=" bg-slate-200 rounded-full w-50 py-2 px-3 text-black focus:outline-fuchsia-800"
          />
          <LoadingButton
            loading={spinner}
            action={sendDetailsEmail}
            label="Enviar"
          />
        </span>
      ) : (
        <p>¡Gracias!</p>
      )}
    </div>
  );
};

export default ConfirmationStep;
