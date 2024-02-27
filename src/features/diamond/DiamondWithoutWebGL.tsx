import React, { FC, useEffect, useMemo } from "react";
import { Colors, Diamond } from "./Diamond";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import style from "./diamond.module.scss";
//shared
// "white"
import white1 from "../../shared/noWebGL/white-1.png";
import white2 from "../../shared/noWebGL/white-2.png";
import white3 from "../../shared/noWebGL/white-3.png";
import white4 from "../../shared/noWebGL/white-4.png";
import white5 from "../../shared/noWebGL/white-5.png";
// "red"
import red1 from "../../shared/noWebGL/red-1.png";
import red2 from "../../shared/noWebGL/red-2.png";
import red3 from "../../shared/noWebGL/red-3.png";
import red4 from "../../shared/noWebGL/red-4.png";
import red5 from "../../shared/noWebGL/red-5.png";
// "yellow"
import yellow1 from "../../shared/noWebGL/yellow-1.png";
import yellow2 from "../../shared/noWebGL/yellow-2.png";
import yellow3 from "../../shared/noWebGL/yellow-3.png";
import yellow4 from "../../shared/noWebGL/yellow-4.png";
import yellow5 from "../../shared/noWebGL/yellow-5.png";
// "green"
import green1 from "../../shared/noWebGL/green-1.png";
import green2 from "../../shared/noWebGL/green-2.png";
import green3 from "../../shared/noWebGL/green-3.png";
import green4 from "../../shared/noWebGL/green-4.png";
import green5 from "../../shared/noWebGL/green-5.png";
// "blue"
import blue1 from "../../shared/noWebGL/blue-1.png";
import blue2 from "../../shared/noWebGL/blue-2.png";
import blue3 from "../../shared/noWebGL/blue-3.png";
import blue4 from "../../shared/noWebGL/blue-4.png";
import blue5 from "../../shared/noWebGL/blue-5.png";
import Loader from "@components/common/Loader";

type Props = {
  selectedItem: Diamond;
  selectedColor: Colors;
  isLoading: boolean;
  loadFinish: () => void;
  loadStart: () => void;
};

export const DiamondWithoutWebGL: FC<Props> = ({
  selectedItem,
  selectedColor,
  isLoading,
  loadFinish,
  loadStart,
}) => {
  const data = useMemo(
    () => [
      {
        name: "white",
        diamonds: [
          { id: 1, img: white1 },
          { id: 2, img: white2 },
          { id: 3, img: white3 },
          { id: 4, img: white4 },
          { id: 5, img: white5 },
        ],
      },
      {
        name: "red",
        diamonds: [
          { id: 1, img: red1 },
          { id: 2, img: red2 },
          { id: 3, img: red3 },
          { id: 4, img: red4 },
          { id: 5, img: red5 },
        ],
      },
      {
        name: "yellow",
        diamonds: [
          { id: 1, img: yellow1 },
          { id: 2, img: yellow2 },
          { id: 3, img: yellow3 },
          { id: 4, img: yellow4 },
          { id: 5, img: yellow5 },
        ],
      },
      {
        name: "green",
        diamonds: [
          { id: 1, img: green1 },
          { id: 2, img: green2 },
          { id: 3, img: green3 },
          { id: 4, img: green4 },
          { id: 5, img: green5 },
        ],
      },
      {
        name: "blue",
        diamonds: [
          { id: 1, img: blue1 },
          { id: 2, img: blue2 },
          { id: 3, img: blue3 },
          { id: 4, img: blue4 },
          { id: 5, img: blue5 },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    loadStart();
  }, [selectedItem, selectedColor]);

  const getActiveDiamond = useMemo(() => {
    const diamonds = data.find((d) => d.name === selectedColor.name);
    const diamond = diamonds?.diamonds.find(
      (item) => item.id === selectedItem.id
    );
    return diamond;
  }, [selectedColor, selectedItem]);

  return (
    <div className={style.webGlWrapper}>
      {isLoading && (
        <div className={style.loader}>
          <Loader />
        </div>
      )}
      <ImageWrapper
        src={getActiveDiamond?.img as any}
        alt={`Diamond`}
        onLoadingComplete={loadFinish}
      />
    </div>
  );
};
