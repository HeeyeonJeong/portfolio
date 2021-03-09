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

const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  transform: translatex(
    ${(props) => props.offsetY > 50 && props.offsetY * 1.5}px
  );
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    position: relative;
    left: -7%;
    font-size: 200px;
  }
`;

const TitleName = styled.h2`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.pointColor};
  transform: translatex(
    -${(props) => props.offsetY > 130 && props.offsetY * 1.5}px
  );
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 200px;
    position: relative;
    right: -10%;
  }
`;

const DescTitle = styled.p`
  font-weight: 300;
  font-size: 30px;
  color: ${(props) => props.theme.pointColor};
  margin-bottom: 30px;

  transform: translatex(
    ${(props) => props.offsetY > 230 && props.offsetY * 1}px
  );
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 150px;
    position: relative;
    left: -18%;
  }
`;

const Desc = styled.p`
  font-weight: 300;
  font-size: 30px;

  transform: translatex(
    -${(props) => props.offsetY > 310 && props.offsetY * 1}px
  );
  transition: all 500ms ease-out;

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 150px;
    position: relative;
    right: -15%;
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
