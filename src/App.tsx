//_______REACT IMPORTS_________//
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//________PAGE IMPORTS_________//
import NavBar from "./Nav/NavBar";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
