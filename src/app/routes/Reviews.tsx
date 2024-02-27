import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/reviews/banner/Banner";
import Review from "@components/pages/reviews/review/Review";
import Questions from "@components/pages/reviews/questions/Questions";

const Reviews: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <Review />
        <Questions />
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
