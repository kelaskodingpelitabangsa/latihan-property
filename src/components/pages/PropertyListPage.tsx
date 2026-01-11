// src/pages/PropertyListPage.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROPERTY_DATA } from "../../constant/dataProperty";
import { ChevronLeft, MessageCircle, Info } from "lucide-react";
import { FaMapPin } from "react-icons/fa6";
import { openWhatsAppChat } from "../../constant/whatsappService";

export const PropertyListPage: React.FC = () => {
  const { categoryId, regionId } = useParams<{
    categoryId: string;
    regionId: string;
  }>();

  if (!categoryId || !regionId) return null;

  const categoryLabel = PROPERTY_DATA[categoryId]?.label;
  const properties = PROPERTY_DATA[categoryId]?.regions[regionId] || [];

  return (
    <div className="max-w-7xl mx-auto p-5 pt-24 min-h-[80vh]">
      <Link
        to={`/category/${categoryId}`}
        className="inline-flex items-center text-blue-600 font-semibold mb-8 group"
      >
        <ChevronLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span>Pilih Wilayah Lain</span>
      </Link>

      <div className="mb-10">
        <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">
          {categoryLabel}
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 capitalize">
          Area {regionId.replace(/-/g, " ")}
        </h1>
      </div>

      {properties.length > 0 ? (
        // Grid Properti: 1 kolom di HP, 2 kolom di Laptop
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-50 flex flex-col"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur text-blue-700 text-xs font-black px-4 py-2 rounded-full shadow-lg uppercase">
                    Hot Deal
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-4xl font-black text-blue-700 mb-6 tracking-tighter">
                  {item.price}
                </p>

                <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl mb-8 border border-blue-100/50">
                  <Info size={20} className="text-blue-400 shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={openWhatsAppChat}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1da851] text-white py-5 rounded-2xl font-black transition-all hover:shadow-xl hover:shadow-green-200 active:scale-95"
                  >
                    <MessageCircle size={24} fill="currentColor" />
                    TANYA LEWAT WHATSAPP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
          <FaMapPin className="text-gray-300 text-6xl mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
            Belum Ada Unit
          </h3>
          <p className="text-gray-400 mt-2">
            Coba cek wilayah Cikarang lainnya.
          </p>
        </div>
      )}
    </div>
  );
};
