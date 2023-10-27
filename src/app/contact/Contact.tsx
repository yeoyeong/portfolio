import React from "react";
import useInput from "src/hooks/useInput";
import { SendTamplateType } from "src/model/contact";
import AppLayout from "src/ui/common/layout/AppLayout";
import styled from "styled-components";
import FormContact from "./components/Form";

const Contact = () => {
  return (
    <AppLayout>
      <Title>Contact</Title>
      <FormContact />
    </AppLayout>
  );
};

export default Contact;
const Title = styled.h4`
  font-size: 30px;
  font-weight: 700;
  width: 50%;
  color: #4023de;
  text-align: left;
  margin: 40px auto 20px auto;
`;
