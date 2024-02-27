import React from "react";
import Link from "next/link";

//style
import style from "./started.module.scss";

const Started = () => {
  return (
    <Link href="#">
      <a className={style.link}>Order Welcome Kit</a>
    </Link>
  );
};

export default Started;
