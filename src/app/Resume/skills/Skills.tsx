import React from "react";
import { visibilityAnimationReverse } from "src/styles/animaition/fadeIn";
import AppLayout from "src/ui/common/layout/AppLayout";
import styled from "styled-components";

const Skills = () => {
  return (
    <IconWrap>
      <div>
        <div>
          <h4>Language</h4>
          <ul>
            <li>
              <span>
                <img
                  src="/img/icon/typescript_icon.svg"
                  alt="typescript_icon"
                />
              </span>
              TS
            </li>
            <li>
              <span>
                <img
                  src="/img/icon/javascript_icon.svg"
                  alt="javascript_icon"
                />
              </span>
              JS
            </li>
          </ul>
        </div>
        <div>
          <h4>Front-End</h4>
          <ul>
            <li>
              <span>
                <img src="/img/icon/html_icon.svg" alt="html_icon" />
              </span>
              HTML
            </li>
            <li>
              <span>
                <img src="/img/icon/css_icon.svg" alt="css_icon" />
              </span>
              CSS
            </li>
            <li>
              <span>
                <img src="/img/icon/nextjs_icon.svg" alt="nextjs_icon" />
              </span>
              Next13
            </li>
            <li>
              <span>
                <img src="/img/icon/react_icon.svg" alt="react_icon" />
              </span>
              React
            </li>
            <li>
              <span>
                <img src="/img/icon/redux_icon.svg" alt="redux_icon" />
              </span>
              Redux
            </li>
          </ul>
        </div>
        <div>
          <h4>Back-end</h4>
          <ul>
            <li>
              <span>
                <img src="/img/icon/firebase_icon.svg" alt="firebase_icon" />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div>
          <h4>DevOps</h4>
          <ul>
            <li>
              <span>
                <img src="/img/icon/aws_ec2_icon.svg" alt="ec2 아이콘" />
              </span>
              EC2
            </li>
            <li>
              <span>
                <img src="/img/icon/aws_s3_icon.svg" alt="aws_s3_icon" />
              </span>
              S3
            </li>
            <li>
              <span>
                <img
                  src="/img/icon/aws_clundfront_icon.svg"
                  alt="aws_clundfront_icon"
                />
              </span>
              Cloud Front
            </li>
            <li>
              <span>
                <img src="/img/icon/notion_icon.svg" alt="notion_icon" />
              </span>
              Notion
            </li>
            <li>
              <span>
                <img src="/img/icon/github_icon.svg" alt="github_icon" />
              </span>
              GitHub
            </li>
            <li>
              <span>
                <img src="/img/icon/figma_icon.svg" alt="figma_icon" />
              </span>
              Figma
            </li>
          </ul>
        </div>
      </div>
    </IconWrap>
  );
};

export default Skills;

const IconWrap = styled.ul`
  animation: ${visibilityAnimationReverse} 0.4s forwards;
  display: flex;
  align-items: center;
  > div {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 40%;
    }
  }

  padding-left: 10%;
  padding-right: 20%;
  /* justify-content: center; */
  height: 100%;
  h4 {
    font-weight: 700;
    font-size: 22px;
    color: #4023de;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    gap: 8px;
    li {
      text-align: center;
      span {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: #3f23de78; */
        border: 1px solid #27272778;
        img {
          width: 40px;
          margin: 0;
          box-sizing: border-box;
        }
        margin-bottom: 4px;
      }
      transition: 0.5s;
    }
    li:hover {
      transform: scale(1.2);
      margin: 0 10px;
    }
  }
`;
