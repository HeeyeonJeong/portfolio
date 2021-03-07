import React from "react";
import * as FiIcons from "react-icons/fi";
import styled from "styled-components";

const Icon = styled.button`
  position: relative;
  top: 2px;
  font-size: ${(props) => props.theme.fontL};
`;

function MobileNavMenu() {
  return (
    <Icon>
      <FiIcons.FiMenu />
    </Icon>
  );
}

export default MobileNavMenu;
