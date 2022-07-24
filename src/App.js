import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default App;
