import React from "react";
import styled from "styled-components";
import Skill from "../Skill";

const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.paddingXXL} 0;
`;

const Title = styled.h2`
  font-weight: 300;
  z-index: 5;
  font-size: 40px;
  color: ${(props) => props.theme.pointColor};
  margin-bottom: ${(props) => props.theme.marginL};

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 130px;
  }
`;

function Skills() {
  return (
    <SkillsBox>
      <Title>Skills</Title>
      <Skill />
    </SkillsBox>
  );
}

export default Skills;
