import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import RescueCenter from "./pages/RescueCenters";
import VetClinic from "./pages/VetClinics";
import FoundDog from "./pages/FoundDog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/rescue" element={<RescueCenter />} />
          <Route path="/vet" element={<VetClinic />} />
          <Route path="/found" element={<FoundDog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
