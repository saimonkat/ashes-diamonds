import React from "react";

//style
import style from "./blogWrapper.module.scss";

import BlogNav from "../blog-nav/BlogNav";
import WantTo from "../want-to/WantTo";
import Articles from "../article/Articles";
import ImageWrapper from "@components/common/ImageWrapper";

import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";
import fadeSecond from "../../../../shared/images/home/about/fadeSecond.png";
import fadeOrange from "../../../../shared/images/lovedones/like/fade.png";

const BlogWrapper = () => {
  return (
    <div className={style.blogWrapper}>
      {/* <div className={style.background}></div> */}
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
      <ImageWrapper
        src={fadeOrange}
        alt="fade orange"
        wrapperClassName={style.fadeOrange}
      />
      <ImageWrapper
        src={fadeSecond}
        wrapperClassName={style.fadeSecond}
        alt="fade second"
      />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.nav}>
            {/* <BlogNav /> */}
            <div className={style.desctop}>
              <WantTo />
            </div>
          </div>
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default BlogWrapper;
