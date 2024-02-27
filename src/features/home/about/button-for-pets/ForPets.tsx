import React from "react";

//style
import style from "./for-pets.module.scss";
import Link from "next/link";
import { PETS_PAGE } from "@entities/consts/paths";

const ForPets = () => {
  return (
    <div className={style.button}>
      <Link href={PETS_PAGE}>for pets</Link>
    </div>
  );
};

export default ForPets;
