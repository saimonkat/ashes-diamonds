import React from "react";
import Link from "next/link";

//style
import style from "./started.module.scss";
import { STARTED_PAGE } from "@entities/consts/paths";

const Started = () => {
  return (
    <Link href={STARTED_PAGE} className={style.started}>
      Get Started
    </Link>
  );
};

export default Started;
