import React from "react";

//style
import style from "./want.module.scss";

//components
import Started from "@features/home/want/button-started/Started";
import Schedule from "@features/home/want/button-schedule/Schedule";

const WantTo = () => {
  return (
    <div className={style.want}>
      <div className={style.background}></div>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.inner}>
            <h2>
              Want to
              <br />
              <span> learn more?</span>
            </h2>
            <p>
              Schedule a no pressure consultation to learn more about the
              process & ask questions. We look forward to hearing about your
              loved one.
            </p>
            <Schedule />
          </div>
          <div className={style.inner}>
            <h2>
              Ready to get <br /> <span>started?</span>
            </h2>
            <p>
              Schedule a no pressure consultation to learn more about the
              process & ask questions. We look forward to hearing about your
              loved one.
            </p>
            <Started />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantTo;
