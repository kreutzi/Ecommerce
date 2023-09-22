import "./App.css";
import Navbar from "./components/nav/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
