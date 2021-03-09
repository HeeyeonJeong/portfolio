import React from "react";
import styled from "styled-components";
import Skills from "./Skills";

const AboutBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.paddingXXL} 0;
  margin-bottom: ${(props) => props.theme.marginL};
`;

const Title = styled.h2`
  z-index: 5;
  font-weight: 700;
  font-size: 40px;

  @media ${(props) => props.theme.tabletMedium} {
    position: absolute;
    top: 25px;
    left: 80px;
    font-size: 130px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.tabletMedium} {
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;

const Info = styled.div`
  min-height: 330px;
  padding: 0 ${(props) => props.theme.paddingL};
  line-height: 2em;
  font-size: ${(props) => props.theme.fontM};

  @media ${(props) => props.theme.tabletMedium} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
  }
`;

const Image = styled.div`
  margin: ${(props) => props.theme.marginL} 0;

  img {
    display: block;
    width: 250px;
    border-radius: 50%;

    @media ${(props) => props.theme.tabletMedium} {
      margin-right: ${(props) => props.theme.marginL};
      border-radius: 5px;
      width: 500px;
    }
  }
`;

function About() {
  return (
    <section id="about">
      <AboutBox>
        <Title>About.</Title>
        <InfoBox>
          <Image>
            <img src="/images/photo2.jpg" alt="heeyeon" />
          </Image>
          <Info>
            <p>
              안녕하세요. 정희연입니다. <br />
            </p>
          </Info>
        </InfoBox>
      </AboutBox>
      <Skills />
    </section>
  );
}

export default About;
