import React, { FC } from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./history.module.scss";
//shared
import history from "../../../../shared/images/about/founders/history.png";
import diamods from "../../../../shared/images/about/founders/diamonds.jpg";
import fadeOrange from "../../../../shared/images/pets/like/fade.png";

const History: FC = () => {
  return (
    <div className={style.history}>
      <ImageWrapper
        src={fadeOrange}
        alt="fade orange"
        wrapperClassName={style.fadeOrange}
      />
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.row}>
            <div className={`${style.column} ${style.firstColumn}`}>
              <ImageWrapper
                src={history}
                alt="history"
                wrapperClassName={`${style.image} ${style.historyImage}`}
              />
            </div>
            <div className={style.column}>
              <h3 className={style.label}>History</h3>
              <p className={style.description}>
                The idea of growing diamonds from ashes has been in development
                for a long time, with the first steps taken by General Electric
                in 1954. It was during this time that the initial experiments
                were conducted, opening up new possibilities for utilizing
                unique materials
              </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={`${style.column} ${style.firstColumn}`}>
              <h3 className={style.label}>Commercial Development</h3>
              <p className={style.description}>
                Over time, the process of growing diamonds from ashes became
                more accessible and appealing to people, leading to its
                commercial development. Today, we stand as one of the leading
                companies in this field, offering high-quality diamonds created
                from cherished remains.
              </p>
            </div>
            <div className={style.column}>
              <ImageWrapper
                src={diamods}
                alt="diamods"
                wrapperClassName={`${style.image} ${style.diamondsImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
