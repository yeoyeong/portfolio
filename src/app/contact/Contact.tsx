import React, { useRef, useState } from "react";
import useInput from "src/hooks/useInput";
import { SendTamplateType } from "src/model/contact";
import AppLayout from "src/ui/common/layout/AppLayout";
import styled from "styled-components";
import FormContact from "./components/Form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const contentsRef = useRef(null);
  const navigate = useNavigate();

  const fromName = useInput("");
  const email = useInput("");
  const subStance = useInput("");
  const [lastExecutedTime, setLastExecutedTime] = useState(Date.now());

  const onWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (Date.now() - lastExecutedTime < 1000) return;
    if (e.deltaY < 0 && (fromName.value || email.value || subStance.value)) {
      console.log("w");
      const isConfirmed = window.confirm(
        "작성 중인 내용은 저장되지 않습니다.\n다른 페이지로 이동하시겠습니까?"
      );
      if (!isConfirmed) {
        return;
      }
    }
    if (e.deltaY >= 0) {
      // downScroll();
    } else {
      return navigate("/portfolio");
    }
    setLastExecutedTime(Date.now());
  };

  return (
    <AppLayout>
      <Container ref={contentsRef} onWheel={onWheel}>
        <Title>Contact</Title>
        <FormContact fromName={fromName} email={email} subStance={subStance} />
      </Container>
    </AppLayout>
  );
};

export default Contact;
const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h4`
  font-size: 28px;
  font-weight: 700;
  width: 500px;
  color: #4023de;
  text-align: left;
  margin-bottom: 26px;
  /* margin: 120px auto 20px auto; */
`;
