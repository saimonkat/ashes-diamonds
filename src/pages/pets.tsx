import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Pets from "@app/routes/Pets";

const PetsPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Pets" />
      <Pets />
    </>
  );
};

export default PetsPageLayout;
