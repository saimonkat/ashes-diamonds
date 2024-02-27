import React from "react";
import Link from "next/link";

//components
import ImageWrapper from "@components/common/ImageWrapper";

//style
import style from "./modal-button.module.scss";

//svg
import diamond from "../../../../shared/icons/home/banner/diamond.svg";
import { STARTED_PAGE } from "@entities/consts/paths";

const ModalButton = () => {
  return (
    <Link href={STARTED_PAGE}>
      <a className={style.button}>
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

export default ModalButton;
