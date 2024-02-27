import React from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./content.module.scss";
//shared
import first from "../../../../shared/images/how-it-works/1.jpg";
import second from "../../../../shared/images/how-it-works/2.jpg";
import third from "../../../../shared/images/how-it-works/3.jpg";
import fourth from "../../../../shared/images/how-it-works/4.jpg";
import fifth from "../../../../shared/images/how-it-works/5.jpg";
import fade from "../../../../shared/images/how-it-works/fade.png";
import firstIcon from "../../../../shared/icons/how-it-works/1.svg";
import secondIcon from "../../../../shared/icons/how-it-works/2.svg";
import thirdIcon from "../../../../shared/icons/how-it-works/3.svg";
import fourthIcon from "../../../../shared/icons/how-it-works/4.svg";
import fifthIcon from "../../../../shared/icons/how-it-works/5.svg";
import Link from "next/link";

const Content = () => {
  return (
    <div className={style.content}>
      <ImageWrapper src={fade} alt="fade" wrapperClassName={style.fade} />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.row}>
            <div className={style.col}>
              <ImageWrapper
                imageClassName={style.image}
                wrapperClassName={style.image}
                src={first}
                alt="img"
              />
            </div>
            <div className={style.col}>
              <div className={style.square}>
                <ImageWrapper
                  imageClassName={style.icon}
                  src={firstIcon}
                  alt="icon"
                />
              </div>
              <h3 className={style.name}>
                Start your journey with the Welcome Kit.
              </h3>
              <p className={style.description}>
                The first step can be the hardest one. This is the start of your
                journey, and it’s okay to be nervous, excited, or overwhelmed.
                At Eterneva, we understand the hesitation to part with your
                loved one’s ashes. We’d love to walk with you and get to know
                your loved one.
              </p>
              <p className={style.description}>
                The welcome kit is designed to help you understand the Eterneva
                Diamond journey. We only need half a cup of hair or ashes to
                make our Diamonds.
              </p>
              <Link href="#">
                <button className={style.button}>WHAT'S INSIDE THE KIT</button>
              </Link>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.col}>
              <ImageWrapper
                imageClassName={style.image}
                wrapperClassName={style.image}
                src={second}
                alt="img"
              />
            </div>
            <div className={style.col}>
              <div className={style.square}>
                <ImageWrapper
                  imageClassName={style.icon}
                  src={secondIcon}
                  alt="icon"
                />
              </div>
              <h3 className={style.name}>
                Extracting the Diamond’s key element.
              </h3>
              <p className={style.description}>
                Before we can grow your loved one’s Diamond, we first need to
                isolate the carbon. Once the ashes or hair arrive at our lab, a
                lab tech transfers them from the jar they came in to a graphite
                crucible. The crucible will go through a carbon purification
                process to extract the carbon from the other elements in the
                ashes.
              </p>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.col}>
              <ImageWrapper
                imageClassName={style.image}
                wrapperClassName={style.image}
                src={third}
                alt="img"
              />
            </div>
            <div className={style.col}>
              <div className={style.square}>
                <ImageWrapper
                  imageClassName={style.icon}
                  src={thirdIcon}
                  alt="icon"
                />
              </div>
              <h3 className={style.name}>Growing your loved one’s Diamond.</h3>
              <p className={style.description}>
                Once we have extracted and purified the carbon from the remains,
                it is placed inside a machine that mimics the pressure and heat
                conditions under the earth’s crust. Something we love about this
                process is that each individual’s carbon content is different,
                so everyone requires a different combination of pressure and
                heat to become a Diamond. That means every Diamond we produce is
                as unique as the individual it’s made from.
              </p>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.col}>
              <ImageWrapper
                imageClassName={style.image}
                wrapperClassName={style.image}
                src={fourth}
                alt="img"
              />
            </div>
            <div className={style.col}>
              <div className={style.square}>
                <ImageWrapper
                  imageClassName={style.icon}
                  src={fourthIcon}
                  alt="icon"
                />
              </div>
              <h3 className={style.name}>Inspecting the Diamond’s quality.</h3>
              <p className={style.description}>
                It’s time to inspect the Diamond and check for inclusions.
                “Inclusion” is a Diamond-world term that refers to the flaws or
                bumps that naturally occur in Diamonds. Our inspectors identify
                where they are so that we can cut around them to produce an
                exceptional Diamond.
              </p>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.col}>
              <ImageWrapper
                imageClassName={style.image}
                wrapperClassName={style.image}
                src={fifth}
                alt="img"
              />
            </div>
            <div className={style.col}>
              <div className={style.square}>
                <ImageWrapper
                  imageClassName={style.icon}
                  src={fifthIcon}
                  alt="icon"
                />
              </div>
              <h3 className={style.name}>Precise Diamond Cutting.</h3>
              <p className={style.description}>
                Once we have extracted and purified the carbon from the remains,
                it is placed inside a machine that mimics the pressure and heat
                conditions under the earth’s crust. Something we love about this
                process is that each individual’s carbon content is different,
                so everyone requires a different combination of pressure and
                heat to become a Diamond. That means every Diamond we produce is
                as unique as the individual it’s made from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
