import { CONTACT_DATA } from "./Footer.constants";

export const FooterContact = () => (
  <div className="flex-1 space-y-6 min-w-250px">
    <h4 className="font-inter font-bold text-[#1E293B] uppercase tracking-widest text-lg">
      Contact Details
    </h4>
    <div className="flex flex-col gap-4">
      {CONTACT_DATA.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          className="flex items-center gap-4 font-inter text-lg text-[#475569] hover:text-blue-600 transition-all group w-fit"
        >
          <div
            className={`p-2.5 bg-white rounded-xl transition-all duration-300 border group-hover:shadow-sm ${item.colorClass}`}
          >
            {typeof item.icon !== "string" && (
              <item.icon
                size={24}
                className={`${item.iconColor} transition-transform group-hover:scale-110`}
              />
            )}
          </div>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  </div>
);
