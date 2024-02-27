import React from "react";

//style
import style from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className="container">
        <div className={style.wrapper}>
          <h2 className={style.subtitle}>Customer Experiences</h2>
          <h1 className={`subtitle ${style.title}`}>Reviews</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
