// src/pages/RegionPage.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROPERTY_DATA } from "../../constant/dataProperty";
import { MapPin, ChevronLeft, ArrowRight } from "lucide-react";

export const RegionPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const regions = [
    "Cikarang Utara",
    "Cikarang Selatan",
    "Cikarang Timur",
    "Cikarang Barat",
    "Cikarang Pusat",
  ];

  if (!categoryId || !PROPERTY_DATA[categoryId]) {
    return (
      <div className="p-20 text-center font-bold text-red-500">
        Kategori tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5 pt-24 min-h-[80vh]">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 font-semibold mb-8 group"
      >
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span>Kembali ke Kategori</span>
      </Link>

      <div className="mb-10 text-center md:text-left">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
          Wilayah Tersedia
        </h2>
        <h1 className="text-4xl font-black text-gray-900 uppercase italic tracking-tighter">
          {PROPERTY_DATA[categoryId].label}
        </h1>
      </div>

      {/* Grid Wilayah: 1 kolom di HP, 2 kolom di Tablet/Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regions.map((region) => (
          <Link
            key={region}
            to={`/category/${categoryId}/${region
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <span className="font-bold text-lg text-gray-700">{region}</span>
            </div>
            <ArrowRight
              size={20}
              className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
