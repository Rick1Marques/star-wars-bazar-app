import styled from "styled-components";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

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
  max-width: 436px;
  margin-left: auto;
  margin-right: auto;

  a {
    text-decoration: none;
    color: var(--secondary-color);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Nav({ mainTheme }) {
  return (
    <StyledNav className={mainTheme}>
      <Link href="/marketplace">
        <BiHomeAlt2 size={25} />
      </Link>
      <Link href="/my-profile">
        <BiUserCircle size={25} />
      </Link>
    </StyledNav>
  );
}
