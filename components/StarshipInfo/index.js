import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledDetail = styled.dd`
  color: var(--secondary-color);
`;

const StyledTerm = styled.dt`
  color: #cdffbb;
`;

function info(word) {
  if (word.length > 28) {
    return `${word.slice(0, 28)}...`;
  }
  return word;
}

export default function StarshipInfo({ label, value }) {
  return (
    <Flex as="dl" justifyContent="space-between">
      <StyledTerm>{label}</StyledTerm>
      <StyledDetail>{info(value)}</StyledDetail>
    </Flex>
  );
}
