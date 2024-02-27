import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Diamonds from "@features/diamond/Diamond";
import Banner from "@components/pages/home/banner/Banner";
import About from "@components/pages/home/about/About";
import Changing from "@components/pages/home/changing/Changing";
import WantTo from "@components/pages/home/WantTo/WantTo";
import { useDetectWebGl } from "@entities/hooks/useDetectWebGl";
import { NoticeWebGl } from "@features/noticeWebGl";

const Home: React.FC = () => {
  const { isSupported } = useDetectWebGl();

  return (
    <>
      <Header />
      <div className="main">
        <Banner isSupported={isSupported} />
        <About />
        <Changing />
        <Diamonds isSupported={isSupported} />
        <WantTo />
      </div>
      <Footer />
      {!isSupported && <NoticeWebGl />}
    </>
  );
};

export default Home;
