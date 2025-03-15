import React from "react";
import { useInvitation } from "../context/InvitacionContext";
import paraa from "../images/para.jpg";
import { LoadingButton } from "./LoadingButton";

const PartnerStep = () => {
  const {
    hasPartner,
    setHasPartner,
    quantity,
    setQuantity,
    next,
    spinner,
  } = useInvitation();

  const getMessage = () => {
    switch (quantity) {
      case 0:
        return null;
      case 1:
        return null;
      case 2:
        return <p className="text-sm mt-1">Bue, cuánta gente tenía</p>;
      case 3:
        return <p className="text-sm mt-1">Te parece que da?</p>;
      default:
        return <img alt="paraa" src={paraa} width={50} />;
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      <p>
        <span>Acá invitamos pero no juzgamos</span>
      </p>
      <p className="text-sm">Quéres ir con alguien? 😏</p>
      <label className="inline-flex items-center cursor-pointer mt-2">
        <input
          type="checkbox"
          disabled={spinner}
          value={hasPartner}
          className="sr-only peer"
          onClick={() => {
            setHasPartner(!hasPartner);
            setQuantity(0);
          }}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span className="ms-3 text-sm font-medium">
          {hasPartner ? "🥰" : "🙁"}
        </span>
      </label>
      {hasPartner && (
        <>
          <label className="block my-2 text-sm font-medium">
            Cuántas personas vendrían con vos?
          </label>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-neutral-300 hover:bg-gray-200 border border-neutral-500 rounded-s-lg p-3 h-11 focus:ring-neutral-300 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-neutral-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              value={quantity}
              type="number"
              disabled
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-neutral-300 border border-x-0 border-neutral-500 h-11 text-center text-neutral-500 text-sm focus:ring-neutral-300 focus:border-neutral-500 block w-full py-2"
              required
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="bg-neutral-300 hover:bg-gray-200 border border-neutral-500 rounded-e-lg p-3 h-11 focus:ring-neutral-300 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-neutral-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <span className="mt-2">{getMessage()} </span>
        </>
      )}
      <LoadingButton
        loading={spinner}
        label="Siguiente"
        action={next}
        disabled={hasPartner && quantity === 0}
      />
    </div>
  );
};

export default PartnerStep;
