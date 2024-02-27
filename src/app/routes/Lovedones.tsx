import React from "react";
import { observer } from "mobx-react";

//components
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Banner from "@components/pages/lovedones/banner/Banner";
import Like from "@components/pages/lovedones/like/Like";
import Diamonds from "@features/diamond/Diamond";
import Faq from "@features/faq/Faq";
import WantTo from "@components/pages/lovedones/want-to/WantTo";
import Journey from "@components/pages/lovedones/journey/Journey";
import { useDetectWebGl } from "@entities/hooks/useDetectWebGl";
import { NoticeWebGl } from "@features/noticeWebGl";

const customData: { title: string; content: string }[] = [

];

const Lovedones = () => {
  const { isSupported } = useDetectWebGl();

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="main" style={{ overflowX: "hidden" }}>
        <Banner isSupported={isSupported} />
        <Like />
        <Journey />
        <div style={{ padding: "120px 0 0 0" }}>
          <Diamonds isSupported={isSupported} />
        </div>
        <Faq data={customData} />
        <WantTo />
      </div>
      <Footer />
      {!isSupported && <NoticeWebGl />}
    </div>
  );
};

export default observer(Lovedones);
