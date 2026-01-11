import { Header } from "../src/components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import { Halaman } from "./components/Halaman";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Halaman />
      <Footer />
    </Router>
  );
}

export default App;
