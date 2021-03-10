import React from "react";
import styled from "styled-components";

const SkillPiece = styled.li`
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  text-align: center;
  margin: ${(props) => props.theme.marginS};
`;

function Skill({ skill }) {
  return <SkillPiece>{skill}</SkillPiece>;
}

export default Skill;
