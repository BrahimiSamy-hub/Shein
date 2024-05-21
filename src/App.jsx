import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Arrivals from "../src/pages/Arrivals";
import { CategoryProvider } from "./context/categoryContext";
import { ArrivalProvider } from "./context/arrivalContext";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";
import { OrderProvider } from "./context/orderContext";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <OrderProvider>
            <ArrivalProvider>
              <CategoryProvider>
                <ProductProvider>
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/arrivals" element={<Arrivals />} />
                  </Routes>
                </ProductProvider>
              </CategoryProvider>
            </ArrivalProvider>
          </OrderProvider>
        </CartProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
