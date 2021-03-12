import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useInput } from "../hooks/useInput";
import { send } from "emailjs-com";
import { ThemeContext } from "../context/ThemeContext";

export const useId = process.env.REACT_APP_USER_ID;
export const templateId = process.env.REACT_APP_TEMPLATE_ID;
export const serviceID = process.env.REACT_APP_SERVICE_ID;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid;
  padding: ${(props) => props.theme.paddingL};
  border-radius: 5px;

  label {
    margin-bottom: ${(props) => props.theme.marginS};
  }

  input {
    border: none;
    height: 40px;
    padding: ${(props) => props.theme.paddingS};
    margin-bottom: ${(props) => props.theme.marginL};
    border-radius: 5px;
  }

  @media ${(props) => props.theme.tabletSmall} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.deskTop} {
    width: 40%;
    margin: 0;
  }
`;

const MessageInput = styled.textarea`
  border: none;
  resize: vertical;
  padding: ${(props) => props.theme.paddingS};
  margin-bottom: ${(props) => props.theme.marginL};
  border-radius: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 5px;
  padding: ${(props) => props.theme.paddingS};
  transition: 100ms all ease-out;

  ${(props) =>
    props.bgColor === "#181818"
      ? css`
          :hover {
            color: #181818;
            background-color: white;
          }
        `
      : css`
          :hover {
            background-color: black;
            color: #f1efed;
          }
        `}

  @media ${(props) => props.theme.tabletSmall} {
    width: 50%;
    margin: 0 auto;
  }
`;

function MessageForm() {
  const colorMode = useContext(ThemeContext);

  const [{ name, email, message }, onChange, reset] = useInput({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(serviceID, templateId, { name, email, message }, useId)
      .then(() => {
        alert("메일이 정상적으로 전송됐습니다.🚀");
      })
      .catch(() => {
        alert("메일 전송을 실패했습니다.😓");
      });

    reset();
  };

  return (
    <FormBox onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        required
        placeholder="성함을 입력해주세요."
      />
      <label htmlFor="email">Mail</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        required
        placeholder="메일 주소를 입력해주세요."
      />
      <label htmlFor="message">Message</label>
      <MessageInput
        name="message"
        rows="10"
        value={message}
        onChange={onChange}
        required
        placeholder="내용을 입력해주세요."
      ></MessageInput>
      <Button type="submit" bgColor={colorMode.mode.bgColor}>
        메일 보내기
      </Button>
    </FormBox>
  );
}

export default React.memo(MessageForm);
