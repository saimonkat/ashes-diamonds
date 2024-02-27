import React, { useState } from "react";

//style
import style from "./style.module.scss";

const LINK =
  "https://support.biodigital.com/hc/en-us/articles/218322977-How-to-turn-on-WebGL-in-my-browser";

export const NoticeWebGl = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${style.wrapper} ${isOpen && style.wrapperActive}`}>
      {!isOpen && (
        <button className={style.infoBtn} onClick={handleClick}>
          ?
        </button>
      )}
      <div className={`${isOpen ? style.content : style.contentHiden}`}>
        <button className={style.closeBtn} onClick={handleClick}>
          ✕
        </button>
        <p className={style.description}>Your browser not support WebGL</p>
        <a href={LINK} target="_blank" className={style.link}>
          how to enable
        </a>
      </div>
    </div>
  );
};
