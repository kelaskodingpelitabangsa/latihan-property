import { SOCIAL_DATA } from "./Footer.constants";

export const FooterSocials = () => (
  <div className="flex-1 space-y-6 min-w-200px">
    <h4 className="font-inter font-bold text-[#1E293B] uppercase tracking-widest text-lg">
      Connect With Us
    </h4>
    <div className="flex gap-4">
      {SOCIAL_DATA.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 shadow-xs hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 border"
          aria-label={social.name}
        >
          {typeof social.icon === "string" ? (
            <span className="text-sm font-bold">{social.icon}</span>
          ) : (
            <social.icon size={20} />
          )}
        </a>
      ))}
    </div>
  </div>
);
