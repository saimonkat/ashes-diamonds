import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import TextContent from "@components/pages/blogDetail/textContent/TextContent";
import Articles from "@components/pages/blogDetail/articles/Articles";
import Questions from "@features/faq/Faq";
import WantTo from "@components/pages/home/WantTo/WantTo";

const BlogDetailPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <TextContent />
        <Articles />
        <Questions />
        <WantTo />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
