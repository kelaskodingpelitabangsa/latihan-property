import type { CatalogData } from "../types/typesProperty";

export const PROPERTY_DATA: CatalogData = {
  "rumah-subsidi": {
    label: "Rumah Subsidi",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800",
    regions: {
      "cikarang-utara": [
        {
          id: 1,
          name: "Perumahan KSB",
          price: "185 Juta",
          desc: "Cicilan flat 1jt-an.",
          image:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500",
          whatsapp: "628123",
        },
      ],
      "cikarang-selatan": [],
      "cikarang-timur": [],
      "cikarang-barat": [],
      "cikarang-pusat": [],
    },
  },
  "rumah-lunas": {
    label: "Rumah Lunas",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800",
    regions: { "cikarang-selatan": [] },
  },
  "rumah-take-over": {
    label: "Rumah Take Over",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800",
    regions: { "cikarang-barat": [] },
  },
  tanah: {
    label: "Tanah Kavling",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800",
    regions: { "cikarang-pusat": [] },
  },
};
