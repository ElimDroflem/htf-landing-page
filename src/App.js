import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Steps from "./Components/Steps";
import Services from "./Components/Services";
import Video from "./Components/Video";
import Skills from "./Components/Skills";
import FAQ from "./Components/Faq";
import Hdao from "./Components/Hdao";
import "./style.css";

const App = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="rectangle" />
        <div className="overlap">
          <Navbar />
          <Header />
          <Steps />
          <Services />
          <Video />
          <Skills />
          <FAQ />
          <Hdao />
        </div>
      </div>
    </div>
  );
};

export default App;
