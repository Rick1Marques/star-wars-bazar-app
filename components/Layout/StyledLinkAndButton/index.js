import styled from "styled-components";
import Link from "next/link";

export const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: white;
  position: absolute;
  top: 35px;
  left: 6%;
  @media screen and (min-width: 600px) {
    left: 32%;

`;

export const StyledLink = styled(Link)`
  background: linear-gradient(
    90deg,
    #baf0e0 -225%,
    rgba(64, 64, 64, 0) 133.33%
  );
  color: var(--secondary-color);
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 2rem;
  width: 6.25rem;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  padding-top: 5px;
  border-color: buttonborder;
  border-style: outset;
`;

export const StyledButton = styled.button`
  background: linear-gradient(
    90deg,
    #baf0e0 -225%,
    rgba(64, 64, 64, 0) 133.33%
  );
  color: rgba(243, 243, 243, 1);
  border-radius: 5px;
  border-width: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 2rem;
  width: 6.25rem;
  margin-top: 10px;
  font-family: "__Blinker_e074f9", "__Blinker_Fallback_e074f9";
  font-size: 16px;
`;
