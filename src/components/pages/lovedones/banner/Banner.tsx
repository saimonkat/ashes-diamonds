import React from "react";

//style
import style from "./banner.module.scss";

//components
import ModalButton from "@features/home/banner/modal-button/ModalButton";
import ImageWrapper from "@components/common/ImageWrapper";
import Ring from "@features/animations/Ring";

//shared
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";
import backgroundLines from "../../../../shared/icons/lovedones/background.svg";
import fadeRight from "../../../../shared/images/home/banner/fadeRight.png";
import ReactPlayer from "react-player";
import { useWindowWidth } from "@entities/hooks/useResize";

const Banner: React.FC<{ isSupported?: boolean }> = ({
  isSupported = true,
}) => {
  const width = useWindowWidth();
  const isMobile = (width as number) < 481;

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
          <span>Diamonds from Ashes</span>
          <h1>Loved Ones</h1>
          <p>
            We believe our loved ones live on through us. The brightness and
            positivity of a Diamond is a truly remarkable way to carry your
            loved one with you, to continue their story.
          </p>
          <ModalButton />
        </div>

        {isMobile || !isSupported ? (
          <div className={style.cavasVideo}>
            <ReactPlayer
              className={style.video}
              url={"/ringVideo.mp4"}
              loop={true}
              playing={true}
              playsinline={true}
              volume={0}
              muted={true}
            />
          </div>
        ) : (
          <div className={`ringCanvas`}>
            <Ring />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
