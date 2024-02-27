import React from "react";

import style from "./blogNav.module.scss";

const BlogNav: React.FC = () => {
  const blogNavData = [
    {
      id: 1,
      textLinkOne: "All",
      textLinkTwo: "Categories",
    },
    {
      id: 2,
      textLinkOne: "Thought",
      textLinkTwo: "Leadership",
    },
    {
      id: 3,
      textLinkOne: "Love",
      textLinkTwo: "Letter",
    },
    {
      id: 4,
      textLinkOne: "Meaning",
      textLinkTwo: "Making",
    },
    {
      id: 5,
      textLinkOne: "Remarkable",
      textLinkTwo: "Lives",
    },
    {
      id: 6,
      textLinkOne: "Science",
      textLinkTwo: "& Tech",
    },
    {
      id: 7,
      textLinkOne: "Remarkable",
      textLinkTwo: "Lives",
    },
  ];
  return (
    <nav className={style.blogNav}>
      {blogNavData.map((item) => (
        <div className={style.linkWrap} key={item.id}>
          <a className={`activeLink ${style.link}`} href="#">
            <span>{item.textLinkOne}</span>
            <span>{item.textLinkTwo}</span>
          </a>
        </div>
      ))}
      <div className={style.background}></div>
    </nav>
  );
};

export default BlogNav;
