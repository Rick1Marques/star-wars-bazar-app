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

  @media screen and (min-width: 600px) {

    html {
      weight: 400;
      font-size: 16px;
      max-width: 436px;
      margin-left: auto;
      margin-right: auto;
    }
  }

   body {
    color: var(--secondary-color);
    background: #020409;
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
    border: 0.5px solid #a60303; 
    box-shadow: 0 0 10px 0 #a60303; 

  }
  .green {
    border: 0.5px solid #0DF205; 
    box-shadow: 0 0 10px 0 #0DF205; 
  }
`;

export const colors = {
  defaultDark: "var(--primary-color)",
  defaultLight: "var(--secondary-color)",
  button: "var(--button-color)",
  title: "var(--primary-title-color)",
  subtitle: "var(--secondary-title-color)",
};
