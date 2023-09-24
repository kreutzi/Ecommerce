import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Foot/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/shop/shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/cart/Cart";
import { useEffect, useState } from "react";
import prod from "./Assets/Images/products.png";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: 0.4,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

function App() {
  const [cartItems, setCartItems] = useState([
    {
      img: prod,
      id: 1,
      name: "Wireless PS Handler",
      price: 124.0,
      quantity: 1,
    },
    {
      img: prod,
      id: 2,
      name: "Gradient Light Keyboard",
      price: 124.0,
      quantity: 1,
    },
    {
      img: prod,
      id: 3,
      name: "HD CC Camera",
      price: 124.0,
      quantity: 1,
    },
  ]);
  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <div className="container-fluid">
          <div className="main-navbar w-100">
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  routeVariants={routeVariants}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/about"
              element={
                <About
                  routeVariants={routeVariants}
                  childVariants={childVariants}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  routeVariants={routeVariants}
                  childVariants={childVariants}
                />
              }
            />
          </Routes>
        </div>
        <div className="main-footer">
          <div className="main-footer-content">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
