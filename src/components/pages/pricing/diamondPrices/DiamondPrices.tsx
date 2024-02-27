import React, { useState } from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
import DiamondSlider from "../diamondsSlider/DiamondsSlider";
import Price from "../price/Price";

//style
import style from "./diamondPrices.module.scss";

//shared
import d1 from "../../../../shared/icons/diamond/d1.svg";
import d2 from "../../../../shared/icons/diamond/d2.svg";
import d3 from "../../../../shared/icons/diamond/d3.svg";
import d4 from "../../../../shared/icons/diamond/d4.svg";
import d5 from "../../../../shared/icons/diamond/d5.svg";
import fade from "../../../../shared/images/blogDetail/fade2.png";

export interface Diamond {
  id: number;
  img: string;
}

const DiamondPrices: React.FC = () => {
  const diamonds: Diamond[] = [
    {
      id: 1,
      img: d1,
    },
    {
      id: 2,
      img: d2,
    },
    {
      id: 3,
      img: d3,
    },
    {
      id: 4,
      img: d4,
    },
    {
      id: 5,
      img: d5,
    },
  ];

  const [selectedItem, setSelectedItem] = useState<Diamond | null>(diamonds[0]);

  const handleItemClick = (diamond: Diamond) => {
    setSelectedItem(diamond);
  };

  return (
    <div className={style.diamonds}>
      <div className="container">
        <form className={style.content}>
          <div className={style.diamondWrap}>
            <div className={style.diamondForm}>
              <ul>
                {diamonds.map((diamond) => (
                  <li
                    key={`${diamond.img}-${diamond.id}`}
                    className={
                      diamond.id === (selectedItem?.id || null)
                        ? style.diamond
                        : style.diamondActive
                    }
                    onClick={() => handleItemClick(diamond)}
                  >
                    <ImageWrapper
                      src={diamond.img}
                      alt={`Diamond ${diamond.id}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DiamondSlider selectedItem={selectedItem} />
          <Price selectedItem={selectedItem} />
        </form>
      </div>
      <ImageWrapper src={fade} alt="fade" wrapperClassName={style.fade} />
    </div>
  );
};

export default DiamondPrices;
