import React, { useState, useRef, useEffect } from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";
//style
import styles from "./faq.module.scss";
//shared
import pluse from "../../shared/icons/faq/faq-plus.svg";
import minus from "../../shared/icons/faq/faq-minus.svg";
import fadeOrange from "../../shared/images/pets/like/fade.png";
import fadePurple from "../../shared/images/home/banner/fadeRightSecond.png";


const Additional: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<Array<number>>([]);
  const contentRef = useRef<Array<HTMLDivElement | null>>([]);

  const items = [
    {
      title: "Can I use ashes that have been sitting at home?",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis.",
    },
    {
      title: "Is there carbon in hair?",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis.",
    },
    {
      title: "Is there carbon left in ashes after cremation?",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis.",
    },
    {
      title: "What happens if I lose my Diamond?",
      content:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis ipsum dolor sit amet consectetur adipisicing elit. Optio quia accusantium, delectus eum a illum aut veritatis ipsa. Non, officiis.",
    },
  ];

  const onItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const updatedHeights = items.map((_, index) => {
      if (contentRef.current && contentRef.current[index]) {
        return contentRef.current[index]?.scrollHeight || 0;
      }
      return 0;
    });
    setContentHeights(updatedHeights);
  }, [activeIndex]);

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? styles.active : "";

    return (
      <li key={item.title}>
        <div
          className={`${styles.title} ${isActive}`}
          onClick={() => onItemClick(index)}
        >
          <ImageWrapper
            src={pluse}
            alt="pluse"
            wrapperClassName={styles.arrow}
          />
          <ImageWrapper
            src={minus}
            alt="minus"
            wrapperClassName={styles.arrowMinus}
          />
          <i className={`dropdown icon ${styles.icon}`}></i>
          {item.title}
        </div>
        <div
          ref={(el) => (contentRef.current[index] = el)}
          style={{
            maxHeight: activeIndex === index ? contentHeights[index] : 0,
          }}
          className={`${styles.content} ${isActive}`}
        >
          <p className={styles.text}>{item.content}</p>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h2 className="subtitle">Additional</h2>
        <ul className={`ui styled accordion ${styles.accordion}`}>
          {renderedItems}
        </ul>
      </div>
      <ImageWrapper
        src={fadeOrange}
        alt="fade orange"
        wrapperClassName={styles.fadeOrange}
      />
      <ImageWrapper
        src={fadePurple}
        alt="fade purple"
        wrapperClassName={styles.fadePurple}
      />
    </div>
  );
};

export default Additional;
