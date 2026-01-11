// src/pages/CategoryPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { PROPERTY_DATA } from "../../constant/dataProperty";

export const CategoryPage: React.FC = () => {
  return (
    // Menggunakan max-w-7xl agar tidak terlalu lebar di monitor besar
    <div className="max-w-7xl mx-auto p-5 pt-24 min-h-[80vh]">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800">Cari Properti</h1>
        <p className="text-gray-500">
          Pilih kategori hunian impian Anda di Cikarang
        </p>
      </div>

      {/* Responsive Grid: 1 kolom di HP, 2 di Tablet, 4 di Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(PROPERTY_DATA).map(([key, value]) => (
          <Link
            key={key}
            to={`/category/${key}`}
            className="relative group overflow-hidden rounded-3xl h-56 shadow-md hover:shadow-xl transition-all active:scale-95"
          >
            <img
              src={value.image}
              alt={value.label}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            {/* Overlay lebih halus dengan Gradient */}
            <div className="absolute inset-0 bg-linier-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="text-white text-xl font-bold tracking-tight">
                {value.label}
              </span>
              <p className="text-blue-400 text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Lihat Unit Tersedia →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
