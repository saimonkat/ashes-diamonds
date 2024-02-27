import React from "react";

//style
import style from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.head}>
            <h1 className={`subtitle ${style.title}`}>Our story</h1>
            <p>
              We are a company specializing in growing diamonds from the ashes
              of both humans and animals. Our mission is to preserve the memory
              of loved ones by creating everlasting symbols of their presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
