import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import About from "@app/routes/About";

const AboutPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="About" />
      <About />
    </>
  );
};

export default AboutPageLayout;
