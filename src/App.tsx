import React from "react";
import NavBar from "./Nav/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <h1>Welcome to Reuben's site.</h1>
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
          <Route path="/portfolio" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
