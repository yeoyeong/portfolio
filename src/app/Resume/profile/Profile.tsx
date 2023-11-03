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
          <p>Email</p>
          <p>
            <a href="mailto:yeoyyeong@gmail.com">yeoyyeong@gmail.com</a>
          </p>
        </li>
        <IconWrap>
          <div>
            <a
              href="https://github.com/yeoyeong"
              target="_blank"
              rel="noreferrer noopener"
            >
              GITHUB
            </a>
            <a
              href="https://yeoyeong.tistory.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              BLOG
            </a>
          </div>
        </IconWrap>
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
  ul > li > p > a {
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

const IconWrap = styled.li`
  /* display: flex; */
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    a {
      text-align: center;
      width: 50%;
      padding: 8px 0;
      border-radius: 26px;
      background-color: var(--black);
      color: var(--white);
      font-weight: 700;
      font-size: 12px;
    }
    a:last-child {
      /* background-color: #ea531e; */
      background-color: #eee;
      color: var(--black);
    }
  }
`;
