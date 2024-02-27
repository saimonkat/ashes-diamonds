import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/algorithm/banner/Banner";
import Steps from "@components/pages/algorithm/steps/Steps";
import Content from "@components/pages/algorithm/content/Content";
import Review from "@components/pages/algorithm/review/Review";
import Faq from "@features/faq/Faq";
import Diamonds from "@features/diamond/Diamond";

const customData: { title: string; content: string }[] = [

];

const Algorithm: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <Steps />
        <Content />
        <Review />
        <Diamonds />
        <Faq data={customData}/>
      </div>
      <Footer />
    </>
  );
};

export default Algorithm;
