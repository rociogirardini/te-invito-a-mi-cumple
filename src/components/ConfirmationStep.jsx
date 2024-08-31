import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import { LoadingButton } from "./LoadingButton";
import confirmacion from "../images/confirmacion.jpeg";
import tematica from "../images/tematica.jpeg";

const ConfirmationStep = () => {
  const {
    hasPartner,
    spinner,
    emailTo,
    setEmailTo,
    detailsSent,
    sendDetailsEmail,
  } = useInvitation();
  return (
    <div className="invitation grid grid-cols-1 gap-y-4 text-center px-2">
      {!detailsSent ? (
        <>
          <img
            alt="grax"
            src={tematica}
            style={{ padding: "15px", maxHeight: "500px" }}
          />
          <span className="tracking-widest grid justify-items-center grid-cols-1 gap-y-5">
            <div>
              <p>{hasPartner ? "Los" : "Te"} espero :)</p>
              <p>Si te vas a olvidar, te llega por email:</p>
            </div>
            <input
              type="text"
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
              placeholder={`holi@tuemail.com`}
              className=" bg-slate-200 rounded-full w-50 py-2 px-3 text-black focus:outline-fuchsia-800"
            />
            <LoadingButton
              disabled={!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailTo)}
              loading={spinner}
              action={sendDetailsEmail}
              label="Enviar"
            />
          </span>
        </>
      ) : (
        <>
          <img
            alt="grax"
            src={confirmacion}
            style={{ padding: "15px", maxHeight: "500px" }}
          />
          <span>
            <p>¡Gracias!</p>
            <p>¡Gracias!</p>
            <p>¡Gracias!</p>
          </span>
        </>
      )}
    </div>
  );
};

export default ConfirmationStep;
