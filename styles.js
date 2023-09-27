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
  }


  html {
    weight: 400;
    font-size: 16px;

  }

  body {
    margin: 0;
    color: var(--secondary-color);
background: var(--primary-color);
  }


`;

export const colors = {
  defaultDark: "var(--primary-color)",
  defaultLight: "var(--secondary-color)",
  button: "var(--button-color)",
  title: "var(--primary-title-color)",
  subtitle: "var(--secondary-title-color)",
};
