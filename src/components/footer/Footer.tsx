import React from "react";
import Link from "next/link";

import ImageWrapper from "@components/common/ImageWrapper";

//style
import style from "./footer.module.scss";

//img
import logo from "../../shared/icons/footer/logo.svg";
import phone from "../../shared/icons/footer/phone.svg";
import rhomb from "../../shared/icons/footer/rhomb.svg";
import {
  ABOUT_PAGE,
  ALGORITHM_PAGE,
  BLOG_PAGE,
  FAQ_PAGE,
  LOVEDONES_PAGE,
  PETS_PAGE,
  PRICING_PAGE,
  PRIVACY_PAGE,
  REVIEWS_PAGE,
  STARTED_PAGE,
} from "@entities/consts/paths";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logoWrapper}>
            <ImageWrapper
              src={logo}
              alt="logo"
              wrapperClassName={style.logoInnerWrapper}
            />
            <p>
              All rights reserved 2023
              <br />
              Using the website, you agree with the terms and conditions
            </p>
          </div>
          <div className={style.infoMobile}>
            <Link href={STARTED_PAGE} className={style.started}>
              <a className={style.started}>
                <ImageWrapper src={rhomb} alt="rhomb" />
                Get started
              </a>
            </Link>
            <a
              href="tel:18008883535"
              target="_blank"
              rel="noreferrer"
              className={style.phone}
            >
              <ImageWrapper src={phone} alt="phone" />
              +1 800 888 35 35
            </a>
          </div>
          <div className={style.list}>
            <ul>
              <li>
                <Link href={LOVEDONES_PAGE}>Loved Ones</Link>
              </li>
              <li>
                <Link href={ALGORITHM_PAGE}>How it works</Link>
              </li>
              <li>
                <Link href={PRICING_PAGE}>Pricing</Link>
              </li>
              <li>
                <Link href={BLOG_PAGE}>BLOG</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={PETS_PAGE}>pets</Link>
              </li>
              <li>
                <Link href={FAQ_PAGE}>FAQ</Link>
              </li>
              <li>
                <Link href={PRIVACY_PAGE}>Privacy & Policy</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href={ABOUT_PAGE}>About</Link>
              </li>
              <li>
                <Link href={REVIEWS_PAGE}>Reviews</Link>
              </li>
              <li>
                <Link href={PRIVACY_PAGE}>Terms of use</Link>
              </li>
            </ul>
          </div>
          <div className={style.info}>
            <Link href={STARTED_PAGE}>
              <a className={style.started}>
                <ImageWrapper src={rhomb} alt="rhomb" />
                Get started
              </a>
            </Link>
            <a
              href="tel:18008883535"
              target="_blank"
              rel="noreferrer"
              className={style.phone}
            >
              <ImageWrapper src={phone} alt="phone" />
              +1 800 888 35 35
            </a>
          </div>
        </div>
        <p className={style.rules}>
          All rights reserved 2023
          <br />
          Using the website, you agree with the terms and conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
