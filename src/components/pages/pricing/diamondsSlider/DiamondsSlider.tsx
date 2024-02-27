import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import { Navigation, A11y, Scrollbar } from "swiper/modules";

//shared slider
import red1 from "../../../../shared/images/pricing/red-1-min.png";
import red2 from "../../../../shared/images/pricing/red-2-min.png";
import red3 from "../../../../shared/images/pricing/red-3-min.png";
import red4 from "../../../../shared/images/pricing/red-4-min.png";
import red5 from "../../../../shared/images/pricing/red-5-min.png";
import yellow1 from "../../../../shared/images/pricing/yellow-1-min.png";
import yellow2 from "../../../../shared/images/pricing/yellow-2-min.png";
import yellow3 from "../../../../shared/images/pricing/yellow-3-min.png";
import yellow4 from "../../../../shared/images/pricing/yellow-4-min.png";
import yellow5 from "../../../../shared/images/pricing/yellow-5-min.png";
import green1 from "../../../../shared/images/pricing/green-1-min.png";
import green2 from "../../../../shared/images/pricing/green-2-min.png";
import green3 from "../../../../shared/images/pricing/green-3-min.png";
import green4 from "../../../../shared/images/pricing/green-4-min.png";
import green5 from "../../../../shared/images/pricing/green-5-min.png";
import blue1 from "../../../../shared/images/pricing/blue-1-min.png";
import blue2 from "../../../../shared/images/pricing/blue-2-min.png";
import blue3 from "../../../../shared/images/pricing/blue-3-min.png";
import blue4 from "../../../../shared/images/pricing/blue-4-min.png";
import blue5 from "../../../../shared/images/pricing/blue-5-min.png";
import white1 from "../../../../shared/images/pricing/white-1-min.png";
import white2 from "../../../../shared/images/pricing/white-2-min.png";
import white3 from "../../../../shared/images/pricing/white-3-min.png";
import white4 from "../../../../shared/images/pricing/white-4-min.png";
import white5 from "../../../../shared/images/pricing/white-5-min.png";
//svg
import arrowSlide from "../../../../shared/icons/pricing/arrow-slide.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//style
import style from "./diamondsSlider.module.scss";
import { Diamond } from "../diamondPrices/DiamondPrices";
import ImageWrapper from "@components/common/ImageWrapper";

interface DiamondSliderProps {
  selectedItem: Diamond | null;
}

const DiamondSlider: React.FC<DiamondSliderProps> = ({ selectedItem }) => {
  const swiperData = [
    { id: 1, src: red1, color: "red" },
    { id: 2, src: yellow1, color: "yellow" },
    { id: 3, src: green1, color: "green" },
    { id: 4, src: blue1, color: "blue" },
    { id: 5, src: white1, color: "white" },
    { id: 6, src: red1, color: "red" },
    { id: 7, src: yellow1, color: "yellow" },
    { id: 8, src: green1, color: "green" },
    { id: 9, src: blue1, color: "blue" },
    { id: 10, src: white1, color: "white" },
    { id: 11, src: red1, color: "red" },
    { id: 12, src: yellow1, color: "yellow" },
    { id: 13, src: green1, color: "green" },
    { id: 14, src: blue1, color: "blue" },
    { id: 15, src: white1, color: "white" },
    //
    { id: 16, src: red2, color: "red" },
    { id: 17, src: yellow2, color: "yellow" },
    { id: 18, src: green2, color: "green" },
    { id: 19, src: blue2, color: "blue" },
    { id: 20, src: white2, color: "white" },
    { id: 21, src: red2, color: "red" },
    { id: 22, src: yellow2, color: "yellow" },
    { id: 23, src: green2, color: "green" },
    { id: 24, src: blue2, color: "blue" },
    { id: 25, src: white2, color: "white" },
    { id: 26, src: red2, color: "red" },
    { id: 27, src: yellow2, color: "yellow" },
    { id: 28, src: green2, color: "green" },
    { id: 29, src: blue2, color: "blue" },
    { id: 30, src: white2, color: "white" },
    //
    { id: 31, src: red3, color: "red" },
    { id: 32, src: yellow3, color: "yellow" },
    { id: 33, src: green3, color: "green" },
    { id: 34, src: blue3, color: "blue" },
    { id: 35, src: white3, color: "white" },
    { id: 36, src: red3, color: "red" },
    { id: 37, src: yellow3, color: "yellow" },
    { id: 38, src: green3, color: "green" },
    { id: 39, src: blue3, color: "blue" },
    { id: 40, src: white3, color: "white" },
    { id: 41, src: red3, color: "red" },
    { id: 42, src: yellow3, color: "yellow" },
    { id: 43, src: green3, color: "green" },
    { id: 44, src: blue3, color: "blue" },
    { id: 45, src: white3, color: "white" },
    //
    { id: 46, src: red4, color: "red" },
    { id: 47, src: yellow4, color: "yellow" },
    { id: 48, src: green4, color: "green" },
    { id: 49, src: blue4, color: "blue" },
    { id: 50, src: white4, color: "white" },
    { id: 51, src: red4, color: "red" },
    { id: 52, src: yellow4, color: "yellow" },
    { id: 53, src: green4, color: "green" },
    { id: 54, src: blue4, color: "blue" },
    { id: 55, src: white4, color: "white" },
    { id: 56, src: red4, color: "red" },
    { id: 57, src: yellow4, color: "yellow" },
    { id: 58, src: green4, color: "green" },
    { id: 59, src: blue4, color: "blue" },
    { id: 60, src: white4, color: "white" },
    //
    { id: 61, src: red5, color: "red" },
    { id: 62, src: yellow5, color: "yellow" },
    { id: 63, src: green5, color: "green" },
    { id: 64, src: blue5, color: "blue" },
    { id: 65, src: white5, color: "white" },
    { id: 66, src: red5, color: "red" },
    { id: 67, src: yellow5, color: "yellow" },
    { id: 68, src: green5, color: "green" },
    { id: 69, src: blue5, color: "blue" },
    { id: 70, src: white5, color: "white" },
    { id: 71, src: red5, color: "red" },
    { id: 72, src: yellow5, color: "yellow" },
    { id: 73, src: green5, color: "green" },
    { id: 74, src: blue5, color: "blue" },
    { id: 75, src: white5, color: "white" },
  ];
  const swiperRef = useRef<any>();
  const sliceData = swiperData.filter((item) => {
    switch (selectedItem?.id) {
      case 1:
        return item.id <= 15;
      case 2:
        return item.id > 15 && item.id <= 30;
      case 3:
        return item.id > 30 && item.id <= 45;
      case 4:
        return item.id > 45 && item.id <= 60;
      case 5:
        return item.id > 60 && item.id <= 75;
    }
  });

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const handleClick = (index: any) => {
    setActiveSlideIndex(index);
  };

  const params: SwiperProps = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scrollbar: {
      draggable: true,
    },
    initialSlide: activeSlideIndex,
    className: style.swiperContainer,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    mousewheel: true,
    speed: 800,
    keyboard: true,
    navigation: {
      prevEl: style["button-prev-slide"],
      nextEl: style["button-next-slide"],
    },
    modules: [Navigation, A11y, Scrollbar],
    breakpoints: { 1005: { slidesPerView: 5 } },
    onSwiper: (swiper: any) => {
      swiperRef.current = swiper;
    },
    onSlideChange: (item: { realIndex: React.SetStateAction<number> }) => {
      setActiveSlideIndex(item.realIndex);
    },
  };

  return (
    <div className={style.diamondSwiper}>
      <Swiper
        {...params}
        // initialSlide={activeSlideIndex}
        // className={style.swiperContainer}
        // centeredSlides={true}
        // loop={true}
        // grabCursor={true}
        // slidesPerView={3}
        // slidesPerGroup={1}
        // mousewheel={true}
        // speed={800}
        // keyboard={true}
        // navigation={{
        //   prevEl: style["button-prev-slide"],
        //   nextEl: style["button-next-slide"],
        // }}
        // modules={[Navigation, A11y]}
        // breakpoints={{ 1005: { slidesPerView: 5 } }}
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <>
          {sliceData.map((item, i) => {
            return (
              <SwiperSlide key={i} className={style.swiperSlide}>
                <div className={style.swiperImgWrap}>
                  <ImageWrapper
                    wrapperClassName={style.swiperImg}
                    imageClassName={style.swiperImg}
                    src={item.src}
                    alt="diamonds"
                  />
                  <span
                    className={`${style["pagination-text"]} ${
                      i == activeSlideIndex && style["pagination-text-active"]
                    }`}
                  >
                    {item.color} Diamonds
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={style.bg}></div>
        </>
      </Swiper>
      <div className={style["slider-controler"]}>
        <div className={style["controller-wrapper"]}>
          <div
            className={style["button-prev-slide"]}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <ImageWrapper src={arrowSlide} alt="arrow-slide" />
          </div>
          <div
            className={style["button-next-slide"]}
            onClick={() => swiperRef.current.slideNext()}
          >
            <ImageWrapper src={arrowSlide} alt="arrow-slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondSlider;
