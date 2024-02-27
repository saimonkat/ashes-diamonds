import React from "react";
import Link from "next/link";

//components
import ImageWrapper from "@components/common/ImageWrapper";
import { HOME_PAGE } from "../../../../entities/consts/paths";

//style
import style from "./content.module.scss";
//shared
import lines from "../../../../shared/icons/home/changing/lines.svg";
import diamond from "../../../../shared/icons/home/banner/diamond.svg";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import shperePink from "../../../../shared/images/home/banner/shpere2.webp";
import shpereBlue from "../../../../shared/images/home/banner/shpere1.webp";
import HeadMeta from "@components/headMeta/HeadMeta";

const Content: React.FC<{ headerHeight?: number }> = ({ headerHeight }) => {
  return (
    <>
      <HeadMeta title="Not Found" />
      <>
        <div
          className={style.content}
          style={{ minHeight: `calc(100vh - ${headerHeight ?? 0}px)` }}
        >
          <ImageWrapper
            src={shperePink}
            alt="shpere pink"
            wrapperClassName={style.shperePink}
          />
          <ImageWrapper
            src={shpereBlue}
            alt="shpere blue"
            wrapperClassName={style.shpereBlue}
          />

          <div className={`container ${style.container}`}>
            <h1 className={`subtitle ${style.title}`}>404</h1>
            <p className={style.description}>Page Not Found</p>
            <Link href={HOME_PAGE}>
              <a className={style.button}>
                <ImageWrapper src={diamond} alt="diamond" /> Go to homepage
              </a>
            </Link>
          </div>

          <ImageWrapper
            src={lines}
            alt="lines"
            wrapperClassName={style.lines}
          />
          <ImageWrapper
            src={fadeLeft}
            alt="fadeLeft"
            wrapperClassName={style.fadeLeft}
          />
        </div>
      </>
    </>
  );
};

export default Content;
