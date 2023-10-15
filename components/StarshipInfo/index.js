import styled from "styled-components";
import Flex from "../Layout/Flex";

const StyledDetail = styled.dd`
  color: var(--secondary-color);
  text-align: right;
`;

const StyledTerm = styled.dt`
  color: #cdffbb;
`;

export default function StarshipInfo({ label, value }) {
  return (
    <Flex as="dl" justifyContent="space-between">
      <StyledTerm>{label}</StyledTerm>
      <StyledDetail>{value}</StyledDetail>
    </Flex>
  );
}
