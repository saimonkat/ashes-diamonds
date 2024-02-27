import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";

//style
import style from "./header.module.scss";

//img
import logo from "../../shared/icons/header/logo.svg";
import phone from "../../shared/icons/header/phone.svg";
//components
import Panel from "@features/header/panel/Panel";
import Hamburger from "@widgets/header/hamburger/Hamburger";
import MobileButton from "@features/header/mobile-button/MobileButton";
import ImageWrapper from "@components/common/ImageWrapper";
import { isFunction } from "lodash";
import {
  HOME_PAGE,
  LOVEDONES_PAGE,
  PETS_PAGE,
  STARTED_PAGE,
} from "@entities/consts/paths";

const Header: React.FC<{
  setHeaderHeight?: Dispatch<SetStateAction<number>>;
  adaptiveBg?: boolean;
}> = ({ setHeaderHeight, adaptiveBg }) => {
  const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
  const [bodyClass, setBodyClass] = useState<string>("");
  const ref = useRef<HTMLHeadElement>(null);

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  useEffect(() => {
    if (isPanelOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPanelOpen]);

  useEffect(() => {
    const element = ref.current;
    if (element && element.clientHeight) {
      const { clientHeight } = element;
      if (isFunction(setHeaderHeight)) {
        setHeaderHeight(clientHeight);
      }
    }
  }, []);

  const closePanel = () => {
    setPanelOpen(false);
  };

  return (
    <header className={style.header} ref={ref}>
      <div
        style={{ height: adaptiveBg ? "100vh" : "859px" }}
        className={style.background}
      ></div>
      <div className="container">
        <div className={style.wrapper}>
          <ul className={style.list}>
            <li>
              <Hamburger onClick={togglePanel} isOpen={isPanelOpen} />
            </li>
            <li className={style.stick}></li>
            <li>
              <Link href={LOVEDONES_PAGE}>Loved ones</Link>
            </li>
            <li>
              <Link href={PETS_PAGE}>Pets</Link>
            </li>
          </ul>
          <div className={style.icon}>
            <Link href={HOME_PAGE}>
              <ImageWrapper src={logo} alt="logo" priority={true} />
            </Link>
          </div>
          <ul className={style.list}>
            <li>
              <a href="tel:18008883535">
                <ImageWrapper
                  src={phone}
                  alt="phone"
                  wrapperClassName={style.itemIcon}
                />
                <span>+1 800 888 35 35</span>
              </a>
            </li>
            <li className={style.stick}></li>
            <li>
              <Link href={STARTED_PAGE}>Get started</Link>
            </li>
          </ul>
        </div>
        <div className="started-mobile">
        <MobileButton />
        </div>
      </div>
      <Panel isOpen={isPanelOpen} onClick={closePanel} />
    </header>
  );
};

export default Header;
