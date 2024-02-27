import React, { useCallback, useMemo } from "react";
//style
import style from "./contacts.module.scss";
import Link from "antd/lib/typography/Link";

const Contacts = () => {
  const data = useMemo(
    () => [
      {
        label: "Email",
        links: "mailto:hi@ashes.diamond",
        value: "hi@ashes.diamond",
      },
      { label: "Phone", links: "tel:+18001337228", value: "+1 800 1337 228" },
      {
        label: "Miami, FL",
        links: "tel:+18001337 228",
        value: "+1 800 1337 228",
      },
    ],
    []
  );

  const renderItem = useCallback(
    (item: { label: string; value: string; links: string }, index: number) => (
      <Link href={item.links} className={style.col} key={index}>
        <a className={style.label}>{item.label}</a>
        <a className={style.value}>{item.value}</a>
      </Link>
    ),
    []
  );

  return (
    <div className={style.contacts}>
      <div className="container">
        <div className={style.row}>{data.map(renderItem)}</div>
      </div>
    </div>
  );
};

export default Contacts;
