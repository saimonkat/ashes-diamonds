import { RootStoreProvider } from "@mobx";

import { AppProps } from "next/app";

import "antd/dist/antd.css";
import "@app/index.scss";
import { useEffect } from "react";
import store from "@features/animations/store";

// import AppHead from "@components/common/AppHead";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const handleScroll = () => {
      store.setScrollPosition(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <RootStoreProvider>
      {/*<AppHead />*/}
      <Component {...pageProps} />
    </RootStoreProvider>
  );
}

export default MyApp;
