import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import { LoadingButton } from "./LoadingButton";
import Banderines from '../images/banderines.png';

const InvitationStep = () => {
  const { spinner, sendEmailToMe } = useInvitation();

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-red-600 to-yellow-400 p-6">
      <div className="max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
      <div className="flex items-center justify-center gap-3">
          <img src={Banderines} alt="icono" className="w-8 h-8" />
          <h1 className="text-4xl font-bold text-red-600">Me voy</h1>
          <img src={Banderines} alt="icono" className="w-8 h-8" />
        </div>

        <h1 className="text-4xl font-bold text-red-600 mb-4">🇦🇷 🤝🏽 🇪🇸</h1>

        <h2 className="text-2xl font-semibold text-gray-800">
          Pero antes, nos despedimos cómo se debe 🎉✈️
        </h2>
        <p className="text-gray-700 mt-4">Último finde juntis 🫶🏽</p>
        <div className="mt-6 space-y-2 text-gray-900 font-medium">
          <p>
            📅 <strong>Cuándo?</strong> 22 de marzo
          </p>
          <p>
            🕒 <strong>A qué hs?</strong> 13 hs
          </p>
          <p>
            📍 <strong>Dónde?</strong> Mi casa
          </p>
          <p>
            🎁 <strong>Llevo algo?</strong> Para tomar
          </p>
        </div>
        <p className="text-gray-700 mt-6">Confirma tu asistencia porfis</p>
        <LoadingButton
          loading={spinner}
          action={sendEmailToMe}
          label="Confirmar"
        />
      </div>
    </div>
  );
};

export default InvitationStep;
