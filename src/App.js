import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Steps from "./Components/Steps/Steps";
import Services from "./Components/ServicesComponent/Services";
import Video from "./Components/VideoComponent/Video";
import Skills from "./Components/Skills/Skills";
// import FAQ from "./Components/Faq/Faq";
import Hdao from "./Components/Hdao/Hdao";
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
