import React from "react";
import Link from "next/link";

//style
import style from "./like.module.scss";

//components
import Started from "@features/lovedones/like/started/Started";
import ImageWrapper from "@components/common/ImageWrapper";

//shared
import quote from "../../../../shared/icons/lovedones/quote.svg";
import clip from "../../../../shared/icons/lovedones/clip.svg";
import photo from "../../../../shared/images/lovedones/like/photo.png";
import fadeOrange from "../../../../shared/images/lovedones/like/fade.png";
import fadeBlue from "../../../../shared/images/lovedones/like/fadeSecond.png";
import sphere from "../../../../shared/images/lovedones/like/shpere3.png";
import background from "../../../../shared/icons/lovedones/background.svg";
import lovedones from "../../../../shared/images/lovedones/like/photo-lovedones.png";
import { FAQ_PAGE, PRICING_PAGE } from "@entities/consts/paths";

const Like = () => {
  return (
    <div className={style.like}>
      <ImageWrapper
        src={fadeBlue}
        alt="fade blue"
        wrapperClassName={style.fadeBlue}
      />
      <ImageWrapper
        src={fadeOrange}
        alt="fade orange"
        wrapperClassName={style.fadeOrange}
      />
      <ImageWrapper src={sphere} alt="sphere" wrapperClassName={style.sphere} />
      <ImageWrapper
        src={background}
        alt="background"
        wrapperClassName={style.background}
      />
      <ImageWrapper
        src={lovedones}
        alt="lovedones"
        wrapperClassName={style.lovedones}
        priority={true}
      />
      <div className={style.fade}></div>
      <div className="container">
        <div className={style.container}>
          <div className={style.wrapper}>
            <h2 className="subtitle">One-of-a-kind,</h2>
            <span className={style.subtext}>just like them</span>
            <p className={style.text}>
              We believe our loved ones live on through us. The brightness and
              positivity of a Diamond is a truly remarkable way to carry your
              loved one with you, to continue their story.
            </p>
            <div className={style.buttons}>
              <Started />
              <Link href={PRICING_PAGE}>View pricing</Link>
              <Link href={FAQ_PAGE}>Frequently Asked Questions</Link>
            </div>
            <ul className={style.desc}>
              <li>
                <p>Price started from</p>
                <span>$2900</span>
              </li>
              <li>
                <p>Ashes or hair needed</p>
                <span>1/2 cup</span>
              </li>
            </ul>
          </div>
          <div className={style.wrapper}>
            <ImageWrapper
              src={photo}
              alt="photo"
              wrapperClassName={style.imgWrapper}
            />
            <ImageWrapper src={clip} alt="clip" wrapperClassName={style.clip} />
            <div className={style.comment}>
              <div className={style.inner}>
                <div className={style.top}>
                  <ImageWrapper src={quote} alt="quote" />
                  <p>
                    She made everyone feel like the most important person in the
                    world. Even in her darkest days, she found a bit of humor.
                  </p>
                </div>
                <div className={style.bottom}>
                  <p>Roberta Abele</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Like;
