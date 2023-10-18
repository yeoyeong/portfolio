import React from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import styled from "styled-components";
import NavPC from "../../blocks/NavPC";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <NavPC />
      <ContentWrapStyle>{children}</ContentWrapStyle>
      <GlobalStyle />
    </Container>
  );
};

export default AppLayout;

const Container = styled.div`
  background-color: var(--background);
  height: 100vh;
  width: 100%;
  min-width: 1000px;
  padding: 16px;
  /* padding: 0.83%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContentWrapStyle = styled.div`
  width: 85.68%;
  background-color: var(--white);
  /* height: calc(100% - 16px); */
  height: 100%;
  border-radius: 10px;
`;
