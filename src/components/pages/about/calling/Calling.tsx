import React from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./calling.module.scss";
//shared
import fade from "../../../../shared/icons/home/changing/fade.svg";
import diamond from "../../../../shared/icons/about/diamond.png";
import team from "../../../../shared/images/about/advantages/team.png";
import photos from "../../../../shared/images/about/advantages/photos.png";
import Link from "next/link";
import { PRICING_PAGE } from "@entities/consts/paths";

const Calling = () => {
  return (
    <div className={style.calling}>
      <ImageWrapper
        src={fade}
        alt="fade"
        wrapperClassName={style.fade}
        objectFit={"cover"}
      />
      <img src={"/icons/lines.svg"} alt="lines" className={style.lines} />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <ImageWrapper
              src={diamond}
              alt="diamond"
              wrapperClassName={style.diamondImage}
            />
            <h3 className={style.title}>Our Calling</h3>
            <p className={style.description}>
              In 2023, we decided to embark on the journey of growing diamonds
              from ashes because we believe that memories should live <br />
              on forever. We strive to provide everyone with the opportunity to
              preserve the memories of their loved ones and pets, <br />
              transforming their ashes into beautiful, eternal diamonds.
            </p>
          </div>

          <div className={style.advantages}>
            <h3 className={style.advantages_title}>
              Advantages of <br /> Our Company
            </h3>

            <div className={style.advantages_content}>
              <div className={style.advantages_row}>
                <div className={style.advantages_col}>
                  <ImageWrapper
                    src={team}
                    wrapperClassName={`${style.advantages_img} ${style.advantages_img_first}`}
                    alt="team"
                  />
                </div>
                <div className={style.advantages_col}>
                  <p className={style.advantages_description}>
                    We take pride in making the process of creating memorial
                    diamonds more accessible to a wider audience. Our company
                    offers competitive prices and guarantees the highest quality
                    for each created diamond. We understand the value and
                    importance of memorial symbols, which is why we make the
                    process of growing diamonds from ashes understandable,
                    convenient, and emotionally significant for our customers.
                  </p>
                </div>
              </div>

              <div className={style.advantages_row}>
                <div className={style.advantages_col}>
                  <p className={style.advantages_description}>
                    We believe that every person and every animal leaves their
                    mark on this world, and our company takes pride in helping
                    preserve that mark in the form of an everlasting diamond. We
                    are delighted to welcome you to our company and make your
                    memorial experience truly special and unforgettable. Thank
                    you for choosing us to make your memories eternal.
                  </p>
                  <p className={style.advantages_description}>
                    If you have any questions or need further information,
                    please feel free to contact us. We are always ready to
                    assist you and make this process as comfortable as possible.
                    Thank you for choosing us to make your memories eternal.
                  </p>

                  <div className={style.advantages__btns}>
                    <Link href="#">
                      <button className={style.btn_begin}>
                        Begin the Journey
                      </button>
                    </Link>

                    <Link href={PRICING_PAGE}>
                      <button className={style.btn_view}>View prices</button>
                    </Link>
                  </div>
                </div>
                <div className={style.advantages_col}>
                  <ImageWrapper
                    src={photos}
                    wrapperClassName={style.advantages_img}
                    alt="photos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calling;
