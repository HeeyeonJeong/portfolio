import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import MessageForm from "../MessageForm";

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

const ContactItem = styled.div`
  width: 100%;

  @media ${(props) => props.theme.deskTop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const InfoBox = styled.ul`
  text-align: center;
  margin-bottom: ${(props) => props.theme.marginL};

  @media ${(props) => props.theme.deskTop} {
    width: 40%;
  }
`;

const Info = styled.li`
  margin-bottom: ${(props) => props.theme.marginM};

  p {
    font-weight: 700;
    margin-bottom: ${(props) => props.theme.marginS};
  }

  a {
    font-family: "Noto Sans KR", sans-serif;
    :hover {
      text-decoration: underline;
    }
  }

  @media ${(props) => props.theme.tabletSmall} {
    margin-bottom: ${(props) => props.theme.marginXXL};
    font-size: ${(props) => props.theme.fontM};
  }
`;

function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <ContactItem>
        <InfoBox>
          <Info>
            <p>
              <FiIcons.FiMail /> Mail
            </p>
            <a href="mailto:junghy14971@gmail.com">junghy14971@gmail.com</a>
          </Info>
          <Info>
            <p>
              <FaIcons.FaGithubSquare /> GitHub
            </p>
            <a
              href="https://github.com/HeeyeonJeong"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/HeeyeonJeong
            </a>
          </Info>
          <Info>
            <p>
              <FaIcons.FaBlogger /> Blog
            </p>
            <a
              href="https://heeyeonjeong.tistory.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://heeyeonjeong.tistory.com
            </a>
          </Info>
        </InfoBox>
        <MessageForm />
      </ContactItem>
    </Section>
  );
}

export default Contact;
