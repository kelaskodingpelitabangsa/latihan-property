import { getWhatsAppUrl } from "./whatsappUtils";

export const openWhatsAppChat = (): void => {
  const url = getWhatsAppUrl();
  window.open(url, "_blank", "noopener,noreferrer");
};
