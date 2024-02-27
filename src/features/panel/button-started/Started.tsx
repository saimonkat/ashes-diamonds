import React from "react";
import Link from "next/link";

//components
import ImageWrapper from "@components/common/ImageWrapper";

//style
import style from "./started.module.scss";

//img
import diamond from "../../../shared/icons/panel/diamond.svg";

const Started = () => {
  return (
    <Link href="/started">
      <a className={style.link}>
        <ImageWrapper
          src={diamond}
          alt="diamond"
          wrapperClassName={style.image}
        />
        Get started
      </a>
    </Link>
  );
};

export default Started;
