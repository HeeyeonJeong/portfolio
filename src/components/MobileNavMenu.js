import React, { useContext, useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";
import styled, { css } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Icon = styled.button`
  position: relative;
  top: 2px;
  font-size: ${(props) => props.theme.fontL};
`;

const SlideBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${(props) => props.mode};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.open &&
    css`
      animation: fadeIn 0.4s;
    `}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CloseIcon = styled.button`
  font-size: ${(props) => props.theme.fontL};
  padding: ${(props) => props.theme.paddingS};
  margin-bottom: ${(props) => props.theme.marginL};
`;

const List = styled.li`
  padding: ${(props) => props.theme.paddingS};

  & + & {
    margin-top: ${(props) => props.theme.marginL};
  }
`;

function MobileNavMenu() {
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const openClick = () => setOpen(true);
  const closeClick = () => setOpen(false);

  return (
    <>
      <Icon open={open} onClick={openClick}>
        <FiIcons.FiMenu />
      </Icon>

      {open && (
        <SlideBox open={open} mode={mode.bgColor}>
          <CloseIcon open={open} onClick={closeClick}>
            <CgIcons.CgClose />
          </CloseIcon>
          <div>
            <ul>
              <List>
                <a href="#home" onClick={closeClick}>
                  Home
                </a>
              </List>
              <List>
                <a href="#about" onClick={closeClick}>
                  About
                </a>
              </List>
              <List>
                <a href="#projects" onClick={closeClick}>
                  Projects
                </a>
              </List>
              <List>
                <a href="#contact" onClick={closeClick}>
                  Contact
                </a>
              </List>
            </ul>
          </div>
        </SlideBox>
      )}
    </>
  );
}

export default MobileNavMenu;
