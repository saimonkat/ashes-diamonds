import React from "react";

//style
import style from "./about.module.scss";

//components
import ForPets from "@features/home/about/button-for-pets/ForPets";
import ForLoved from "@features/home/about/button-for-loved/ForLoved";
import ImageWrapper from "@components/common/ImageWrapper";
import shperePink from "../../../../shared/images/home/about/shpere3.png";
import photoPets from "../../../../shared/images/home/about/photo-pets1.png";
import photoLovedones from "../../../../shared/images/home/about/photo-lovedones.png";
import shpereGray from "../../../../shared/images/home/about/shpere3.png";
import fade from "../../../../shared/images/home/about/fade.png";
import fadeSecond from "../../../../shared/images/home/about/fadeSecond.png";

const Banner: React.FC = () => {
  return (
    <div className={style.about}>
      <div className={style.background}></div>
      <ImageWrapper
        src={photoPets}
        wrapperClassName={style.photoPets}
        alt="photo pets"
        priority={true}
      />
      <ImageWrapper
        src={shperePink}
        wrapperClassName={style.shperePink}
        alt="shpere pink"
      />
      <ImageWrapper
        src={photoLovedones}
        wrapperClassName={style.photoLovedones}
        alt="photo lovedones"
        priority={true}
      />
      <ImageWrapper
        src={shpereGray}
        wrapperClassName={style.shpereGray}
        alt="shpere gray"
      />
      <ImageWrapper src={fade} wrapperClassName={style.fade} alt="fade" />
      <ImageWrapper
        src={fadeSecond}
        wrapperClassName={style.fadeSecond}
        alt="fade second"
      />
      <div className="container">
        <div className={style.wrapper}>
          <h2>
            This is about
            <br />a remarkable <b>life</b>
          </h2>
          <p>
            This is for an unforgettable connection in your life. Someone who
            deserves fireworks, a million floating lanterns, and their name
            written in the stars. When these people leave us physically, we need
            a positive way to keep them close to us.
          </p>
          <div className={style.buttons}>
            <ForLoved />
            <ForPets />
          </div>
          <div className={style.sign}>
            Remember
            <br />
            remarkably
          </div>
          <div className={style.signMobile}>
            Retain in
            <br />
            memory
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
