import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {margin: 0;padding: 0;vertical-align:middle;font-size: 100%;box-sizing: border-box;font-size-adjust:100%;}
  html,body {width: 100%;height: 100%;}
  html {overflow-y: scroll;/* scroll-behavior: smooth; */}
  h1,h2,h3,h4,h5,h6,strong,b {font-weight: normal;font-size: 16px;}
  i,em,address {font-style: normal;}
  ul {list-style: none;}
  a {color:#444;text-decoration: none;;}
  strong,b,i,em,span,a {vertical-align: baseline;}
  .hide {display: none;}
  .clear::after {content:"";display: block;clear: both;}

  #skip {position: absolute;z-index: 2;width:100%;top:0;left:0;}
  #skip li {width:100%;}
  #skip li a {display:flex;align-items: center;justify-content: center;width:100%;height:0;font-size:0;color:#fff;background: #000;}
  #skip li a:focus {height:50px;font-size:20px;}


  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: normal 16px/1 'Inter', 'Noto Sans', 'Noto Sans KR', 'Nanum Gothic', '맑은고딕', 'Montserrat', 'arial', 'Cormorant Garamond', 'Cormorant';
  vertical-align: baseline;

  }
  /* HTML5 display-role reset for older browsers */

  /* article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  } */

  body {
  line-height: 1;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  }
  input {
    /* outline: none; */
  }
`;

export default GlobalStyle;
