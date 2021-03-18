import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => props.theme.paddingS};
  border: 1px solid;
  border-radius: 5px;
  transition: 100ms all ease-out;
  margin-bottom: ${(props) => props.theme.marginXL};

  ${(props) =>
    props.bgColor === "#181818"
      ? css`
          background-color: white;
          color: #181818;
          :hover {
            background-color: #181818;
            color: white;
          }
        `
      : css`
          background-color: #181818;
          color: #f1efed;

          :hover {
            color: #181818;
            background-color: #f1efed;
          }
        `}

  @media ${(props) => props.theme.tabletSmall} {
    width: 150px;
  }
`;

function ButtonTheme({ children, ...rest }) {
  const colorMode = useContext(ThemeContext);

  return (
    <Button bgColor={colorMode.mode.bgColor} {...rest}>
      {children}
    </Button>
  );
}

export default ButtonTheme;
