import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./section/Home";
import DeskNavMenu from "./DeskNavMenu";
import About from "./section/About";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import AutoScrollUp from "./AutoScrollUp";

function Layout() {
  const [isVisible, setVisible] = useState(true);
  const [isScrollUp, setIsScrollUp] = useState(false);

  const isTabletUp = useMediaQuery({
    query: "(min-width:1024px)",
  });

  const handleScroll = (e) => {
    const scrollMode = e.deltaY;
    if (scrollMode > 0) {
      setVisible(false);
      setIsScrollUp(false);
    } else {
      setVisible(true);
      setIsScrollUp(true);
    }
  };

  return (
    <>
      <Header />
      {isTabletUp && <DeskNavMenu isVisible={isVisible} />}
      <AutoScrollUp isScrollUp={isScrollUp} />
      <main onWheel={handleScroll}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
