import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/about/banner/Banner";
import Founders from "@components/pages/about/founders/Founders";
import History from "@components/pages/about/history/History";
import Calling from "@components/pages/about/calling/Calling";
import Contacts from "@components/pages/about/contacts/Contacts";
import Review from "@components/pages/about/review/Review";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <Founders />
        <History />
        <Calling />
        <Contacts />
        <Review />
      </div>
      <Footer />
    </>
  );
};

export default About;
