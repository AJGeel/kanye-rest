import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Refresh({ onClick }) {
  return (
    <div className="absolute bottom-10">
      <button
        className="flex items-center space-x-2 py-3 px-4 rounded-md bg-white/0 hover:bg-white/5 text-white/50 hover:text-white border-2 border-white/0 hover:border-white/10 hover:duration-150 duration-300 active:scale-90 active:opacity-60"
        onClick={onClick}
      >
        <ArrowPathIcon className="w-5 h-5" />
        <span>More wisdom, please!</span>
      </button>
    </div>
  );
}
