import React from "react";

import ImageWrapper from "@components/common/ImageWrapper";

//style
import style from "./changing.module.scss";

//shared
import one from "../../../../shared/icons/home/changing/one.svg";
import second from "../../../../shared/icons/home/changing/second.svg";
import third from "../../../../shared/icons/home/changing/third.svg";
import fade from "../../../../shared/icons/home/changing/fade.svg";
import lines from "../../../../shared/icons/home/changing/lines.svg";

const Changing: React.FC = () => {
  return (
    <div className={style.changing}>
      <div className={style.background}></div>
      <ImageWrapper src={lines} alt="lines" wrapperClassName={style.lines} />
      <ImageWrapper
        src={fade}
        alt="fade"
        wrapperClassName={style.fade}
        objectFit={"cover"}
      />
      <div className="container">
        <div className={style.wrapper}>
          <h2 className={style.subtitle}>
            Changing life the way
            <br />
            we remember…
          </h2>
          <ul className={style.list}>
            <li>
              <ImageWrapper
                wrapperClassName={style.imgWrapper}
                src={one}
                alt="one"
              />
              <div className={style.content}>
                <h3>BRIGHT</h3>
                <p>A Diamond brings up positive emotions and memories</p>
              </div>
            </li>
            <li>
              <ImageWrapper
                wrapperClassName={style.imgWrapper}
                src={second}
                alt="second"
              />
              <div className={style.content}>
                <h3>PERSONAL</h3>
                <p>
                  Wearing their Diamond allows you to take them through life.
                </p>
              </div>
            </li>
            <li>
              <ImageWrapper
                wrapperClassName={style.imgWrapper}
                src={third}
                alt="third"
              />
              <div className={style.content}>
                <h3>FOREVER</h3>
                <p>
                  Their Diamond will be passed down and their story kept alive
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Changing;
