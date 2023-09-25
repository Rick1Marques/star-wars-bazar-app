import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledSpan = styled.span`
  color: var(--secondary-color);
`;

const StyledParagraph = styled.div`
  color: var(--primary-title-color);
`;

function info(word) {
  if (word.length > 28) {
    return `${word.slice(0, 28)}...`;
  }
  return word;
}

export default function StarshipInfo({ label, value }) {
  return (
    <Flex justifyContent="space-between">
      <StyledParagraph>{label}</StyledParagraph>
      <StyledSpan>{info(value)}</StyledSpan>
    </Flex>
  );
}
