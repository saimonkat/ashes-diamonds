import React, { FC } from "react";
import Link from "next/link";

//style
import style from "./schedule.module.scss";
import { STARTED_PAGE } from "@entities/consts/paths";

const Schedule: FC = () => {
  return (
    <Link href={STARTED_PAGE}>
      <a className={style.link}>Schedule Consultation</a>
    </Link>
  );
};

export default Schedule;
