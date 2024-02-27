import React from "react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/pets/banner/Banner";
import Like from "@components/pages/pets/like/Like";
import WantTo from "@components/pages/pets/want-to/WantTo";
import Diamonds from "@features/diamond/Diamond";
import Faq from "@features/faq/Faq";
import { useDetectWebGl } from "@entities/hooks/useDetectWebGl";
import { NoticeWebGl } from "@features/noticeWebGl";
import Journey from "@components/pages/lovedones/journey/Journey";

const customData: { title: string; content: string }[] = [

];


const Pets = () => {
  const { isSupported } = useDetectWebGl();

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="main" style={{ overflow: "hidden" }}>
        <Banner isSupported={isSupported} />
        <Like />
        <Journey />
        <div style={{ padding: "120px 0 0 0" }}>
          <Diamonds isSupported={isSupported} />
        </div>
        <Faq data={customData}/>
        <WantTo />
      </div>
      <Footer />
      {!isSupported && <NoticeWebGl />}
    </div>
  );
};

export default Pets;
