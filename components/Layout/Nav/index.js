import styled from "styled-components";
import Flex from "../Flex";
import Link from "next/link";

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 15px;
  position: fixed;
  padding: 0 1rem;
  height: 3rem;
  width: 90%;
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
      <Link href="/marketplace">Marketplace</Link>
      <Link href="/my-profile">My Profile</Link>
    </StyledNav>
  );
}
