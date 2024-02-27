import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/started/banner/Banner";
import Questions from "@features/faq/Faq";
import Journey from "@components/pages/lovedones/journey/Journey";

const Started: React.FC = () => {
  return (
    <div className="page-started">
      <Header/>
      <div className="main">
        <Banner />
        <Questions />
        <Journey />
      </div>
      <Footer />
    </div>
  );
};

export default Started;
