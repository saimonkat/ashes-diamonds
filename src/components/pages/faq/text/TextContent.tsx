import React from "react";

//content
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./textContent.module.scss";
//shared
import phoneIcon from "../../../../shared/icons/header/phone.svg";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";

const TextContent = () => {
  return (
    <div className={style.content}>
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
          <div className={style.head}>
            <h1 className={`subtitle ${style.title}`}>FAQ</h1>
            <div className={style.row}>
              <div className={style.col}>
                <p>
                  We get asked many questions about diamonds from ashes, and
                  most of these questions can be answered with one simple
                  answer, yes. But we wanted to share some of our most
                  frequently asked questions to help you find answers regarding
                  the process of turning ashes into diamonds, the different
                  diamond colors available, the sizes and shapes of memorial
                  diamonds, the certification and authenticity of the diamonds,
                  and the sentimental value they hold for families and loved
                  ones.
                </p>
              </div>
              <div className={style.col}>
                <p>
                  Ashes Diamonnds is a resource for people all over the U.S.,
                  looking for answers to their questions about diamond services
                  and other general information.
                </p>
                <p>
                  But if you didn't find answers to your question, please don't
                  hesitate to call us at{" "}
                  <a className={style.link} href="tel:18008883535">
                    <ImageWrapper
                      src={phoneIcon}
                      alt="phone"
                      wrapperClassName={style.phoneIcon}
                    />
                    1-800-888-35-35
                  </a>{" "}
                  and we will give you answers to all your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
