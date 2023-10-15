import styled from "styled-components";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { Blinker } from "@next/font/google";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 7px;
  position: fixed;
  padding: 0 1rem;
  height: 3rem;
  width: 97%;
  border: 0.5px solid var(--border-color);
  border-radius: 17px;
  background-color: var(--bar-color);

  a {
    text-decoration: none;
    color: var(--secondary-color);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/marketplace">
        <BiHomeAlt2 size={25} />
      </Link>
      <Link href="/my-profile">
        <BiUserCircle size={25} />
      </Link>
    </StyledNav>
  );
}
