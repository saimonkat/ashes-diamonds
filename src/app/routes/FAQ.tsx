import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import TextContent from "@components/pages/faq/text/TextContent";
import Questions from "@features/faq-main/Questions";
import Additional from "@features/faq-main/Additional";

const FAQ: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <TextContent />
        <Questions />
        <Additional />
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
