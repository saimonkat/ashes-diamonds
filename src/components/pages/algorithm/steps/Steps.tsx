import React from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./steps.module.scss";
//shared
import fadeLeft from "../../../../shared/images/home/banner/fadeLeft.png";
import first from "../../../../shared/icons/how-it-works/1.svg";
import second from "../../../../shared/icons/how-it-works/2.svg";
import third from "../../../../shared/icons/how-it-works/3.svg";
import fourth from "../../../../shared/icons/how-it-works/4.svg";
import fifth from "../../../../shared/icons/how-it-works/5.svg";
import sixth from "../../../../shared/icons/how-it-works/6.svg";
import seventh from "../../../../shared/icons/how-it-works/7.svg";

const Steps = () => {
  const data = [
    {
      name: "Ashes Diamonds Welcome Kit",
      icon: first,
    },
    {
      name: "Carbon Extraction",
      icon: second,
    },
    {
      name: "Diamond Growth",
      icon: third,
    },
    {
      name: "Quality Inspection",
      icon: fourth,
    },
    {
      name: "Diamond Cutting",
      icon: fifth,
    },
    {
      name: "Customization",
      icon: sixth,
    },
    {
      name: "Ordering",
      icon: seventh,
    },
  ];

  const renderItem = (item: { name: string; icon: any }, i: number) => (
    <div key={i} className={style.block}>
      <div className={style.square}>
        <ImageWrapper
          wrapperClassName={style.icon}
          src={item.icon}
          alt={item.name}
          priority={true}
        />
      </div>
      <p className={style.name}>{item.name}</p>
    </div>
  );

  return (
    <div className={style.steps}>
      <ImageWrapper
        src={fadeLeft}
        alt="fade left"
        wrapperClassName={style.fadeLeft}
        priority={true}
      />
      <div className="container">
        <div className={style.wrapper}>{data.map(renderItem)}</div>
      </div>
    </div>
  );
};

export default Steps;
