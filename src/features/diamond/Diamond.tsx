import React, { useState } from "react";

//style
import style from "./diamond.module.scss";

//components
import Constructor from "@features/animations/HomePageConstructor";

//shared
import d1 from "../../shared/icons/diamond/d1.svg";
import d2 from "../../shared/icons/diamond/d2.svg";
import d3 from "../../shared/icons/diamond/d3.svg";
import d4 from "../../shared/icons/diamond/d4.svg";
import d5 from "../../shared/icons/diamond/d5.svg";
import fade from "../../shared/images/diamond/fadeLeft.png";
import ImageWrapper from "@components/common/ImageWrapper";
import Link from "next/link";
import { PRICING_PAGE, STARTED_PAGE } from "@entities/consts/paths";
import { DiamondWithoutWebGL } from "./DiamondWithoutWebGL";
import { useWindowWidth } from "@entities/hooks/useResize";

interface DiamondsProps {
  isFade?: boolean;
  isSupported?: boolean;
}

export interface Diamond {
  id: number;
  img: string;
  link: string;
}

export interface Colors {
  color: string;
  name: "white" | "red" | "yellow" | "green" | "blue";
}

const Diamonds: React.FC<DiamondsProps> = ({
  isFade = true,
  isSupported = true,
}) => {
  const diamonds: Diamond[] = [
    {
      id: 1,
      img: d1,
      link: "d1/diamond.gltf",
    },
    {
      id: 2,
      img: d2,
      link: "d2/diamond.gltf",
    },
    {
      id: 3,
      img: d3,
      link: "d3/diamond.gltf",
    },
    {
      id: 4,
      img: d4,
      link: "d4/diamond.gltf",
    },
    {
      id: 5,
      img: d5,
      link: "d5/diamond.gltf",
    },
  ];

  const width = useWindowWidth();
  const isMobile = (width as number) < 481;

  const colors: Colors[] = [
    {
      color: "#B7B7B7",
      name: "white",
    },
    {
      color: "#BC5757",
      name: "red",
    },
    {
      color: "#BCA857",
      name: "yellow",
    },
    {
      color: "#77A258",
      name: "green",
    },
    {
      color: "#54B2CD",
      name: "blue",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);

  const [selectedItem, setSelectedItem] = useState<Diamond>(diamonds[0]);
  const [selectedColor, setSelectedColor] = useState<Colors>(colors[0]);

  const loadStart = () => {
    setIsLoading(true);
  };

  const loadFinish = () => {
    setIsLoading(false);
  };

  const handleItemClick = (diamond: Diamond) => {
    if (selectedItem.id === diamond.id) {
      return;
    }
    setSelectedItem(diamond);
  };

  const handleColorClick = (color: Colors) => {
    if (selectedColor.name === color.name) {
      return;
    }
    setSelectedColor(color);
  };

  return (
    <div className={style.diamonds}>
      <div className={style.background}></div>
      {isFade && (
        <ImageWrapper src={fade} alt="fade" wrapperClassName={style.fade} />
      )}
      <div className={`container ${style.container}`}>
        <div className={style.wrapper}>
          <h2 className={style.subtitle}>
            A Diamond that
            <br />
            is uniquely them
          </h2>
          <form className={style.content}>
            <div className={style.diamondForm}>
              <p className={style.form}>Form</p>
              <ul>
                {diamonds.map((diamond) => (
                  <li
                    key={diamond.id}
                    className={
                      diamond.id === (selectedItem?.id || null)
                        ? style.diamond
                        : style.diamondActive
                    }
                    aria-disabled
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

            <div className={style.colorWrapper}>
              <p className={style.color}>Color</p>
              <ul>
                {colors.map((color, index) => (
                  <li
                    key={index}
                    className={
                      color.color === (selectedColor as Colors).color
                        ? style.activeColor
                        : ""
                    }
                    onClick={() => handleColorClick(color)}
                  >
                    <p>{color.color}</p>
                    <span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.canvas_mobile}>
              {isMobile || !isSupported ? (
                <DiamondWithoutWebGL
                  selectedItem={selectedItem}
                  selectedColor={selectedColor}
                  isLoading={isLoading}
                  loadFinish={loadFinish}
                  loadStart={loadStart}
                />
              ) : (
                <Constructor
                  selectedColor={selectedColor}
                  selectedItem={selectedItem}
                  link={selectedItem?.link}
                  isMobile
                />
              )}
            </div>
            <div className={`${style.buttonWrapper} `}>
              <Link href={STARTED_PAGE}>Begin the Journey</Link>
              <Link href={PRICING_PAGE}>View prices</Link>
            </div>
          </form>
        </div>
        <div className={style.canvas}>
          {isSupported ? (
            <Constructor
              selectedColor={selectedColor}
              selectedItem={selectedItem}
              link={selectedItem?.link}
            />
          ) : (
            <DiamondWithoutWebGL
              selectedItem={selectedItem}
              selectedColor={selectedColor}
              isLoading={isLoading}
              loadFinish={loadFinish}
              loadStart={loadStart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Diamonds;
