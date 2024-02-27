import Link from "next/link";
import React from "react";
//style
import style from "./want.module.scss";
import { STARTED_PAGE } from "@entities/consts/paths";

const WantTo = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <h2>
          Want to
          <br />
          <span> learn more?</span>
        </h2>
        <p>
          Schedule a no pressure consultation to learn more about the process &
          ask questions. We look forward to hearing about your loved one.
        </p>
        {/* <Schedule /> */}
        <Link href={STARTED_PAGE}>
          <a className={style.link}>Schedule Consultation</a>
        </Link>
      </div>
      <div className={style.inner}>
        <h2>Ready to get started?</h2>
        <p>
          Schedule a no pressure consultation to learn more about the process &
          ask questions. We look forward to hearing about your loved one.
        </p>
        {/* <Started /> */}
        <Link href={"#"}>
          <a className={style.linkTwo}>Order Welcome Kit</a>
        </Link>
      </div>
    </div>
  );
};

export default WantTo;
