import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import Project from "../Project";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${(props) => props.theme.marginL} 0;
  padding: ${(props) => props.theme.paddingL};
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${(props) => props.theme.fontXL};
  margin-bottom: ${(props) => props.theme.marginL};

  @media ${(props) => props.theme.tabletSmall} {
    margin-bottom: ${(props) => props.theme.marginXXL};
  }
`;

const FoldButton = styled.button`
  cursor: pointer;
  padding: ${(props) => props.theme.paddingS};
  border: 1px solid;
  border-radius: 5px;
  transition: 100ms all ease-out;
  margin-bottom: ${(props) => props.theme.marginXL};

  ${(props) =>
    props.bgColor === "#181818"
      ? css`
          background-color: #f1efed;
          color: #181818;
          :hover {
            background-color: #181818;
            color: #f1efed;
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

const ProjectsTotal = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Projects() {
  const colorMode = useContext(ThemeContext);

  const [total, setTotal] = useState(true);

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <FoldButton
        onClick={() => {
          setTotal(!total);
        }}
        bgColor={colorMode.mode.bgColor}
      >
        {total ? "간단히 보기" : "자세히 보기"}
      </FoldButton>
      <ProjectsTotal>
        <Project
          total={total}
          title={"Movie"}
          demo={"https://movie4e8f82.netlify.app/"}
          stacks={["React", "Redux"]}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          eveniet repellendus explicabo fugiat doloribus mollitia quos magni
          molestias quam aliquam voluptatibus recusandae aperiam accusantium,
          modi, minima voluptatum aut rerum temporibus!`}
        />
        <Project
          total={total}
          title={"ecommerce-website"}
          stacks={["JavaScript", "HTML", "CSS"]}
          desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          eveniet repellendus explicabo fugiat doloribus mollitia quos magni
          molestias quam aliquam voluptatibus recusandae aperiam accusantium,
          modi, minima voluptatum aut rerum temporibus!`}
        />
      </ProjectsTotal>
    </Section>
  );
}

export default React.memo(Projects);
