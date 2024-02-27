import React from "react";

import style from "./hamburger.module.scss";

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  const hamburgerClassName = isOpen
    ? style.hamburger + " " + style.open
    : style.hamburger;

  return (
    <div className={hamburgerClassName} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
