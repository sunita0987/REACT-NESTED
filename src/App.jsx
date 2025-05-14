import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
