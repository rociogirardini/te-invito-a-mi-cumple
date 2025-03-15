import spinnerimg from "../images/spinner.png";

export const LoadingButton = ({ loading, action, label, disabled = false }) => {
  return loading ? (
    <div className="flex justify-center items-center h-full">
      <img
        src={spinnerimg}
        alt="spinner"
        className="animate-spin h-5 w-5 m-3"
      />
    </div>
  ) : (
    <button
      disabled={disabled}
      className="rounded-full mt-4 px-5 py-3 bg-red-700 text-white disabled:bg-zinc-500 disabled:text-zinc-300"
      onClick={action}
    >
      {label}
    </button>
  );
};
