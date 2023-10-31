import React, { useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { portfolioData } from "src/data/portfolioData";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
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
  return (
    <Container>
      <VisualArea>
        <img src={content.img} alt={content.title + "커버사진"}></img>
      </VisualArea>
      <TextArea>
        <b>Project Name</b>
        <p>{content.title}</p>
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
        {content.framework && (
          <>
            <b>FrameWork</b>
            <p style={colorRed}>{content.framework}</p>
          </>
        )}
        <b>Language</b>
        <p style={colorRed}>{content.language}</p>
        <b>Front-end</b>
        <ul>
          {content.front_end.map((el, i) => (
            <li key={i}>
              <p>
                {el}
                {content.front_end.length - 1 !== i && " / "}
              </p>
            </li>
          ))}
        </ul>
        <b>Deployment</b>
        <ul>
          {content.Deployment.map((el, i) => (
            <li key={i}>
              <p>
                {el}
                {content.Deployment.length - 1 !== i && " /"}
              </p>
            </li>
          ))}
        </ul>
      </TextArea>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-top: 10%;
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
`;
