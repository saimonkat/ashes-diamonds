import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Diamonds from "@features/diamond/Diamond";
import Faq from "@features/faq/Faq";
import Banner from "@components/pages/pricing/banner/Banner";
import DiamondPrices from "@components/pages/pricing/diamondPrices/DiamondPrices";
import { useDetectWebGl } from "@entities/hooks/useDetectWebGl";

const customData: { title: string; content: string }[] = [

];


const Pricing: React.FC = () => {
  const { isSupported } = useDetectWebGl();

  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <DiamondPrices />
        <Faq data={customData}/>
        <Diamonds isFade={false} isSupported={isSupported} />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
