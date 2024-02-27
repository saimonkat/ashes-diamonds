import React, { useEffect, useState } from "react";

import style from "./articles.module.scss";

import ArticleCard from "@components/pages/blog/article-card/ArticleCard";
import { getArticles } from "@entities/requests/requests";
import { TArticle } from "@components/pages/blog/article/types";

function getMultipleRandom<T>(arr: T[], num: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const Articles: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<TArticle[]>([]);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((data) => {
        setList(data.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <article className={style.articles}>
      <div className="container">
        <h2 className={style.title}>Related articles</h2>
        <div className={style.content}>
          {getMultipleRandom<TArticle>(list, 3).map((item) => (
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
        </div>
      </div>
    </article>
  );
};

export default Articles;
