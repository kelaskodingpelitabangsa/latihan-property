import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { CategoryPage } from "./pages/CategoryPage";
import { RegionPage } from "./pages/RegionPage";
import { PropertyListPage } from "./pages/PropertyListPage";

export const Halaman = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<RegionPage />} />
        <Route
          path="/category/:categoryId/:regionId"
          element={<PropertyListPage />}
        />
      </Routes>
    </Layout>
  );
};
