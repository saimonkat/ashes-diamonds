import React from "react";
import ReactPlayer from "react-player";

//style
import style from "./banner.module.scss";

//components
import ModalButton from "@features/home/banner/modal-button/ModalButton";
import ImageWrapper from "@components/common/ImageWrapper";

//animation
import Diamond from "../../../../features/animations/HomePageBaner";

//shared
import shperePink from "../../../../shared/images/home/banner/shpere2.webp";
import shpereBlue from "../../../../shared/images/home/banner/shpere1.webp";
import backgroundLines from "../../../../shared/icons/home/banner/background.svg";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRight from "../../../../shared/images/home/banner/fadeRight.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";
import { useWindowWidth } from "@entities/hooks/useResize";

const Banner: React.FC<{ isSupported?: boolean }> = ({
  isSupported = true,
}) => {
  const width = useWindowWidth();
  const isMobile = (width as number) < 481;

  return (
    <div className={style.home}>
      <ImageWrapper
        src={shperePink}
        alt="shpere pink"
        wrapperClassName={style.shperePink}
        priority={true}
      />
      <ImageWrapper
        src={shpereBlue}
        wrapperClassName={style.shpereBlue}
        alt="shpere pink"
        priority={true}
      />
      <ImageWrapper
        src={shpereBlue}
        alt="shpere blue"
        wrapperClassName={style.shpereBlueSecond}
        priority={true}
      />
      <ImageWrapper
        src={backgroundLines}
        alt="background lines"
        wrapperClassName={style.backgroundLines}
        priority={true}
      />
      <ImageWrapper
        src={fadeLeft}
        alt="fade left"
        wrapperClassName={style.fadeLeft}
        priority={true}
      />
      <ImageWrapper
        src={fadeRight}
        alt="fade right"
        wrapperClassName={style.fadeRight}
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
          <span>We make</span>
          <h1>Diamonds from Ashes</h1>
          <p>
            Whether you have ashes at home or recently lost a remarkable person
            - celebrate their life by making a Diamond from ashes or hair.
          </p>
          <ModalButton />
        </div>

        {isMobile || !isSupported ? (
          <div className={style.cavasVideo}>
            <ReactPlayer
              className={style.video}
              url={"/diamondVideo.mp4"}
              loop={true}
              playing={true}
              playsinline={true}
              volume={0}
              muted={true}
            />
          </div>
        ) : (
          <div className={`canvas`}>
            <Diamond />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
