import React from "react";

//style
import style from "./for-loved.module.scss";
import Link from "next/link";
import { LOVEDONES_PAGE } from "@entities/consts/paths";

const ForPets = () => {
  return (
    <div className={style.button}>
      <Link
        href={LOVEDONES_PAGE}
        className={style.link}
        style={{ color: "black" }}
      >
        for loved ones
      </Link>
    </div>
  );
};

export default ForPets;
