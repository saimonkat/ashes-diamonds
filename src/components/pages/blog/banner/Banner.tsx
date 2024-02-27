import React from "react";

//style
import style from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.head}>
            <h1 className={`subtitle ${style.title}`}>Blog</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
