import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export const CONTACT_DATA = [
  {
    id: "tel",
    label: "+628128922722",
    href: "https://wa.me/628128922722",
    icon: FaPhone,
    colorClass: "group-hover:bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "wa",
    label: "WhatsApp Business",
    href: "https://wa.me/628128922722",
    icon: FaWhatsapp,
    colorClass: "group-hover:bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "email",
    label: "admin@asihproperty.com",
    href: "mailto:admin@asihproperty.com",
    icon: LuMail,
    colorClass: "group-hover:bg-red-50",
    iconColor: "text-red-500",
  },
];

export const SOCIAL_DATA = [
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "X", href: "#", icon: FaXTwitter },
  { name: "TikTok", href: "#", icon: FaTiktok },
];
