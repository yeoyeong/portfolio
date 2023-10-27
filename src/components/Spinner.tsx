import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <Loading>
      <div></div>
    </Loading>
  );
};

export default Spinner;

const spin = keyframes`
  to { 
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  div {
    display: block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(167, 147, 192, 0.3);
    border-radius: 50%;
    border-top-color: #6f50b2;
    animation: ${spin} 1s ease-in-out infinite;
    -webkit-animation: ${spin} 1s ease-in-out infinite;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
