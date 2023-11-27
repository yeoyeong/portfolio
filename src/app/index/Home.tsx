import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IndexBoxAnimation,
  curtainAnimationLeft,
  curtainAnimationRight,
} from "src/styles/animaition/fadeIn";
import styled, { css } from "styled-components";

const Home = () => {
  const [scrollCnt, setScrollCnt] = useState(50);
  const [boxCnt, setBoxCnt] = useState(50);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (e.deltaY >= 0) downScroll();
    else upScroll();
  };

  const upScroll = () => {
    if (boxCnt <= -50) return;
    if (scrollCnt <= 50) return;
    setScrollCnt((prev) => prev - 10);
    if (scrollCnt > 90 && boxCnt < 50) {
      setBoxCnt((prev) => prev + 20);
    }
  };

  const downScroll = () => {
    if (scrollCnt <= 170) {
      setScrollCnt((prev) => prev + 10);
    }
    if (scrollCnt > 90 && boxCnt > -50) {
      setBoxCnt((prev) => prev - 20);
    }
  };

  useEffect(() => {
    if (boxCnt !== -50 && scrollCnt !== 170) return;
    setTimeout(() => {
      if (pathname === "/") {
        return navigate("/resume/profile");
      }
    }, 1400);
  }, [scrollCnt, boxCnt]);

  return (
    <Container onWheel={onWheel}>
      <div className="curtain__panel curtain__panel--left"></div>
      <div className="curtain__panel curtain__panel--right"></div>
      <ContentWrap $scrollCnt={scrollCnt}>
        <VisunalContainer>
          <h2 className="on-front">KIMYEONGHO</h2>
          <p className="on-front">WEB DEVELOPER</p>
        </VisunalContainer>
        <TextContainer>
          <h2 className="on-back">KIMYEONGHO</h2>
          <p className="on-back">WEB DEVELOPER</p>
        </TextContainer>
        <Box $boxCnt={boxCnt} />
      </ContentWrap>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: var(--background);
  overflow: hidden;

  .curtain__panel {
    background-color: #3c425a;
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    transition: all 0.5s ease-out;
    z-index: 5;
  }
  .curtain__panel--left {
    left: 0;
    animation: ${curtainAnimationLeft} 1.8s forwards;
  }
  .curtain__panel--right {
    right: 0;
    animation: ${curtainAnimationRight} 1.8s forwards;
  }
`;

const ContentWrap = styled.div<{ $scrollCnt: number }>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  h2,
  p {
    font-size: 100px;
    font-weight: 900;
    color: #4023de;
    /* -webkit-text-stroke: 0.02em #4023de; */
    position: absolute;
    top: 30%;
    left: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    transform: ${(props) => `translate(-${props.$scrollCnt}%, -50%)`};
  }
  p {
    top: 50%;
    left: auto;
    right: 50%;
    /* transform: translate(50%, -50%); */
    transform: ${(props) => `translate(${props.$scrollCnt}%, -50%)`};
  }
  .on-front {
    color: transparent;
    -webkit-text-stroke: 0.02em #ffffff;
  }
  .on-back {
    z-index: 1;
  }
`;

const VisunalContainer = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;

  background: #237dde;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;
const TextContainer = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
`;

const Box = styled.div<{ $boxCnt: number }>`
  width: 85.68%;
  height: calc(100% - 16px);
  background-color: var(--white);
  border-radius: 10px;
  position: absolute;
  z-index: 3;
  top: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  transform: ${(props) => `translate(50%, ${props.$boxCnt}%)`};
  animation: ${(props) =>
    props.$boxCnt === -50
      ? css`
          ${IndexBoxAnimation} 1.3s ease forwards
        `
      : ""};
`;
