import spinnerimg from "../images/spinner.png";

export const LoadingButton = ({ loading, action, label, disabled = false }) => {
  return loading ? (
    <img
      src={spinnerimg}
      alt="spinner"
      className="animate-spin h-5 w-5 self-center m-3"
    />
  ) : (
    <button
      disabled={disabled}
      className="rounded-full mt-4 px-5 py-3 bg-rose-900 disabled:bg-zinc-500 disabled:text-zinc-300"
      onClick={action}
    >
      {label}
    </button>
  );
};
