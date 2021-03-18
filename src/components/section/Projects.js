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
          desc={`tmdb API를 활용하고 redux-thunk로 상태관리하여 제작한 영화 추천 사이트입니다. 첫 페이지에 한주에 인기있는 영화 TOP 10 데이터를 받아와서 랜덤으로 보여줍니다. 더보기 페이지는 유저가 원하는 장르를 배열로 만들어 데이터를 받아옵니다. 영화 자세히 보기 시, 현재 페이지의 URL params를 얻어 해당 영화정보와 비슷한 영화를 찾아주는 API에서 데이터를 가져오게 됩니다. 또한, LocalStorage를 사용하여 유저가 선택한 영화를 저장할 수 있습니다`}
        />
        <Project
          total={total}
          title={"ecommerce-website"}
          stacks={["JavaScript", "HTML", "CSS"]}
          desc={`ecommerce 웹사이트 기능을 구현한 프로젝트입니다. 유저가 선택한 신발을 위시리스트에 저장해둘 수 있으며, 장바구니 페이지에서는 수량을 체크하고 총 가격을 산출할 수 있습니다.`}
        />
        <Project
          total={total}
          title={"reading-record-project"}
          demo={"https://reading-record.netlify.app"}
          stacks={["TypeScript", "React", "Redux"]}
          desc={`독서 기록을 할 수 있는 웹어플리케이션으로 책 목록 보기, 추가, 수정, 삭제 기능이 가능합니다. 타입스크립트를 사용하여 개발 시 실수를 줄이고 견고한 웹어플리케이션을 제작할 수 있는 경험을 하여 타입스크립트의 장점을 확실히 알게 된 프로젝트였습니다.`}
        />
        <Project
          total={total}
          title={"comment-board"}
          demo={"https://comments-board.herokuapp.com"}
          stacks={["React", "Redux"]}
          desc={`댓글을 기록할 수 있는 게시판입니다. JSON-server와 redux-thunk를 사용하여 댓글 등록, 수정, 삭제 기능이 가능하고 pagination을 구현하여 각 페이지 클릭시 해당 댓글을 불러옵니다.`}
        />
      </ProjectsTotal>
    </Section>
  );
}

export default React.memo(Projects);
