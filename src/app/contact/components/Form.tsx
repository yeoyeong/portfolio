import React from "react";
import useInput from "src/hooks/useInput";
import styled from "styled-components";
import { sendMail } from "../utils/sendMail";

interface Props {
  fromName: {
    value: string;
    byte: number;
    onChange: (event: any) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    cutByLen: (e: any, limit: number) => void;
  };
  email: {
    value: string;
    byte: number;
    onChange: (event: any) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    cutByLen: (e: any, limit: number) => void;
  };
  subStance: {
    value: string;
    byte: number;
    onChange: (event: any) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    cutByLen: (e: any, limit: number) => void;
  };
}
const FormContact = ({ fromName, email, subStance }: Props) => {
  const formData = {
    email: email.value,
    sub_stance: subStance.value,
    from_name: fromName.value,
  };
  const valueReset = () => {
    fromName.setValue("");
    email.setValue("");
    subStance.setValue("");
  };
  return (
    <FormContainer
      onSubmit={async (e) => {
        try {
          sendMail(e, formData, valueReset);
        } catch (e: any) {
          if (e === "빈칸을 입력해주세요") {
            return alert("빈칸을 입력해주세요");
          }
          alert("메일 발송이 실패하였습니다.");
        }
      }}
    >
      <input
        type="text"
        placeholder="이름/회사명을 입력해주세요"
        value={fromName.value}
        onChange={fromName.onChange}
      />
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email.value}
        onChange={email.onChange}
      />
      <textarea
        id="substance"
        placeholder="문의내용을 입력해주세요"
        value={subStance.value}
        onChange={subStance.onChange}
      ></textarea>
      <button type="submit">Send</button>
    </FormContainer>
  );
};

export default FormContact;

const FormContainer = styled.form`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  gap: 10px;
  input {
    width: 49%;
    height: 48px;
    border: 1px solid var(--neutral-gray-100);
    border-radius: 5px;
    padding-left: 10px;
  }
  textarea {
    height: 300px;
    width: 100%;
    border: 1px solid var(--neutral-gray-100);
    border-radius: 5px;
    padding: 10px;
    resize: none;
  }
  button {
    width: 200px;
    height: 48px;
    border: none;
    border-radius: 5px;
    background-color: #4023de;
    font-weight: 700;
    color: var(--white);
    cursor: pointer;
  }
`;
