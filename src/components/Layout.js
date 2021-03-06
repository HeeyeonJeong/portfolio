import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./section/Home";
import DeskNavMenu from "./DeskNavMenu";

function Layout() {
  const isTabletUp = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return (
    <>
      <Header />
      {isTabletUp && <DeskNavMenu />}
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
