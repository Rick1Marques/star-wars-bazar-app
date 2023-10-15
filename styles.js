import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #1F2326;
    --secondary-color: #F3F3F3;
    --button-color: #363434;
    --primary-title-color: #FFE81F;
    --secondary-title-color: #FFE81F;
    --bar-color: #313131;
    --border-color: #baf0e0;
  }


  html {
    weight: 400;
    font-size: 16px;

  }

  body {
    margin: 0;
    color: var(--secondary-color);
background: black;

  }


  .space-background{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    background: transparent;
    z-index: -1;
  }
  .red {
    // border: 0.5px solid red;
    box-shadow: 0 0 8px 2px red

  }
  .green {
    // border: 0.5px solid green;
    box-shadow: 0 0 8px 2px green
  }


`;

export const colors = {
  defaultDark: "var(--primary-color)",
  defaultLight: "var(--secondary-color)",
  button: "var(--button-color)",
  title: "var(--primary-title-color)",
  subtitle: "var(--secondary-title-color)",
};
