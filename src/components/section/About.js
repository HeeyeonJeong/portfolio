import React from "react";
import styled from "styled-components";
import Skill from "../Skill";

const AboutBox = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${(props) => props.theme.marginL} 0;
  padding: ${(props) => props.theme.paddingL} 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fontXXL};
  margin-bottom: ${(props) => props.theme.marginL};

  @media ${(props) => props.theme.tabletSmall} {
    margin-bottom: ${(props) => props.theme.marginXXL};
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.deskTop} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Image = styled.div`
  img {
    display: block;
    border-radius: 50%;
    width: 200px;
  }

  @media ${(props) => props.theme.tabletSmall} {
    img {
      width: 300px;
    }
  }

  @media ${(props) => props.theme.deskTop} {
    margin-right: ${(props) => props.theme.marginL};
  }
`;

const Info = styled.div`
  @media ${(props) => props.theme.tabletSmall} {
    width: 80%;
  }

  @media ${(props) => props.theme.deskTop} {
    width: 50%;
  }
`;

const Desc = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  padding-bottom: ${(props) => props.theme.paddingL};
  margin: ${(props) => props.theme.paddingL};
  border-bottom: 1px solid;
  line-height: 2;

  @media ${(props) => props.theme.tabletSmall} {
    padding-bottom: ${(props) => props.theme.paddingXXL};
    margin: ${(props) => props.theme.marginXXL};
  }
`;

const SkillBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 ${(props) => props.theme.paddingL};
`;

function About() {
  return (
    <AboutBox id="about">
      <Title>About</Title>
      <InfoBox>
        <Image>
          <img src="/images/photo2.jpg" alt="heeyeon" />
        </Image>
        <Info>
          <Desc>
            <span> 안녕하세요, 프론트엔드 개발자 정희연입니다.</span>
            <br />
            <br />
            <span>
              ✅ 배움을 즐기고 새로운 지식을 얻는 것을 좋아하는 열정파입니다.
              <br />✅ 스스로의 성장을 위한 의지와 집념이 강합니다.
              <br />✅ 개발시 새롭게 얻은 지식이나 문제 해결 방식을 블로그에
              기록하며 공부하고 있습니다.
            </span>
          </Desc>
          <SkillBox>
            <Skill skill={"Javascript"} />
            <Skill skill={"React"} />
            <Skill skill={"HTML"} />
            <Skill skill={"CSS"} />
            <Skill skill={"TypeScript"} />
          </SkillBox>
        </Info>
      </InfoBox>
    </AboutBox>
  );
}

export default React.memo(About);
