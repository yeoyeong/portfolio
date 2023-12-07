import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { portfolioData } from "src/data/portfolioData";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "src/assets/left_arrow_black.svg";
import { ReactComponent as RightArrow } from "src/assets/right_arrow_black.svg";
import { ReactComponent as BackIcon } from "src/assets/back_icon.svg";
const Detail = () => {
  const { id } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();
  const content = useMemo(
    () => portfolioData.filter((item) => item.title === id)[0],
    [id]
  );
  const colorRed = useMemo(
    () => ({
      color: "red",
    }),
    []
  );

  const pageRightHandler = () => {
    if (pageNum >= 2) return;
    setPageNum((prev) => prev + 1);
  };
  const pageLeftHandler = () => {
    if (pageNum <= 1) return;
    setPageNum((prev) => prev - 1);
  };
  const pageBackHadnler = () => {
    navigate(-1);
  };
  const Page01 = () => {
    return (
      <>
        {/* <b>Project Name</b>
          <p>{content.title}</p> */}
        <b>Introduce</b>
        <p>{content.info}</p>
        <b>Year</b>
        <p>{content.year}</p>
        {content.link && (
          <>
            <b>Link</b>
            {content.link ? (
              <a rel="noopener noreferrer" href={content.link} target="_blank">
                {content.link}
              </a>
            ) : (
              <p>-</p>
            )}
          </>
        )}
        <b>Github</b>
        {content.github ? (
          <a rel="noopener noreferrer" href={content.github} target="_blank">
            {content.github}
          </a>
        ) : (
          <p>-</p>
        )}
        {content.setting && (
          <>
            <b>setting</b>
            <p style={colorRed}>{content.setting}</p>
          </>
        )}
        <b>Language</b>
        <p style={colorRed}>{content.language}</p>
        <b>skills</b>
        <ul>
          {content.skills.map((el, i) => (
            <li key={i}>
              <p>
                {el}
                {content.skills.length - 1 !== i && " / "}
              </p>
            </li>
          ))}
        </ul>
        <b>Deployment</b>
        <ul>
          {content.deployment.map((el, i) => (
            <li key={i}>
              <p>
                {el}
                {content.deployment.length - 1 !== i && " /"}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  };
  const Page02 = () => {
    return (
      <>
        <b>Development</b>
        <ul className="page02-list_style">
          {content.development.map((el) => (
            <li>
              {el.title}
              <ul className="page02-sub-list_style">
                {el.subMenu && el.subMenu.map((el) => <li>{el}</li>)}
              </ul>
            </li>
          ))}
        </ul>
        <b>Reuslt</b>
        <ul className="page02-list_style">
          {content.result.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <Container>
      <div className="header">
        <button onClick={pageBackHadnler}>
          <BackIcon />
        </button>
        <h2>{content.title}</h2>
      </div>
      <div className="content">
        <VisualArea>
          <img src={content.thumbnail} alt={content.title + "커버사진"}></img>
        </VisualArea>
        <TextArea>
          {pageNum === 1 ? <Page01 /> : pageNum === 2 ? <Page02 /> : ""}
        </TextArea>
      </div>
      <div className="button_wrap">
        <button onClick={pageLeftHandler}>
          <LeftArrow fill={pageNum === 1 ? "gray" : "#5b659a"} />
        </button>
        <button onClick={pageRightHandler}>
          <RightArrow fill={pageNum === 2 ? "gray" : "#5b659a"} />
        </button>
      </div>
    </Container>
  );
};

export default Detail;

// deployment: ["Vercel"],
//     development: [
//       {
//         title: "로그인, 회원가입",
//         subMenu: [],
//       },
//       {
//         title: "투두 리스트 CRUD",
//         subMenu: [],
//       },
//       {
//         title: "Drag&Drop",
//         subMenu: [],
//       },
//     ],
//     result: [
//       "Vercel을 사용한 next 배포",
//       "React Components 에서 서버 API 직접 호출",
//       "next14의 라이프 사이클에 대한 경험",
//       "Drag&Drop 으로 TODO 상태 업데이트 구현",
//     ],
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 5% 0;
  .header {
    width: 100%;
    padding: 0 30px;
    button{
      width:40px;
      border:none;
      background-color:transparent;
      cursor:pointer;
      svg {
      width:100%
      text-align: left;
    }
    }
    
    h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
  .button_wrap {
    display: flex;
    gap: 6px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

const VisualArea = styled.div`
  width: 400px;
  overflow: hidden;
  /* object-position: center; */

  img {
    width: 400px;
  }
`;

const TextArea = styled.div`
  max-width: 40%;
  p {
    font-size: 14px;
  }
  a {
    color: #7070d2;
    font-size: 14px;
  }
  b {
    display: block;
    max-width: 60%;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 4px;
  }
  li > p {
    color: red;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .page02-list_style {
    padding-top: 6px;
    padding-left: 24px;
    list-style: inside;
    list-style-position: outside;
    li {
      font-size: 14px;
    }
  }
  .page02-sub-list_style {
    list-style: outside circle;
    padding: 6px 0 3px 16px;
  }
`;
