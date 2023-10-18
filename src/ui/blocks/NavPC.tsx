import React, { useEffect, useState } from "react";
import { PC_NAV_DATA } from "../../data/navData";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavPC = () => {
  const { pathname } = useLocation();
  const NavStyle = (title: string) => {
    if (pathname.indexOf(title) > 0)
      return {
        color: "var(--white)",
      };
    else return {};
  };

  return (
    <Container>
      <h1>YEOYEONG</h1>
      <ul>
        {PC_NAV_DATA.map((el, i) => (
          <li key={i}>
            <Link to={"/" + el.nav}>
              <p className="nav-title" style={NavStyle(el.nav)}>
                {el.title}
              </p>
            </Link>
            {el.sub && (
              <ul className="nav-sub_wrap">
                {el.sub.map((sub, sub_idx) => (
                  <li key={sub_idx}>
                    <Link to={"/" + el.nav + "/" + sub.nav}>
                      <p className="nav-sub_title" style={NavStyle(sub.nav)}>
                        <span>{sub.icon}</span>
                        {sub.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default NavPC;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: calc(100% - 85.68%);
  height: 100%;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 22px;
    color: var(--white);
    margin-top: 100px;
    margin-bottom: 74px;
    text-align: center;
  }
  ul > li > ul > li {
    text-align: center;
  }
  ul > li > ul > li:after {
    content: "";
    width: 1px;
    height: 16px;
    display: inline-block;
    background-color: var(--sub);
    margin: 2px 0;
  }
  .nav-title {
    color: var(--sub);
    font-size: 21px;
    margin-bottom: 4px;
  }
  .nav-sub_wrap {
  }
  .nav-sub_title {
    font-size: 16px;
    color: var(--sub);
    display: flex;
    align-items: center;
    text-align: right;
    span {
      display: block;
      width: 16px;
      height: 16px;
      font-size: 16px;
      margin-right: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
