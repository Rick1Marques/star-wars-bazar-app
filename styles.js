import { createGlobalStyle } from "styled-components";
// import { Blinker } from "next/font/google";

// const blinker = Blinker({ subset: ["latin"] });

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
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  body {
    margin: 0;
background: var(--primary-color);
  }


`;

// #__next {
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   min-height: 100vh;
// }

export const colors = {
  defaultDark: "var(--primary-color)",
  defaultLight: "var(--secondary-color)",
  button: "var(--button-color)",
  title: "var(--primary-title-color)",
  subtitle: "var(--secondary-title-color)",
};
