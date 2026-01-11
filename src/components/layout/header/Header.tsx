import { useHeader } from "./useHeader";
import { Toggle } from "./Toggle";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export const Header = () => {
  const { isMenuOpen, isScrolled, toggleMenu, closeMenu } = useHeader();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out py-4 ${
        isScrolled ? "bg-white/70 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }
      `}
    >
      <div className="px-6 lg:max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="group transition-transform duration-300">
          <span className="font-montserrat text-3xl font-black tracking-tighter">
            <span className="bg-linear-to-r text-blue-600 group-hover:text-blue-700 bg-clip-text">
              Asih
            </span>
            <span className="text-gray-800 group-hover:text-gray-950">
              Property.
            </span>
          </span>
        </a>

        <NavDesktop />
        <Toggle isOpen={isMenuOpen} onClick={toggleMenu} />
        <NavMobile isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
};
