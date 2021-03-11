import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import Skill from "./Skill";

const ProjectBox = styled.article`
  margin-bottom: ${(props) => props.theme.marginXXL};
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.deskTop} {
    flex-direction: row;
  }
`;

const Image = styled.div`
  margin-bottom: ${(props) => props.theme.marginL};

  img {
    margin: 0 auto;
    display: block;
    width: 300px;
    border-radius: 5px;
  }

  @media ${(props) => props.theme.tabletMedium} {
    img {
      width: 400px;
    }
  }

  @media ${(props) => props.theme.deskTop} {
    margin: 0 ${(props) => props.theme.marginXXL} 0 0;

    img {
      width: 500px;
    }
  }
`;

const ProjectInfo = styled.div`
  width: 300px;

  @media ${(props) => props.theme.tabletMedium} {
    width: 400px;
  }

  @media ${(props) => props.theme.deskTop} {
    width: 500px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => props.theme.paddingS} 0;
  border-bottom: 1px solid;
`;

const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontM};
  margin: ${(props) => props.theme.marginS};
`;

const LinkBox = styled.ul`
  li {
    display: inline-block;
    font-size: ${(props) => props.theme.fontXL};
    margin: ${(props) => props.theme.marginS};

    a {
      display: inline-block;
      height: 40px;
    }
  }
`;

const StackBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.paddingS} 0;
`;

const FolderBtn = styled.button`
  padding: ${(props) => props.theme.paddingS};
  font-size: ${(props) => props.theme.fontL};
`;

const DescBox = styled.div`
  padding: ${(props) => props.theme.paddingS};
  @media ${(props) => props.theme.deskTop} {
    opacity: 1;
  }
`;

function Project({ title, demo, stacks, desc }) {
  return (
    <ProjectBox>
      <Image>
        <img src={`/images/${title}.jpg`} alt={title} />
      </Image>
      <ProjectInfo>
        <div>
          <Top>
            <ProjectTitle>{title}</ProjectTitle>
            <StackBox>
              {stacks &&
                stacks.map((stack) => <Skill key={stack} skill={stack} />)}
            </StackBox>
          </Top>
          <Bottom>
            <LinkBox>
              <li>
                <a
                  href={`https://github.com/HeeyeonJeong/${title}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaIcons.FaGithubSquare />
                </a>
              </li>
              <li>
                <a
                  href={
                    demo ? demo : `https://heeyeonjeong.github.io/${title}/`
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BiIcons.BiLinkExternal />
                </a>
              </li>
            </LinkBox>
            <FolderBtn type="button">
              <HiIcons.HiChevronDown />
            </FolderBtn>
          </Bottom>
        </div>
        <DescBox>{desc}</DescBox>
      </ProjectInfo>
    </ProjectBox>
  );
}

export default React.memo(Project);
