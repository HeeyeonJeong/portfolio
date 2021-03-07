import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MobileNavMenu from "./MobileNavMenu";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontXL};
  position: relative;
  top: 2px;
`;

const ResumeLink = styled.a`
  font-size: ${(props) => props.theme.fontL};
`;

const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontL};
`;

function Header() {
  const isTabletDown = useMediaQuery({
    query: "(max-width:1023px)",
  });

  return (
    <HeaderBox>
      <SectionTitle>{isTabletDown ? <MobileNavMenu /> : "About"}</SectionTitle>
      <Title>
        <a href="/">HY.</a>
      </Title>
      {isTabletDown || <ResumeLink href="#">Resume</ResumeLink>}
    </HeaderBox>
  );
}

export default Header;
