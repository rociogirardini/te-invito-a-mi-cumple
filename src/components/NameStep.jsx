import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import img1 from "../images/imagen1_es.png";

const NameStep = () => {
  const { name, setName, next } = useInvitation();

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          borderRadius: "15px",
          margin: "15px",
          overflow: 'hidden'
        }}
      >
        <img alt="inicio" src={img1} />
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        className=" mt-2 bg-slate-200 rounded-full w-50 py-2 px-3 text-black focus:outline-red-600"
      />
      <button
        onClick={next}
        disabled={name === ""}
        className="rounded-full mt-4 px-5 py-3 bg-red-700 text-white disabled:bg-zinc-500 disabled:text-zinc-300"
      >
        Siguiente
      </button>
    </div>
  );
};

export default NameStep;
