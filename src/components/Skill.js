import React from "react";
import styled from "styled-components";
import * as DiIcon from "react-icons/di";
import * as SiIcon from "react-icons/si";

const SkillPieceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.tabletMedium} {
    height: 30vh;
  }

  @media ${(props) => props.theme.deskTop} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const SkillPiece = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.marginL};

  span {
    font-size: 15px;
  }

  @media ${(props) => props.theme.deskTop} {
    span {
      font-size: ${(props) => props.theme.fontM};
    }
    & + & {
      margin-left: 100px;
    }
  }
`;

const Icon = styled.div`
  font-size: 70px;

  @media ${(props) => props.theme.tabletMedium} {
    font-size: 90px;
  }
`;

function Skill() {
  return (
    <SkillPieceBox>
      <SkillPiece>
        <Icon>
          <DiIcon.DiJavascript1 style={{ color: "#CFB430" }} />
        </Icon>
        <span>Javascript</span>
      </SkillPiece>
      <SkillPiece>
        <Icon>
          <DiIcon.DiReact style={{ color: "#61DAFB" }} />
        </Icon>
        <span>React</span>
      </SkillPiece>
      <SkillPiece>
        <Icon>
          <DiIcon.DiHtml5 style={{ color: "#D03813" }} />
        </Icon>
        <span>HTML</span>
      </SkillPiece>
      <SkillPiece>
        <Icon>
          <DiIcon.DiCss3 style={{ color: "#146EB1" }} />
        </Icon>
        <span>CSS</span>
      </SkillPiece>
      <SkillPiece>
        <Icon>
          <SiIcon.SiTypescript style={{ color: "#0075C4" }} />
        </Icon>
        <span>Typescript</span>
      </SkillPiece>
    </SkillPieceBox>
  );
}

export default Skill;
