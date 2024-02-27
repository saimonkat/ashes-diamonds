export type TArticle = {
  content: string;
  created_at: string;
  id: number;
  is_blog_page: number;
  img: string;
  slug: string;
  title: string;
  sub_title: string;
  updated_at: string;
  rating: number;
} & TArticleMeta &
  TArticleAuthor;

type TArticleMeta = {
  meta: {
    author: string;
    author_img: string;
    keywords: string;
    description: string;
  };
};

type TArticleAuthor = {
  author: {
    avatar: string;
    name: string;
  };
};
