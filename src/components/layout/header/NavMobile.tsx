import { NAV_LINKS } from "./Header.constants";
import { openWhatsAppChat } from "../../../constant/whatsappService";

interface NavMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavMobile = ({ isOpen, onClose }: NavMobileProps) => (
  <div
    className={`fixed inset-0 z-40 bg-black/75  transition-all duration-500 lg:hidden h-screen ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={onClose}
  >
    <nav
      className={`fixed right-0 top-0 h-full bg-white p-10 shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-center gap-8 w-[85%] sm:w-[50%] md:w-[40%]
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex flex-col gap-6">
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{ transitionDelay: `${index * 50}ms` }}
            className={`font-poppins text-xl  text-gray-900 hover:text-blue-600 transition-all transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div
        className={`mt-10 pt-10 border-t border-gray-100 transition-all duration-700 delay-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={openWhatsAppChat}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200"
        >
          Hubungi Kami
        </button>
      </div>
    </nav>
  </div>
);
