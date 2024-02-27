import React, { useEffect, useMemo, useState } from "react";

//components
import Header from "@components/header/Header";
import { TArticle } from "@components/pages/blog/article/types";
import { useRouter } from "next/router";
import { getArticleById } from "@entities/requests/requests";
import { isArray, isEmpty } from "lodash";
import { Skeleton, Spin } from "antd";

import Content from "@components/pages/notFound/content/Content";
import TextPage from "@components/pages/notFound/textPage/TextPage";

const NotFound: React.FC = () => {
  const router = useRouter();
  const path = router.asPath.slice(1, router.asPath.length);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState<TArticle | null | undefined>(
    null
  );

  useEffect(() => {
    setArticleData(null);
    if (path) {
      setLoading(true);
      getArticleById(isArray(path) ? path[0] : path, false)
        .then((data) => {
          setArticleData(data.data);
        })
        .catch(() => {
          setArticleData(undefined);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [path]);

  useEffect(() => {
    return () => {
      setArticleData(null);
    };
  }, []);

  const loadingContent = (
    <>
      <div className={`not-found-skeleton-wrapper`}>
        <Spin />
      </div>
    </>
  );

  const content = useMemo(() => {
    if (loading) {
      return loadingContent;
    }

    if (!isEmpty(articleData)) {
      return <TextPage articleData={articleData} />;
    }

    if (articleData === undefined) {
      return <Content headerHeight={headerHeight} />;
    }

    return loadingContent;
  }, [articleData, loading]);

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} adaptiveBg={true} />
      <div className="main">{content}</div>
    </>
  );
};

export default NotFound;
