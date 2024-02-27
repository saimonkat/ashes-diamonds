import React from "react";
import Link from "next/link";

import ImageWrapper from "@components/common/ImageWrapper";

import style from "./articleCard.module.scss";

import playIcon from "../../../../shared/images/blog/play.png";
import { toBlogPageId } from "@entities/consts/paths";
import { TArticle } from "../article/types";
import ImagePlaceholder from "../../../../shared/images/blog/ImagePlaceholder.jpg";

const ArticleCard: React.FC<TArticle> = (props) => {
  const { img, title, sub_title, slug, id } = props;
  return (
    <div className={style.articleCard}>
      <div className={style.articleCardInner}>
        {img ? (
          <div className={style.imgWrap}>
            <Link href={toBlogPageId(slug ?? id)}>
              <a>
                <ImageWrapper
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  loading={"eager"}
                />
              </a>
            </Link>
          </div>
        ) : (
          <div className={style.imgWrap}>
            <Link href={toBlogPageId(slug ?? id)}>
              <a>
                <ImageWrapper
                  src={ImagePlaceholder}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  loading={"eager"}
                />
              </a>
            </Link>
          </div>
        )}
        {sub_title && <h3>{sub_title}</h3>}
        {title && <p>{title}</p>}
        <div className={style.linkWrap}>
          <span>
            <Link href={toBlogPageId(slug ?? id)}>Read More</Link>
          </span>
          <ImageWrapper
            wrapperClassName={style.playIcon}
            src={playIcon}
            alt="play"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
