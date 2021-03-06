import React from "react";
import styled from "styled-components";
import * as RiIcons from "react-icons/ri";

const NavBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-right: ${(props) => props.theme.marginM};
`;

const ListBox = styled.ul``;

const List = styled.li`
  text-align: right;
  & + & {
    margin-top: ${(props) => props.theme.marginM};
  }
`;

const ListLink = styled.a`
  font-size: ${(props) => props.theme.fontM};

  :hover {
    span {
      opacity: 1;
    }
  }

  span {
    transition: opacity 0.3s;
    opacity: 0;
    position: relative;
    z-index: 10;
    font-size: ${(props) => props.theme.fontL};
    margin-right: ${(props) => props.theme.marginM};
  }
`;

function DeskNavMenu() {
  return (
    <NavBox>
      <ListBox>
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
      </ListBox>
    </NavBox>
  );
}

export default DeskNavMenu;
