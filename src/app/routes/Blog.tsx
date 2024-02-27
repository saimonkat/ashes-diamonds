import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/blog/banner/Banner";
import BlogWrapper from "@components/pages/blog/blog-wrapper/BlogWrapper";

const BlogPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <BlogWrapper />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
