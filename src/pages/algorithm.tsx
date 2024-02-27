import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Algorithm from "@app/routes/Algorithm";

const AlgorithmPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Algorithm" />
      <Algorithm />
    </>
  );
};

export default AlgorithmPageLayout;
