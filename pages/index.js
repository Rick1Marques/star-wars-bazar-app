import Link from "next/link";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex";

const StyledLink = styled(Link)`
  color: var(--primary-title-color);
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    background-color: darkgrey;
  }
`;

export default function HomePage() {
  return (
    <Flex justifyContent="center">
      <StyledLink href="./marketplace">
        Welcome to the Star Wars Bazaar!
      </StyledLink>
    </Flex>
  );
}
