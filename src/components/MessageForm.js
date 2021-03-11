import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { send } from "emailjs-com";

export const useId = process.env.REACT_APP_USER_ID;
export const templateId = process.env.REACT_APP_TEMPLATE_ID;
export const serviceID = process.env.REACT_APP_SERVICE_ID;

const Form = styled.form``;

function MessageForm() {
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
    <Form onSubmit={onSubmit}>
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
      <textarea
        name="message"
        rows="5"
        value={message}
        onChange={onChange}
        required
        placeholder="내용을 입력해주세요."
      ></textarea>
      <button type="submit">메일 보내기</button>
    </Form>
  );
}

export default MessageForm;
