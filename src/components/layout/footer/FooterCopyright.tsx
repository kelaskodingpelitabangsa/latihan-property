export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-2 font-inter text-sm text-[#1E293B]">
      <div className="flex items-center gap-1 flex-wrap justify-center">
        <span className="opacity-60">&copy; {currentYear}</span>
        <span className="font-semibold tracking-tight text-gray-900">
          asri-property.com
        </span>
        <span className="text-sm"> | Hak Cipta Dilindungi</span>
      </div>
    </div>
  );
};
