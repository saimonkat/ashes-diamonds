import Link from "next/link";
import React from "react";

//style
import style from "./process.module.scss";

const Process = () => {
  return (
    <Link href="#">
      <button className={style.process}>Process Video</button>
    </Link>
  );
};

export default Process;
