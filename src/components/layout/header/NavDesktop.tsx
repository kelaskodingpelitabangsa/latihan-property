import { NAV_LINKS } from "./Header.constants";
import { openWhatsAppChat } from "../../../constant/whatsappService";
import { useActiveSection } from "../../../hooks/useActiveSection"; // Sesuaikan path ini

export const NavDesktop = () => {
  // 1. Ambil semua ID dari NAV_LINKS (menghapus tanda '#' jika ada)
  const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

  // 2. Gunakan hook untuk mendapatkan ID yang sedang aktif di layar
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAV_LINKS.map((link) => {
        // 3. Cek apakah link ini adalah yang sedang aktif
        const isActive = activeSection === link.href.replace("#", "");

        return (
          <a
            key={link.href}
            href={link.href}
            className={`font-inter text-sm font-semibold transition-all duration-300 relative group ${
              isActive ? "text-blue-600" : "text-gray-950 hover:text-blue-600"
            }`}
          >
            {link.label}
            {/* 4. Garis bawah otomatis penuh jika aktif, atau muncul saat hover */}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        );
      })}

      <button
        onClick={openWhatsAppChat}
        className="font-inter px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
      >
        Hubungi Kami
      </button>
    </nav>
  );
};
