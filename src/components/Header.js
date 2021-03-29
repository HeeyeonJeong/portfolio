import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import MobileNavMenu from "./MobileNavMenu";
import ToggleSwitch from "./ToggleSwitch";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media ${(props) => props.theme.tabletMedium} {
    position: absolute;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontXL};
  position: relative;
  top: 2px;

  @media ${(props) => props.theme.tabletMedium} {
    left: -30px;
  }
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
      <SectionTitle>
        {isTabletDown ? <MobileNavMenu /> : <ToggleSwitch />}
      </SectionTitle>
      <Title>
        <a href="/">HY.</a>
      </Title>
      {isTabletDown || (
        <ResumeLink
          href="https://drive.google.com/file/d/10EVc71c_G5gDX0wR0Uez8bbbCCbMEg4e/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </ResumeLink>
      )}
    </HeaderBox>
  );
}

export default Header;
