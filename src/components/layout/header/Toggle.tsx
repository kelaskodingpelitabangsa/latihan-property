interface ToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Toggle = ({ isOpen, onClick }: ToggleProps) => (
  <button
    onClick={onClick}
    className="relative z-50 p-2 text-gray-900 lg:hidden focus:outline-none group"
    aria-label="Toggle Menu"
  >
    <div className="flex flex-col justify-center items-center w-6 h-5 space-y-1.5">
      <span
        className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2 w-7" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 -translate-x-2" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2 w-7" : ""
        }`}
      />
    </div>
  </button>
);
