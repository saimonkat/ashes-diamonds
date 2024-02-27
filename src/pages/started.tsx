import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Started from "@app/routes/Started";

const StartedPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Get started" />
      <Started />
    </>
  );
};

export default StartedPageLayout;
