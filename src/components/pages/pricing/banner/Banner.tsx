import React from "react";

//style
import style from "./banner.module.scss";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//shared
import backgroundLines from "../../../../shared/icons/home/banner/background.svg";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";

const Banner: React.FC = () => {
  return (
    <div className={style.home}>
      <ImageWrapper
        src={fadeLeft}
        alt="fade left"
        wrapperClassName={style.fadeLeft}
        priority={true}
      />
      <ImageWrapper
        src={backgroundLines}
        alt="background lines"
        wrapperClassName={style.backgroundLines}
        priority={true}
      />
      <ImageWrapper
        src={fadeRightSecond}
        alt="fade right second"
        wrapperClassName={style.fadeRightSecond}
        priority={true}
      />
      <div className="container">
        <div className={style.wrapper}>
          <span>Truly personal Diamonds</span>
          <h1>
            Diamond Cost <br /> & Pricing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
