import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Foot/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="main-navbar w-100">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
