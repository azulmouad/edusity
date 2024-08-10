import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="Our program" subTitle="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title="Gallery" subTitle="Campus Photos" />
        <Campus />
        <Title title="Testimonials" subTitle="What Student Says" />
        <Testimonials />
        <Title title="Contact Us" subTitle="Get in Touch" />

        <Contact />
        <Footer />
      </div>
      <VideoPlayer setPlayState={setPlayState} playState={playState} />
    </div>
  );
};

export default App;
