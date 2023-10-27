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
            <Link to={content.link}>{content.link}</Link>
          </>
        )}
        <b>Github</b>
        <Link to={content.github}>{content.github}</Link>
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
            <li>
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
            <li>
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
  height: 100%;
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
  b {
    display: block;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 4px;
  }
  li > p {
    color: red;
  }
  ul {
    display: flex;
    gap: 6px;
  }
`;
