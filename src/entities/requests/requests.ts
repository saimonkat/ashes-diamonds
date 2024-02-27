import axiosInstance from "../../api/api";
import { AxiosResponse } from "axios";
import { showAxiosNotificationError } from "@entities/utils/notifications";
import { TGetArticleResponse } from "@entities/requests/types";
import { TArticle } from "@components/pages/blog/article/types";

export const getArticles = (
  page = 1,
  pageSize = 10
): Promise<AxiosResponse<TGetArticleResponse>> => {
  const params = {
    page,
    pageSize,
  };
  return axiosInstance
    .get("/page/blog_pages", { params: params })
    .then((data: AxiosResponse<TGetArticleResponse>) => {
      return data;
    })
    .catch((err) => {
      showAxiosNotificationError(err);
      throw err;
    });
};

export const getArticleById = (
  id: string,
  showNotification = true
): Promise<AxiosResponse<TArticle>> => {
  return axiosInstance
    .get(`/page/${id}`)
    .then((data: AxiosResponse<TArticle>) => {
      return data;
    })
    .catch((err) => {
      if (showNotification) {
        showAxiosNotificationError(err);
      }
      throw err;
    });
};
