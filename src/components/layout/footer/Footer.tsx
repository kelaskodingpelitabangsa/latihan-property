import { FooterInfo } from "./FooterInfo";
import { FooterContact } from "./FooterContact";
import { FooterSocials } from "./FooterSocials";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-[#F1F5F9] pt-24 pb-8" id="contact">
      <div className="px-6 lg:max-w-7xl mx-auto flex flex-col items-center">
        {/* SECTION ATAS: Menggunakan grid untuk kontrol responsif yang lebih baik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-start gap-12 lg:gap-8 pb-12 border-b border-gray-200 w-full">
          <FooterInfo />
          <FooterContact />
          <FooterSocials />
        </div>

        {/* SECTION BAWAH: Copyright */}
        <div className="grid grid-cols-1 lg:flex w-full justify-center pt-8">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};
