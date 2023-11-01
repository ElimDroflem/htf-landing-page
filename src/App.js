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
      <Navbar />
      <Header />
      <Steps />
      <Services />
      <Video />
      <Skills />
      {/* <FAQ /> */}
      <Hdao />
    </div>
  );
};

export default App;
