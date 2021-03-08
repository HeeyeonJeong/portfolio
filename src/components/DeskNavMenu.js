import React from "react";
import styled, { keyframes } from "styled-components";
import * as RiIcons from "react-icons/ri";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const NavBox = styled.div`
  position: fixed;
  display: ${(props) => (props.isVisible === true ? "block" : "none")};
  animation: ${fadeIn} 0.8s;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-right: ${(props) => props.theme.marginM};
`;

const List = styled.li`
  text-align: right;

  & + & {
    margin-top: ${(props) => props.theme.marginL};
  }
`;

const ListLink = styled.a`
  display: inline-block;
  min-height: 30px;
  font-size: ${(props) => props.theme.fontM};
  margin: 0 ${(props) => props.theme.marginM};

  :hover span {
    display: inline-block;
    animation: ${fadeIn} 0.6s;
  }

  span {
    display: none;
    z-index: 10;
    font-size: 23px;
    margin-right: ${(props) => props.theme.marginM};
  }
`;

function DeskNavMenu({ isVisible }) {
  return (
    <NavBox isVisible={isVisible}>
      <ul>
        <List>
          <ListLink href="#home" aria-label="home">
            <span>Home</span>
            <RiIcons.RiCheckboxBlankCircleFill />
          </ListLink>
        </List>
        <List>
          <ListLink href="#about" aria-label="about">
            <span>About</span>
            <RiIcons.RiCheckboxBlankCircleFill />
          </ListLink>
        </List>
        <List>
          <ListLink href="#projects" aria-label="projects">
            <span>Projects</span>
            <RiIcons.RiCheckboxBlankCircleFill />
          </ListLink>
        </List>
        <List>
          <ListLink href="#contact" aria-label="contact">
            <span>Contact</span>
            <RiIcons.RiCheckboxBlankCircleFill />
          </ListLink>
        </List>
      </ul>
    </NavBox>
  );
}

export default DeskNavMenu;
