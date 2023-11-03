import React, { useCallback, useEffect, useRef, useState } from "react";
import GlobalStyle from "../../../styles/GlobalStyle";
import styled from "styled-components";
import NavPC from "../../blocks/NavPC";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const contentsRef = useRef(null);
  const { pathname } = useLocation();
  const { id } = useParams();
  // const [sectionNum, setSectionNum] = useState(0);
  const [lastExecutedTime, setLastExecutedTime] = useState(Date.now());
  const navigate = useNavigate();

  const onWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (Date.now() - lastExecutedTime < 500) return;
    if (e.deltaY >= 0) {
      downScroll();
    } else {
      upScroll();
    }
    setLastExecutedTime(Date.now());
  };

  const downScroll = () => {
    // if (pathname === "/") {
    //   return navigate("/resume/profile");
    // }
    if (pathname.includes("profile")) {
      return navigate("/resume/skills");
    }
    if (pathname.includes("skills")) {
      return navigate("/portfolio");
    }
    if (pathname.includes("portfolio")) {
      if (id) return;
      return navigate("/contact");
    }
  };

  const upScroll = () => {
    if (pathname.includes("profile")) {
      return navigate("/");
    }
    if (pathname.includes("skills")) {
      return navigate("/resume/profile");
    }
    if (pathname.includes("portfolio")) {
      if (id) return;
      return navigate("/resume/skills");
    }
    // if (pathname.includes("contact")) {
    //   return navigate("/portfolio");
    // }
  };

  useEffect(() => {
    console.log(contentsRef);
  }, [contentsRef]);
  return (
    <Container>
      <NavPC />
      <ContentWrapStyle ref={contentsRef} onWheel={onWheel}>
        {children}
      </ContentWrapStyle>
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
  overflow: scroll;
`;
