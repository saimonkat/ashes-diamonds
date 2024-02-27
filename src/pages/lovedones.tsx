import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Lovedones from "@app/routes/Lovedones";

const LovedonesPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Lovedones" />
      <Lovedones />
    </>
  );
};

export default LovedonesPageLayout;
