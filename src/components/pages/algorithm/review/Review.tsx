import React from "react";

//components
import StarIcon from "./StarIcon";
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./review.module.scss";
//shared
import googleIcon from "../../../../shared/icons/reviews/google.svg";
import SecondSVG from "./ReviewIcon";

const Review = () => {
  const data = [
    {
      title: "Here's your loved one's itinerary.",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "47px",
    },
    {
      title:
        "We want to be a source of brightness for those coping with the death of a loved one.",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "26px",
    },
    {
      title:
        "Once we have extracted and purified the carbon from the remains, it is placed inside a machine that mimics the pressure and heat conditions under the earth’s crust. ",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "16px",
    },
    {
      title:
        "Once we have extracted and purified the carbon from the remains, it is placed inside a machine that mimics the pressure and heat conditions under the earth’s crust. ",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "16px",
    },
    {
      title:
        "Once we have extracted and purified the carbon from the remains, it is placed inside a machine that mimics the pressure and heat conditions under the earth’s crust. ",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "16px",
    },
    {
      title:
        "We want to be a source of brightness for those coping with the death of a loved one.",
      description: "Google Review",
      author: "Helen Hoffman",
      rate: "5,0",
      titleSize: "26px",
    },
  ];

  const renderItem = (
    item: {
      title: string;
      description: string;
      author: string;
      rate: string;
      titleSize: string;
    },
    i: number
  ) => (
    <li key={i}>
      <p className={style.title} style={{ fontSize: item.titleSize }}>
        {item.title}
      </p>
      <div className={style.googleWrapper}>
        <div className={style.google}>
          <ImageWrapper
            src={googleIcon}
            alt="icon"
            wrapperClassName={style.googleIcon}
          />
          <p className={style.description}>{item.description}</p>
        </div>
        <span className={style.author}>{item.author}</span>
      </div>
      <div className={style.stars}>
        <span>{item.rate}</span>
        <StarIcon
          className={style.starIcon}
          fill={i === 3 || i === 9 ? "#00dcff" : i % 2 ? "#fff" : "#000"}
        />
      </div>
      <span className={style.reviewSvg}>
        <SecondSVG />
      </span>
    </li>
  );

  return (
    <div className={style.review}>
      <div className="container">
        <div className={style.wrapper}>
          <ul>{data.map(renderItem)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
