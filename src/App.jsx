import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Arrivals from "../src/pages/Arrivals";
import { CategoryProvider } from "./context/categoryContext";
import { ArrivalProvider } from "./context/arrivalContext";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <ArrivalProvider>
          <CategoryProvider>
            <ProductProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arrivals" element={<Arrivals />} />
              </Routes>
            </ProductProvider>
          </CategoryProvider>
        </ArrivalProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
