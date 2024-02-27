import React, { useEffect, useState } from "react";

import style from "./articles.module.scss";
import ArticleCard from "../article-card/ArticleCard";

import WantTo from "../want-to/WantTo";
import { getArticles } from "@entities/requests/requests";
import { Skeleton } from "antd";
import { TArticle } from "./types";
import { TMetaResponse } from "@entities/requests/types";
import Pagination from "@components/common/Pagination";
import { useRouter } from "next/router";

const Articles: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<TArticle[]>([]);
  const [responseMeta, setResponseMeta] = useState<TMetaResponse | null>(null);
  const router = useRouter();
  const query = router.query;
  const { page } = query;
  const pageSize = 10;

  console.log(123, router.asPath);
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);

  useEffect(() => {
    setLoading(true);
    const startTime = new Date().valueOf();
    let responseTime: number;
    router.replace(
      {
        query: { page: currentPage },
      },
      undefined,
      {
        scroll: true,
        shallow: true,
      }
    );
    getArticles(currentPage, pageSize)
      .then((data) => {
        responseTime = new Date().valueOf() - startTime;
        setList(data.data.data);
        setResponseMeta(data.data);
      })
      .catch(() => {
        responseTime = new Date().valueOf() - startTime;
      })
      .finally(() => {
        if (responseTime > 300) {
          setLoading(false);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 300);
        }
      });
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <ArticleSkeletons />
      ) : (
        <div>
          <article className={style.articles}>
            {list.map((item) => (
              <ArticleCard
                key={item.id}
                content={item.content}
                created_at={item.created_at}
                id={item.id}
                is_blog_page={item.is_blog_page}
                img={item.img}
                slug={item.slug}
                title={item.title}
                sub_title={item.sub_title}
                updated_at={item.updated_at}
                rating={item.rating}
                meta={item.meta}
                author={item.author}
              />
            ))}
            {/*<div className={style.mobile}>*/}
            {/*  <WantTo />*/}
            {/*</div>*/}
          </article>
          {responseMeta && (
            <div className={style.paginationWrapper}>
              <Pagination
                pageSize={pageSize}
                totalCount={responseMeta.meta.total}
                setCurrentPage={setCurrentPage}
                current={currentPage}
                inBottom={true}
                pathname={router.pathname}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Articles;

const ArticleSkeletons = () => {
  const skeletonItem = (
    <div className={style.skeletonItemWrapper}>
      <Skeleton.Input
        active={true}
        className={style.skeletonItemInner}
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "24px",
          overflow: "hidden",
          background: "#F1F1F1",
        }}
      />
      <Skeleton.Input
        active={true}
        style={{
          marginTop: "24px",
          width: "50%",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#F1F1F1",
        }}
      />
    </div>
  );

  return (
    <div className={style.skeletonListWrapper}>
      {skeletonItem}
      {skeletonItem}
      {skeletonItem}
      {skeletonItem}
    </div>
  );
};
