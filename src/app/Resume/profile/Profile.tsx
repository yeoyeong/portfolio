import React from "react";
import AppLayout from "../../../ui/common/layout/AppLayout";
import styled from "styled-components";
import { visibilityAnimationReverse } from "src/styles/animaition/fadeIn";

const MyInfo = () => {
  return (
    <InfoWrap>
      <h3>About Me</h3>
      <ul>
        <li>
          <p>Name</p>
          <p>김영호</p>
        </li>
        <li>
          <p>Phone</p>
          <p>
            <a href="tel:01040603543">010-4060-3543</a>
          </p>
        </li>
        <li>
          <p>GitHub</p>
          <p>
            <a
              href="https://github.com/yeoyeong"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/yeoyeong
            </a>
            <br />
            <a
              href="https://github.com/jeelly"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/jeelly
            </a>
          </p>
        </li>
        <li>
          <p>Email</p>
          <p>
            <a href="mailto:yeoyyeong@gmail.com">yeoyyeong@gmail.com</a>
          </p>
        </li>
      </ul>
    </InfoWrap>
  );
};
const MyPhoto = () => {
  return <PhotoWrap></PhotoWrap>;
};
const InfoWrap = styled.section`
  margin-right: 162px;
  animation: ${visibilityAnimationReverse} 0.4s forwards;
  h3 {
    color: #4023de;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 49px;
  }
  > ul > li {
    display: flex;
    margin-bottom: 12px;
  }
  > ul > li p,
  ul > li a {
    font-size: 12px;
    color: var(--black);
  }
  > ul > li p:first-child {
    width: 36px;
    margin-right: 19px;
  }
`;
const PhotoWrap = styled.section`
  width: 284px;
  height: 302px;
  background-color: rosybrown;
`;
const Profile = () => {
  return (
    <Container>
      <MyInfo />
      <MyPhoto />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
