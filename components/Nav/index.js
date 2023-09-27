import styled from "styled-components";
import Flex from "../Layout/Flex";
import Link from "next/link";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0px;
  position: fixed;
  padding: 0 1rem;
  height: 3rem;
  width: 100%;
  font-weight: bold;
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
      <Link href="/marketplace">Marketplace</Link>
      <Link href="/users-profile">My Profile</Link>
    </StyledNav>
  );
}
