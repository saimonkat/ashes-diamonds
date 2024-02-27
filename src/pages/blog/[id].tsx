import { FC } from "react";

import HeadMeta from "@components/headMeta/HeadMeta";
import BlogDetailPage from "@app/routes/BlogDetail";

const BlogPageLayout: FC = () => {
  return (
    <>
      <HeadMeta title="Blog" />
      <BlogDetailPage />
    </>
  );
};

export default BlogPageLayout;
