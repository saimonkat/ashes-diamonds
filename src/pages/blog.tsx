import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import Blog from "@app/routes/Blog";

const BlogPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Blog" />
      <Blog />
    </>
  );
};

export default BlogPageLayout;
