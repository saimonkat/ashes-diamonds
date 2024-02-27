import React from "react";
import Link from "next/link";

//components
import ImageWrapper from "@components/common/ImageWrapper";

//style
import style from "./mobile-button.module.scss";

//shared
import rhomb from "../../../shared/icons/header/diamond.svg";
import { STARTED_PAGE } from "@entities/consts/paths";

const MobileButton = () => {
  return (
    <Link href={STARTED_PAGE} style={{ width: "100%", display: "block" }}>
      <div className={style.button}>
        <ImageWrapper src={rhomb} alt="rhomb" wrapperClassName={style.image} />
        Get started
      </div>
    </Link>
  );
};

export default MobileButton;
