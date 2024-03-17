import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";
import AboutVideo from "../components/About-video/About_video";
import Crsl from "../components/Crsl/Crsl";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <About />
      <Crsl />
      <AboutVideo />
      <Contact />
    </>
  );
};

export default Homepage;
