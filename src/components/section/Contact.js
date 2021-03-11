import React from "react";
import styled from "styled-components";
import MessageForm from "../MessageForm";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${(props) => props.theme.marginL} 0;
  padding: ${(props) => props.theme.paddingL} 0;
`;

const InfoBox = styled.ul``;

function Contact() {
  return (
    <Section id="contact">
      <InfoBox></InfoBox>
      <MessageForm />
    </Section>
  );
}

export default Contact;
