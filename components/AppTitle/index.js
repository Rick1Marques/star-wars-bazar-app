import styled from "styled-components";

const StyledAppTitle = styled.h1`
  color: var(--primary-title-color);
  font-size: 2rem;
  text-align: center;
`;

export default function AppTitle() {
  return <StyledAppTitle>Star Wars Bazar</StyledAppTitle>;
}
