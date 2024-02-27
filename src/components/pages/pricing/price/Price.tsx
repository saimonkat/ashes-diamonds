import React from "react";

//style
import style from "./price.module.scss";
import { Diamond } from "../diamondPrices/DiamondPrices";
import Schedule from "@features/home/want/button-schedule/Schedule";

interface PriceProps {
  selectedItem: Diamond | null;
}

const Price: React.FC<PriceProps> = ({ selectedItem }) => {
  const pricesData = [
    { id: 1, carat: ".1 - .19ct", price: "$3,079" },
    { id: 2, carat: ".2 - .29ct", price: "$3,599" },
    { id: 3, carat: ".3 - .39ct", price: "$4,619" },
    { id: 4, carat: ".4 - .49ct", price: "$5,639" },
    { id: 5, carat: ".5 - .69ct", price: "$6,999" },
    { id: 6, carat: ".7 - .89ct", price: "$9,309" },
    { id: 7, carat: "1ct", price: "$14,050" },
    { id: 8, carat: "2ct", price: "$18,050" },
    //
    { id: 9, carat: ".1 - .19ct", price: "$4,079" },
    { id: 10, carat: ".2 - .29ct", price: "$4,599" },
    { id: 11, carat: ".3 - .39ct", price: "$5,619" },
    { id: 12, carat: ".4 - .49ct", price: "$6,639" },
    { id: 13, carat: ".5 - .69ct", price: "$7,999" },
    { id: 14, carat: ".7 - .89ct", price: "$10,309" },
    { id: 15, carat: "1ct", price: "$15,050" },
    { id: 16, carat: "2ct", price: "$19,050" },
    //
    { id: 17, carat: ".1 - .19ct", price: "$5,079" },
    { id: 18, carat: ".2 - .29ct", price: "$5,599" },
    { id: 19, carat: ".3 - .39ct", price: "$6,619" },
    { id: 20, carat: ".4 - .49ct", price: "$7,639" },
    { id: 21, carat: ".5 - .69ct", price: "$8,999" },
    { id: 22, carat: ".7 - .89ct", price: "$11,309" },
    { id: 23, carat: "1ct", price: "$16,050" },
    { id: 24, carat: "2ct", price: "$20,050" },
    //
    { id: 25, carat: ".1 - .19ct", price: "$6,079" },
    { id: 26, carat: ".2 - .29ct", price: "$7,599" },
    { id: 27, carat: ".3 - .39ct", price: "$8,619" },
    { id: 28, carat: ".4 - .49ct", price: "$9,639" },
    { id: 29, carat: ".5 - .69ct", price: "$10,999" },
    { id: 30, carat: ".7 - .89ct", price: "$12,309" },
    { id: 31, carat: "1ct", price: "$17,050" },
    { id: 32, carat: "2ct", price: "$21,050" },
    //
    { id: 33, carat: ".1 - .19ct", price: "$7,079" },
    { id: 34, carat: ".2 - .29ct", price: "$8,599" },
    { id: 35, carat: ".3 - .39ct", price: "$9,619" },
    { id: 36, carat: ".4 - .49ct", price: "$10,639" },
    { id: 37, carat: ".5 - .69ct", price: "$11,999" },
    { id: 38, carat: ".7 - .89ct", price: "$13,309" },
    { id: 39, carat: "1ct", price: "$18,050" },
    { id: 40, carat: "2ct", price: "$22,050" },
  ];
  const slicePriceData = pricesData.filter((item) => {
    switch (selectedItem?.id) {
      case 1:
        return item.id <= 8;
      case 2:
        return item.id > 8 && item.id <= 16;
      case 3:
        return item.id > 16 && item.id <= 24;
      case 4:
        return item.id > 24 && item.id <= 32;
      case 5:
        return item.id > 32 && item.id <= 40;
    }
  });

  return (
    <>
      {/* desctop */}
      <div className={style.priceDesctop}>
        <div className={style.carat}>
          <p className={style.caratTitle}>Carat</p>
          {slicePriceData.map((item) => (
            <span className={style.caratDetail}>{item.carat}</span>
          ))}
        </div>
        <div className={style.line}></div>
        <div className={style.prices}>
          <p className={style.pricesTitle}>Price</p>
          {slicePriceData.map((item) => (
            <span className={style.pricesDetail}>{item.price}</span>
          ))}
        </div>
      </div>
      {/* mobile */}
      <div className={style.priceMobile}>
        {slicePriceData.map((item) => (
          <div key={item.id} className={style.priceMobileWrap}>
            <div className={style.lineWrap}>
              <p className={style.caratTitleMobile}>Carat</p>
              <span className={style.caratDetailMobile}>{item.carat}</span>
            </div>
            <div className={style.lineWrap}>
              <p className={style.caratTitleMobile}>Price</p>
              <span className={style.caratDetailMobile}>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      {/* action */}
      <div className={style.action}>
        <Schedule />
      </div>
    </>
  );
};

export default Price;
