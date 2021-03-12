import React from "react";
import styled, { keyframes } from "styled-components";
import * as IoIcons from "react-icons/io";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const ButtonBox = styled.button`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontXL};
  position: fixed;
  right: 0;
  bottom: 5%;
  margin: 0 ${(props) => props.theme.marginL};
  display: ${(props) => (props.isVisible === true ? "block" : "none")};
  animation: ${fadeIn} 0.8s;
`;

function AutoScrollUp({ isVisible }) {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ButtonBox isVisible={isVisible} onClick={handleTop}>
      <IoIcons.IoIosArrowDropupCircle />
    </ButtonBox>
  );
}

export default AutoScrollUp;
