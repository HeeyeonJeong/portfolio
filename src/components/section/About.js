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
  text-align: center;
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
            안녕하세요. 정희연입니다. 수정 전 코드가 적용된 경우 스크롤이 발생할
            때마다 태그의 클래스네임이 계속 바뀌는 현상이 있었는데, 수정 후
            코드가 적용되었을 때는 태그의 style을 직접 부여하게되어 스크롤시
            tranform 값만 변동되어 클래스네임은 변하지 않았다.안녕하세요.
            정희연입니다. 수정 전 코드가 적용된 경우 스크롤이 발생할 때마다
            태그의 클래스네임이 계속 바뀌는 현상이 있었는데, 수정 후
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
