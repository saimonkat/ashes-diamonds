import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Pricing from "@app/routes/Pricing";

const PricingPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Pricing" />
      <Pricing />
    </>
  );
};

export default PricingPageLayout;
