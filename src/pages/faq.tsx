import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import FAQ from "@app/routes/FAQ";

const FAQPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="FAQ" />
      <FAQ />
    </>
  );
};

export default FAQPageLayout;
