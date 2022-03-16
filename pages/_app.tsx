import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { WindowScroll } from "../context/index";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 5) {
        setWindowScroll(false);
      } else {
        setWindowScroll(true);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const [windowScroll, setWindowScroll] = useState(false);
  return (
    <WindowScroll.Provider value={windowScroll}>
      <Component {...pageProps} />
    </WindowScroll.Provider>
  );
}

export default MyApp;
