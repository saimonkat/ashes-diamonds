import { TArticle } from "@components/pages/blog/article/types";

export type TMetaResponse = {
  meta: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type TGetArticleResponse = {
  data: TArticle[];
} & TMetaResponse;
