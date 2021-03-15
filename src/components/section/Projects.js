import React, { useState } from "react";
import styled from "styled-components";
import ButtonTheme from "../ButtonTheme";
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

const ProjectsTotal = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Projects() {
  const [total, setTotal] = useState(true);

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ButtonTheme
        onClick={() => {
          setTotal(!total);
        }}
      >
        {total ? "간단히 보기" : "자세히 보기"}
      </ButtonTheme>
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
