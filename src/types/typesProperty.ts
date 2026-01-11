// types.ts
export interface Property {
  id: number;
  name: string;
  price: string;
  desc: string;
  image: string;
  whatsapp: string;
}

export interface RegionData {
  [key: string]: Property[];
}

export interface Category {
  label: string;
  image: string;
  regions: RegionData;
}

export interface CatalogData {
  [key: string]: Category;
}
