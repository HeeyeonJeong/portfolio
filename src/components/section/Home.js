import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${(props) => props.theme.tabletMedium} {
    height: 180vh;
  }
`;

const Title = styled.h2.attrs((props) => ({
  style: {
    transform: `translateX(-${props.offsetY > 50 ? props.offsetY * 1.5 : 0}px)`,
  },
}))`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    position: relative;
    left: -7%;
    font-size: 200px;
  }
`;

const TitleName = styled(Title).attrs((props) => ({
  style: {
    transform: `translateX(${props.offsetY > 180 ? props.offsetY * 1.5 : 0}px)`,
  },
}))`
  @media ${(props) => props.theme.tabletMedium} {
    left: 9%;
  }
`;

const Desc = styled.p.attrs((props) => ({
  style: {
    transform: `translateX(${props.offsetY > 420 ? props.offsetY * 1 : 0}px)`,
  },
}))`
  font-weight: 300;
  font-size: 30px;
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 150px;
    position: relative;
    right: -15%;
  }
`;

const DescTitle = styled(Desc).attrs((props) => ({
  style: {
    transform: `translateX(-${props.offsetY > 300 ? props.offsetY * 1 : 0}px)`,
  },
}))`
  margin-bottom: 30px;

  @media ${(props) => props.theme.tabletMedium} {
    right: 18%;
  }
`;

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  return (
    <Section id="home">
      <Title offsetY={offsetY}>Hello, I'm</Title>
      <TitleName offsetY={offsetY}>HeeYeon</TitleName>
      <DescTitle offsetY={offsetY}>Frontend</DescTitle>
      <Desc offsetY={offsetY}>Developer</Desc>
    </Section>
  );
}

export default Home;
