import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Section from "./components/Section";
import Footer from "./components/Footer";
import bg1 from "./assets/about-img.png";
import bg2 from "./assets/section2-bg.png";
import Testimonial from "./components/Testimonial";
import Articles from "./components/Articles";
import downArrowSmall from "./assets/down-arrow-small.svg";

const App = () => {
  let dwnArrow = <img src={downArrowSmall} />;
  const sections = [
    {
      direction: "def",
      bg: bg1,
      title: "Leading healthcare providers",
      text: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
      btn: "Learn more",
    },
    {
      direction: "rev",
      bg: bg2,
      title: "Download our mobile apps",
      text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      btn: `Download ${dwnArrow}`,
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {sections.map((section) => {
        return (
          <Section
            direction={section.direction}
            bg={section.bg}
            title={section.title}
            text={section.text}
            btn={section.btn}
          />
        );
      })}
      <Testimonial />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
