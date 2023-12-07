import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageComponent from "src/components/ImageComponent";
import { portfolioData } from "src/data/portfolioData";
import styled from "styled-components";

const PortfolioMain = () => {
  return (
    <Container>
      <PortfolioContentsWrap>
        {portfolioData.map(
          ({
            title,
            setting,
            thumbnail,
            year,
          }: {
            title: string;
            setting: string;
            thumbnail: string;
            year: string;
          }) => (
            <li key={title}>
              <Link to={"/portfolio/" + title}>
                <div className="imageWrap">
                  <ImageComponent
                    imageUrl={thumbnail}
                    alt={title + "커버사진"}
                  />
                </div>
                <p className="title">
                  <span>{"[" + setting + "]"}</span>
                  {title}
                </p>
                <p className="make_year">
                  <span>{year}</span>
                </p>
              </Link>
            </li>
          )
        )}
      </PortfolioContentsWrap>
    </Container>
  );
};

export default PortfolioMain;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const PortfolioContentsWrap = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(23%, 23%));
  grid-gap: 3% 1%;
  justify-content: center;
  /* 85.68% */
  /* place-items: center; */
  /* justify-content: center;
  align-items: center; */
  /* width: 100%; */
  li {
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(0 0 0 / 0.05),
      0.1rem 0.1rem 0.7rem rgb(0 0 0 / 0.1);
    border-radius: 5px;
    padding-bottom: 20px;
    width: 100%;
    cursor: pointer;
    .imageWrap {
      display: flex;
      justify-content: center;
      height: 20vh;
      overflow: hidden;
      span {
        width: 100%;
        height: 150px;
        background-color: red;
      }
      img {
        width: 100%;
        /* object-fit: cover; */
        border-radius: 5px 5px 0 0;
      }
    }

    p {
      margin-left: 10px;
    }
    .title {
      margin-top: 10px;
      margin-bottom: 13px;
      font-size: 16px;
      font-weight: 400;
      span {
        font-weight: 600;
        color: var(--background);
      }
    }
    .make_year {
      span {
        font-size: 12px;
        background-color: #ffdbe1;
        border-radius: 5px;
        padding: 3px 6px;
        box-sizing: border-box;
      }
    }
  }
  li:hover {
    transform: scale(1.04);
    margin: 0 1%;
    transition: 0.2s;
  }
`;
