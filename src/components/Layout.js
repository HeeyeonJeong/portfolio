import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./section/Home";
import DeskNavMenu from "./DeskNavMenu";
import About from "./section/About";

function Layout() {
  const [isVisible, setVisible] = useState(true);

  const isTabletUp = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const handleScroll = (e) => {
    const scrollMode = e.deltaY;
    if (scrollMode > 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      <Header />
      {isTabletUp && <DeskNavMenu isVisible={isVisible} />}
      <main onWheel={handleScroll}>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
