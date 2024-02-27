import React from "react";

//style
import style from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.head}>
            <h1 className={`subtitle ${style.title}`}>The Diamond Journey</h1>
            <p>
              Throughout your Diamond journey, a dedicated customer experience
              specialist will guide you through every stage of the process,
              providing video and text updates for every step of your loved
              one’s journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
