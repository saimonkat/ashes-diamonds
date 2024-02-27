import React, { useState, useRef, useEffect } from "react";

//components
import ImageWrapper from "@components/common/ImageWrapper";

//style
import styles from "./faq.module.scss";

//shared
import pluse from "../../shared/icons/faq/faq-plus.svg";
import minus from "../../shared/icons/faq/faq-minus.svg";
type Props = {
  data?: { title: string; content: string }[];
};
const Questions: React.FC<Props> = ({ data = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<Array<number>>([]);
  const contentRef = useRef<Array<HTMLDivElement | null>>([]);
  console.log(data)
  const items =  data && data.length > 0 ? data :  [
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
        <h2 className="subtitle">
          Frequently Asked <br /> Questions
        </h2>
        <ul className={`ui styled accordion ${styles.accordion}`}>
          {renderedItems}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
