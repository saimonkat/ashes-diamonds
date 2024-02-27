import React from "react";
//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./founders.module.scss";
//shared
import founders from "../../../../shared/images/about/founders/founders.jpg";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";

const Founders = () => {
  return (
    <div className={style.founders}>
      <ImageWrapper
        src={fadeLeft}
        alt="fade left"
        wrapperClassName={style.fadeLeft}
      />
      <ImageWrapper
        src={fadeRightSecond}
        alt="fade right second"
        wrapperClassName={style.fadeRightSecond}
      />

      <div className="container">
        <div className={style.wrapper}>
          <div className={style.row}>
            <div className={style.column}>
              <h2 className={style.subtitle}>Founders of Ashes Diamonds</h2>
              <div className={style.itemsContainer}>
                <div className={style.item}>
                  <span className={style.name}>Johny</span>
                  <span className={style.surname}>White</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Michael</span>
                  <span className={style.surname}>Green</span>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <ImageWrapper
                wrapperClassName={style.foundersImage}
                src={founders}
                alt="founders"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
