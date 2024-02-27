import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Reviews from "@app/routes/Reviews";

const ReviewsPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Reviews" />
      <Reviews />
    </>
  );
};

export default ReviewsPageLayout;
