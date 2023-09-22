import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledParagraph = styled.p`
  color: var(--primary-title-color);
`;
const StyledSpan = styled.span`
  color: var(--secondary-color);
`;

export default function StarshipInfo({ label, value }) {
  return (
    <Flex justifyContent="space-between">
      <StyledParagraph>{label}</StyledParagraph>
      <StyledSpan>{value.split("", 24)}</StyledSpan>
    </Flex>
  );
}
