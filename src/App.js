import "./App.css";
import Navbar from "./components/nav/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
