import styled from "styled-components";

const StyledAppTitle = styled.h1`
  color: var(--secondary-color);
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
`;

export default function AppTitle() {
  return <StyledAppTitle>Star Wars Bazaar</StyledAppTitle>;
}
