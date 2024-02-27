import React, { useState } from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./content.module.scss";
//shared
import mail from "../../../../shared/icons/privacy/mail.png";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";

const Banner = () => {
  const link = "info@ashes.diamonds";

  return (
    <div className={style.banner}>
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
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.head}>
            <h1 className={`subtitle ${style.title}`}>Privacy</h1>
            <section>
              <h2 className={`subtitle ${style.subtitle}`}>
                Your privacy is very important to us
              </h2>
              <p>
                We do not sell or rent your personal information to third
                parties for their marketing purposes without your explicit
                consent. Please read this privacy policy to learn more about the
                ways in which we use and protect your personal information. We
                want you to fully understand our privacy practices and therefore
                we have created this section to help you fully evaluate our
                practices and answer privacy questions.
              </p>
              <p>
                {" "}
                If you have additional questions, you may send an email to
                <a
                  href={"mailto:" + link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  <ImageWrapper
                    src={mail}
                    alt="mail"
                    wrapperClassName={style.imgWrapper}
                  />
                  {link}
                </a>
              </p>
              <p>
                If you have questions or concerns regarding this statement, you
                should first contact Customer Service at
                <a
                  href={"mailto:" + link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  <ImageWrapper
                    src={mail}
                    alt="mail"
                    wrapperClassName={style.imgWrapper}
                  />
                  {link}
                </a>
              </p>
            </section>

            <section>
              <h2 className={`subtitle ${style.subtitle}`}>Overview</h2>
              <p>
                The privacy practices of this statement apply to our services
                available under the domain and subdomains of (the "Site") and
                apply generally to our subsidiaries or joint venture websites.
                By visiting this website you agree to be bound by the terms and
                conditions of this Privacy Policy. If you do not agree please do
                not use or access our Site. This Privacy Policy describes the
                information, as part of the normal operation of our services, we
                collect from you and what may happen to that information. We
                have prepared a detailed policy and we believe vou should know
                as much as possible about practices so that you can make
                informed decisions. All of our subsidiaries and joint ventures
                operate under similar privacy practices as described in this
                Privacy Policy and, subject to the requirements of applicable
                law, we strive to provide a consistent set of privacy practices
                throughout the
              </p>
              <p>
                By accepting the Privacy Policy, you expressly consent to our
                use and disclosure of your personal information in accordance
                with this Privacy Policy. This Privacy Policy is incorporated
                into the terms of the User Agreement. This Privacy Policy is
                effective upon acceptance in registration for new registering
                users, and is otherwise effective on 12/12/2012 for all users.
              </p>
            </section>

            <section>
              <h2 className={`subtitle ${style.subtitle}`}>
                A Special Note About
              </h2>
              <p>
                Children (persons under the age of 18) are not eligible to use
                the site unsupervised and we ask that children do not submit any
                personal information to us. If you are under the age of 18, you
                may only use this site in conjunction with and under the
                supervision of your parents or guardians.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
