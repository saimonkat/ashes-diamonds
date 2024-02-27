import { FC } from "react";

//components
import HeadMeta from "@components/headMeta/HeadMeta";
import Home from "@app/routes/Home";

const StartPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Ashes Diamonds" />
      <Home />
    </>
  );
};

export default StartPageLayout;
