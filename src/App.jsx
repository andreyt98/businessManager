import "./sass/main.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import ProductSection from "./components/ProductSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DesktopNavbar/>
        <MobileNavbar />
        <Routes>
          <Route path="/"element={<Home />}></Route>
          <Route path="/products" element={<ProductSection />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
