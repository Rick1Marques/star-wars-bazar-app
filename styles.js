import { createGlobalStyle } from "styled-components";
import { Blinker } from "next/font/google";

const blinker = Blinker({ subset: ["latin"] });

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
    --primary-title-color: linear-gradient(90deg, rgba(143	238	204) 0%, rgba(215, 218, 53, 0.65) 100%);
    --secondary-title-color: #8FEECC;
  }


  html {
    font-family: var(--font-blinker);
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
