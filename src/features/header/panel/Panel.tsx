import React from "react";
import Link from "next/link";

//style
import style from "./panel.module.scss";

//components
import Started from "@features/panel/button-started/Started";
import ImageWrapper from "@components/common/ImageWrapper";

//shared
import phone from "../../../shared/icons/panel/phone.svg";
import logo from "../../../shared/icons/panel/logo.svg";
import {
  ABOUT_PAGE,
  ALGORITHM_PAGE,
  BLOG_PAGE,
  FAQ_PAGE,
  LOVEDONES_PAGE,
  PETS_PAGE,
  PRICING_PAGE,
  REVIEWS_PAGE,
} from "@entities/consts/paths";

interface Panel {
  isOpen: boolean;
  onClick: () => void;
}

const Panel: React.FC<Panel> = ({ isOpen, onClick }) => {
  return (
    <div className={isOpen ? style.wrapperOpen : style.wrapper}>
      <div
        className={isOpen ? style.background : style.backgroundNotActive}
        onClick={onClick}
      ></div>
      <div className={isOpen ? style.panelOpen : style.panel}>
        <div className={style.container}>
          <div className={style.head}>
            <div className={style.colseInner}>
              <div className={style.close} onClick={onClick}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={style.logo}>
              <ImageWrapper src={logo} alt="logo" />
            </div>
            <div className={style.mobilePhone}>
              <a href="tel:+18008883535" target="_blank" rel="noreferrer">
                <ImageWrapper src={phone} alt="phone" />
              </a>
            </div>
          </div>
          <div className={style.closeWrapper}>
            <div className={style.colseInner}>
              <div className={style.close} onClick={onClick}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={style.contentWrapper}>
            <Started />
            <div className={style.content}>
              <div className={style.linkWrapper}>
                <Link href={LOVEDONES_PAGE}>Loved Ones</Link>
                <Link href={PETS_PAGE}>pets</Link>
              </div>
              <ul className={style.list}>
                <li>
                  <Link href={ABOUT_PAGE}>About</Link>
                </li>
                <li>
                  <Link href={PRICING_PAGE}>Pricing</Link>
                </li>
                <li>
                  <Link href={ALGORITHM_PAGE}>How it works</Link>
                </li>
                <li>
                  <Link href={FAQ_PAGE}>FAQ</Link>
                </li>
                <li>
                  <Link href={REVIEWS_PAGE}>Reviews</Link>
                </li>
                <li>
                  <Link href={BLOG_PAGE}>BLOG</Link>
                </li>
              </ul>
              <a
                href="tel:+18008883535"
                target="_blank"
                rel="noreferrer"
                className={style.phone}
              >
                <ImageWrapper src={phone} alt="phone" />
                +1 800 888 35 35
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
