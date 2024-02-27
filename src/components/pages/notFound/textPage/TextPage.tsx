import React, { useEffect, useState } from "react";

//style
import style from "./textPage.module.scss";
import Footer from "@components/footer/Footer";
import { TArticle } from "@components/pages/blog/article/types";
import ImageWrapper from "@components/common/ImageWrapper";
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import fadeRightSecond from "../../../../shared/images/home/banner/fadeRightSecond.png";
import HeadMeta from "@components/headMeta/HeadMeta";

const TextPage: React.FC<{ articleData: TArticle }> = ({ articleData }) => {
  const [htmlString, setHtmlString] = useState(articleData.content);

  useEffect(() => {
    const updatedHTML = htmlString.replace(
      /<a\s+href="mailto:([^"]+)">([^<]+)<\/a>/g,
      `<a href="mailto:$1">
      <svg  width="20px" height="20px" viewBox="0 0 122.88 88.86">
        <title>email</title>
        <path style="" d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/>
      </svg>
      $2</a>`
    );
    const updatedHTMLWithPhone = updatedHTML.replace(
      /<a\s+href="tel:([^"]+)">([^<]+)<\/a>/g,
      `<a href="tel:$1">
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
            <title>icon/phone</title>
            <g id="icon/phone" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <g id="Group">
                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                    <path d="M7.08168686,4 C7.33254744,5.40352246 7.66940391,6.61278679 8.14240086,7.75124906 L5.9391419,9.7668083 C6.45693982,12.2135893 7.32998982,14.0112624 8.65935525,15.3406376 C10.0036571,16.6849492 11.8268476,17.5626412 14.315892,18.0782314 L15.8459239,15.9360476 C17.3800526,16.3229743 18.5935286,16.6673867 19.8595761,16.8482632 L19.643,16.814 L19.9910113,19.9310774 C19.6713416,19.974257 19.3940942,19.9924597 19.1638236,19.9980136 L19,20 C17.969455,20 16.9631632,19.8962032 15.9910445,19.6983298 C12.5384692,18.9955629 9.51750033,17.1062316 7.37119298,14.4755716 C5.26364994,11.8924238 4,8.5937614 4,5 C4,4.74188865 4.01499785,4.40855066 4.04386008,4.00002409 Z" id="Path" stroke="#FFFFFF" stroke-width="2"></path>
                </g>
            </g>
        </svg>
      $2</a>`
    );

    setHtmlString(updatedHTMLWithPhone);
  }, []);

  return (
    <>
      <HeadMeta title={articleData.title} />
      <>
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
          <div className={`container ${style.container}`}>
            <div className={style.wrapper}>
              <div className={style.head}>
                <h1 className={`${style.title}`}>{articleData.title}</h1>
                <section>
                  {/*{articleData.sub_title && (*/}
                  {/*  <h2 className={`${style.subtitle}`}>*/}
                  {/*    {articleData.sub_title}*/}
                  {/*  </h2>*/}
                  {/*)}*/}
                  <div
                    className={style.textContent}
                    dangerouslySetInnerHTML={{ __html: htmlString }}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
};

export default TextPage;
