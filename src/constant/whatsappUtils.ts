export const getWhatsAppUrl = () => {
  const nomor: string = "628128922722";
  const pesan: string = "Halo Asih Property, saya ingin bertanya tentang:";

  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
};
