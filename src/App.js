import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="footer">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
